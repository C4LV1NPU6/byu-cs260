blue = {
  type: "blue",
  width: 8,
  height: 8,
  color: "#00F",
  history: [],
  current_direction: null
};

red = {
  type: "red",
  width: 8,
  height: 8,
  color: "#F00",
  history: [],
  current_direction: null
};

game = {
  over: false,

  start: function () {
    cycle.resetBlue();
    cycle.resetRed();
    game.over = false;
    game.resetCanvas();
  },

  stop: function (cycle) {
    game.over = true;
    context.fillStyle = "#FFF";
    context.font = canvas.height / 18 + "px sans-serif";
    context.textAlign = "center";
    winner = cycle.type == "red" ? "BLUE" : "RED";
    context.fillText(
      "GAME OVER - " + winner + " WINS",
      canvas.width / 2,
      canvas.height / 2
    );
    context.fillText(
      "press enter to contine",
      canvas.width / 2,
      canvas.height / 2 + cycle.height * 3
    );
    cycle.color = "#FFF";
  },

  pause: function () {
    game.over = true;
    context.fillStyle = "#FFF";
    context.font = canvas.height / 18 + "px sans-serif";
    context.textAlign = "center";
    context.fillText(
      "Game paused, press enter to restart",
      canvas.width / 2,
      canvas.height / 2
    );
  },

  newLevel: function () {
    cycle.resetBlue();
    cycle.resetRed();
    this.resetCanvas();
  },

  resetCanvas: function () {
    context.clearRect(0, 0, canvas.width, canvas.height);
  },

  // Functionality for peer communication using WebSocket

  configureWebSocket() {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    /*this.socket.onopen = (event) => {
      this.displayMsg('system', 'game', 'connected');
    };
    this.socket.onclose = (event) => {
      this.displayMsg('system', 'game', 'disconnected');
    };*/
    this.socket.onmessage = async (event) => {
      const msg = JSON.parse(await event.data.text());
      /*if (msg.type === GameEndEvent) {
        this.displayMsg('player', msg.from, `scored ${msg.value.score}`);
      } else if (msg.type === GameStartEvent) {
        this.displayMsg('player', msg.from, `started a new game`);
      }*/
    };
  },

  displayMsg(cls, from, msg) {
    const chatText = document.querySelector('#player-messages');
    chatText.innerHTML =
      `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
  },

  broadcastEvent(from, type, value) {
    const event = {
      from: from,
      type: type,
      value: value,
    };
    this.socket.send(JSON.stringify(event));
  }
};

cycle = {
  resetBlue: function () {
    blue.x = canvas.width - (canvas.width / (blue.width / 2) + 4);
    blue.y = canvas.height / 2 + blue.height / 2;
    blue.color = "#1EF";
    blue.history = [];
    blue.current_direction = "left";
  },

  resetRed: function () {
    red.x = canvas.width / (red.width / 2) - 4;
    red.y = canvas.height / 2 + red.height / 2;
    red.color = "#EB0";
    red.history = [];
    red.current_direction = "e_right";
  },

  move: function (cycle, opponent, u, d, l, r) {
    switch (cycle.current_direction) {
      case u:
        cycle.y -= cycle.height;
        break;
      case d:
        cycle.y += cycle.height;
        break;
      case r:
        cycle.x += cycle.width;
        break;
      case l:
        cycle.x -= cycle.width;
        break;
    }
    if (this.checkCollision(cycle, opponent)) {
      game.stop(cycle);
    }
    coords = this.generateCoords(cycle);
    cycle.history.push(coords);
  },

  checkCollision: function (cycle, opponent) {
    if (
      cycle.x < cycle.width / 2 ||
      cycle.x > canvas.width - cycle.width / 2 ||
      cycle.y < cycle.height / 2 ||
      cycle.y > canvas.height - cycle.height / 2 ||
      cycle.history.indexOf(this.generateCoords(cycle)) >= 0 ||
      opponent.history.indexOf(this.generateCoords(cycle)) >= 0
    ) {
      return true;
    }
  },

  isCollision: function (x, y) {
    coords = x + "," + y;
    if (
      x < red.width / 2 ||
      x > canvas.width - red.width / 2 ||
      y < red.height / 2 ||
      y > canvas.height - red.height / 2 ||
      red.history.indexOf(coords) >= 0 ||
      blue.history.indexOf(coords) >= 0
    ) {
      return true;
    }
  },

  generateCoords: function (cycle) {
    return cycle.x + "," + cycle.y;
  },

  draw: function (cycle) {
    context.fillStyle = cycle.color;
    context.beginPath();
    context.moveTo(cycle.x - cycle.width / 2, cycle.y - cycle.height / 2);
    context.lineTo(cycle.x + cycle.width / 2, cycle.y - cycle.height / 2);
    context.lineTo(cycle.x + cycle.width / 2, cycle.y + cycle.height / 2);
    context.lineTo(cycle.x - cycle.width / 2, cycle.y + cycle.height / 2);
    context.closePath();
    context.fill();
  }
};


keys = {
  up: [38],
  down: [40],
  left: [37],
  right: [39],

  start_game: [13],

  e_up: [87],
  e_down: [83],
  e_left: [65],
  e_right: [68]
};

addEventListener(
  "keydown",
  function (e) {
    lastKey = keys.getKey(e.keyCode);
    if (
      ["up", "down", "left", "right"].indexOf(lastKey) >= 0 &&
      lastKey != inverseDirection(blue, "up", "down", "left", "right")
    ) {
      blue.current_direction = lastKey;
    }
    if (
      ["e_up", "e_down", "e_left", "e_right"].indexOf(lastKey) >= 0 &&
      lastKey != inverseDirection(red, "e_up", "e_down", "e_left", "e_right")
    ) {
      red.current_direction = lastKey;
    }
    if (["start_game"].indexOf(lastKey) >= 0 && game.over) {
      game.start();
    }
    if (e.key === "Escape") {
      game.pause();
    }
  },
  false
);

Object.prototype.getKey = function (value) {
  for (var key in this) {
    if (this[key] instanceof Array && this[key].indexOf(value) >= 0) {
      return key;
    }
  }
  return null;
};

function inverseDirection(cycle, u, d, l, r) {
  switch (cycle.current_direction) {
    case u:
      return d;
      break;
    case d:
      return u;
      break;
    case r:
      return l;
      break;
    case l:
      return r;
      break;
  }
}


async function initialize() {
  user = await getUser(localStorage.getItem('userName'));

  if (user.username === user.game) {
    //user is assigned to blue
  } else {
    //user is assigned to red
  }

  document.querySelector('#userName').textContent = user.username;
  canvas = document.getElementById("arena");

  document.querySelector('#wins').textContent = "Wins: " + user.wins;
  document.querySelector('#losses').textContent = "Losses: " + user.losses;

  context = canvas.getContext("2d");
  setInterval(loop, 100);
  lastKey = null;
}

async function getUser(username) {
  // See if we have a user with the given username.
  const response = await fetch(`/api/user/${username}`);
  if (response.status === 200) {
    return response.json();
  }
  return null;
}

function loop() {
  if (game.over === false) {
    cycle.move(blue, red, "up", "down", "left", "right");
    cycle.draw(blue);
    cycle.move(red, blue, "e_up", "e_down", "e_left", "e_right");
    cycle.draw(red);
  }
}

function logout() {
  fetch(`/api/auth/logout`, {
    method: 'delete',
  }).then(() => (window.location.href = '/'));
  localStorage.deleteItem('userName');
}

initialize();

//TODO: 
//assign player to blue or red
//make keystrokes send messages to other player
//make keystroke receptions for other player
//remove arrow key controls for other player
//change peerProxy.js so messages only go to+from one other player
//NOTES:
//all changes should be made in game.js and peerProxy.js (as far as I know)
//try not to restructure everything (I really like the current organization)
//use Simon code, TAs, other students, and internet for help