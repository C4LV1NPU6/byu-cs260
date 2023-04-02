user = {};

player = {};

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
  pause_game: [27]/*,

  e_up: [87],
  e_down: [83],
  e_left: [65],
  e_right: [68]*/
};

addEventListener(
  "keydown",
  function (e) {
    lastKey = keys.getKey(e.keyCode);
    if (['start_game'].indexOf(lastKey) >= 0 && game.over) {
      game.start();
      broadcastEvent(user.username, user.game, 'start_game', null);
    }
    if (['pause_game'].indexOf(lastKey) >= 0) {
      game.pause();
      broadcastEvent(user.username, user.game, 'pause_game', null);
    }
    if (player === blue &&
      ['up', 'down', 'left', 'right'].indexOf(lastKey) >= 0 &&
      lastKey != inverseDirection(blue, 'up', 'down', 'left', 'right')
    ) {
      blue.current_direction = lastKey;
      broadcastEvent(user.username, user.game, lastKey, null);
    }
    if (player === red &&
      ['up', 'down', 'left', 'right'].indexOf(lastKey) >= 0 &&
      lastKey != inverseDirection(red, 'up', 'down', 'left', 'right')
    ) {
      red.current_direction = lastKey;
      broadcastEvent(user.username, user.game, lastKey, null);
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
    player = blue;
  } else {
    player = red;
  }

  document.querySelector('#userName').textContent = user.username;
  canvas = document.getElementById("arena");

  document.querySelector('#wins').textContent = "Wins: " + user.wins;
  document.querySelector('#losses').textContent = "Losses: " + user.losses;

  context = canvas.getContext("2d");
  setInterval(loop, 100);
  lastKey = null;

  configureWebSocket();
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
    cycle.move(blue, red, 'up', 'down', 'left', 'right');
    cycle.draw(blue);
    cycle.move(red, blue, 'up', 'down', 'left', 'right');
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
//change peerProxy.js so messages only go to+from one other player (finish+test multiplayer)
//implement score and chat
//make it look fancy
//NOTES:
//all changes should be made in game.js and peerProxy.js (as far as I know)
//try not to restructure everything (I really like the current organization)
//use me, my messages, Simon code (play.js+peerProxy.js), TAs, other students, and internet for help



// Functionality for peer communication using WebSocket

function configureWebSocket() {
  const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
  socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
  socket.onopen = (event) => {
    //displayMsg('system', 'game', 'connected');
  };
  socket.onclose = (event) => {
    //displayMsg('system', 'game', 'disconnected');
  };
  socket.onmessage = async (event) => {
    const msg = JSON.parse(await event.data.text());
    if (msg.type === 'gameStart') {
      game.start();
    }
    if (msg.type === 'gamePause') {
      game.pause();
    }
    if (player === blue &&
      ['up', 'down', 'left', 'right'].indexOf(msg.type) >= 0
    ) {
      red.current_direction = msg.type;
    }
    if (player === red &&
      ['up', 'down', 'left', 'right'].indexOf(msg.type) >= 0
    ) {
      blue.current_direction = msg.type;
    }
  };
}

function broadcastEvent(from, type, value) {
  const event = {
    from: from,
    to: to,
    type: type,
    value: value,
  };
  this.socket.send(JSON.stringify(event));
}

/*function displayMsg(cls, from, msg) {
  const chatText = document.querySelector('#player-messages');
  chatText.innerHTML =
    `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
}*/