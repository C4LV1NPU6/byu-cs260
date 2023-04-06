const keys = {
  'Enter': 'start_game',
  'ShiftRight': 'pause_game',
  'KeyW': 'up',
  'KeyS': 'down',
  'KeyA': 'left',
  'KeyD': 'right',
};

class Cycle {
  blue;
  red;

  constructor () {
    this.blue = {
      type: "blue",
      width: 8,
      height: 8,
      color: "#00F",
      history: [],
      current_direction: null
    };
    
    this.red = {
      type: "red",
      width: 8,
      height: 8,
      color: "#F00",
      history: [],
      current_direction: null
    };
  }
  
  resetBlue () {
    this.blue.x = game.canvas.width - (game.canvas.width / (this.blue.width / 2) + 4);
    this.blue.y = game.canvas.height / 2 + this.blue.height / 2;
    this.blue.color = "#00E0FF";
    this.blue.history = [];
    this.blue.current_direction = "left";
  }

  resetRed () {
    this.red.x = game.canvas.width / (this.red.width / 2) - 4;
    this.red.y = game.canvas.height / 2 + this.red.height / 2;
    this.red.color = "#FF8000";
    this.red.history = [];
    this.red.current_direction = "right";
  }

  move (cycle, opponent, u, d, l, r) {
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
      game.stop(cycle, opponent);
    }
    const coords = this.generateCoords(cycle);
    cycle.history.push(coords);
  }

  checkCollision (cycle, opponent) {
    if (
      cycle.x < cycle.width / 2 ||
      cycle.x > game.canvas.width - cycle.width / 2 ||
      cycle.y < cycle.height / 2 ||
      cycle.y > game.canvas.height - cycle.height / 2 ||
      cycle.history.indexOf(this.generateCoords(cycle)) >= 0 ||
      opponent.history.indexOf(this.generateCoords(cycle)) >= 0
    ) {
      return true;
    }
  }

  isCollision (x, y) {
    coords = x + "," + y;
    if (
      x < this.red.width / 2 ||
      x > game.canvas.width - this.red.width / 2 ||
      y < this.red.height / 2 ||
      y > game.canvas.height - this.red.height / 2 ||
      this.red.history.indexOf(coords) >= 0 ||
      this.blue.history.indexOf(coords) >= 0
    ) {
      return true;
    }
  }

  generateCoords (cycle) {
    return cycle.x + "," + cycle.y;
  }

  draw (cycle) {
    game.context.fillStyle = cycle.color;
    game.context.beginPath();
    game.context.moveTo(cycle.x - cycle.width / 2, cycle.y - cycle.height / 2);
    game.context.lineTo(cycle.x + cycle.width / 2, cycle.y - cycle.height / 2);
    game.context.lineTo(cycle.x + cycle.width / 2, cycle.y + cycle.height / 2);
    game.context.lineTo(cycle.x - cycle.width / 2, cycle.y + cycle.height / 2);
    game.context.closePath();
    game.context.fill();
  }
}

class Game {
  stopped;
  over;
  user;
  cycle;
  player;
  canvas;
  context;
  lastKey;


  constructor () {
    this.initialize();
  }

  initialize = async () => {
    const user = await this.getUser(localStorage.getItem('userName'));

    this.canvas = document.getElementById("arena");
    this.context = this.canvas.getContext("2d");

    this.stopped = false;
    this.over = true;

    this.user = user;

    this.cycle = new Cycle();
    
    if (this.user.username === this.user.game) {
      this.player = 'blue';
    } else {
      this.player = 'red';
    }
  
    document.querySelector('#userName').textContent = this.user.username;
    document.querySelector('#wins').textContent = "Wins: " + this.user.wins;
    document.querySelector('#losses').textContent = "Losses: " + this.user.losses;

    this.lastKey = null;
    addEventListener(
      "keydown",
      function (e) {
        debugger;
        game.lastKey = keys[e.code];
        if (['start_game'].indexOf(game.lastKey) >= 0 && game.stopped) {
          game.start();
          game.broadcastEvent(game.user.username, game.user.game, 'start_game', null);
        }
        if (['pause_game'].indexOf(game.lastKey) >= 0) {
          game.pause();
          game.broadcastEvent(game.user.username, game.user.game, 'pause_game', null);
        }
        if (game.player === 'blue' &&
          ['up', 'down', 'left', 'right'].indexOf(game.lastKey) >= 0 &&
          game.lastKey != game.inverseDirection(game.cycle.blue, 'up', 'down', 'left', 'right')
        ) {
          game.cycle.blue.current_direction = game.lastKey;
          game.broadcastEvent(game.user.username, game.user.game, game.lastKey, null);
        }
        if (game.player === 'red' &&
          ['up', 'down', 'left', 'right'].indexOf(game.lastKey) >= 0 &&
          game.lastKey != game.inverseDirection(game.cycle.red, 'up', 'down', 'left', 'right')
        ) {
          game.cycle.red.current_direction = game.lastKey;
          game.broadcastEvent(game.user.username, game.user.game, game.lastKey, null);
        }
      },
      false
    );

    setInterval(this.loop, 100);
  
    this.configureWebSocket();

    this.pause();
  }
    
  async getUser(username) {
    // See if we have a user with the given username.
    const response = await fetch(`/api/user/${username}`);
    if (response.status === 200) {
      return response.json();
    }
    return null;
  }
  
  inverseDirection(cycle, u, d, l, r) {
    switch (cycle.current_direction) {
      case u:
        return d;
      case d:
        return u;
      case r:
        return l;
      case l:
        return r;
    }
  }

  loop() {
    if (game.stopped === false) {
      game.cycle.move(game.cycle.blue, game.cycle.red, 'up', 'down', 'left', 'right');
      game.cycle.draw(game.cycle.blue);
      game.cycle.move(game.cycle.red, game.cycle.blue, 'up', 'down', 'left', 'right');
      game.cycle.draw(game.cycle.red);
    }
  }

  start () {
    game.cycle.resetBlue();
    game.cycle.resetRed();
    game.stopped = false;
    game.over = false;
    game.resetCanvas();
  }

  stop (cycle, opponent) {
    game.stopped = true;
    game.over = true;
    game.context.fillStyle = "#FFF";
    game.context.font = game.canvas.height / 18 + "px sans-serif";
    game.context.textAlign = "center";
    game.context.fillText(
      "GAME OVER - " + opponent.type.toUpperCase() + " WINS",
      game.canvas.width / 2,
      game.canvas.height / 2
    );
    cycle.color = "#FFF";

    if (game.player === opponent.type) {
      game.user.wins += 1;
    } else {
      game.user.losses += 1;
    }
    document.querySelector('#wins').textContent = "Wins: " + this.user.wins;
    document.querySelector('#losses').textContent = "Losses: " + this.user.losses;
    //TODO: update scores in database.
  }

  pause () {
    if (game.stopped === true && game.over === false) {
      game.stopped = false;
    } else {
      game.stopped = true;
    }
  }

  newLevel () {
    game.cycle.resetBlue();
    game.cycle.resetRed();
    game.resetCanvas();
  }

  resetCanvas () {
    game.context.clearRect(0, 0, game.canvas.width, game.canvas.height);
  }

  // Functionality for peer communication using WebSocket

  configureWebSocket() {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    this.socket = new WebSocket(`${protocol}://${window.location.host}/ws/${this.user.game}`);
    this.socket.onopen = (event) => {
      //displayMsg('system', 'game', 'connected');
    };
    this.socket.onclose = (event) => {
      //displayMsg('system', 'game', 'disconnected');
    };
    this.socket.onmessage = async (event) => {
      debugger;
      const msg = JSON.parse(await event.data.text());
      if (msg.type === 'start_game') {
        this.start();
      }
      if (msg.type === 'pause_game') {
        this.pause();
      }
      if (this.player === 'blue' &&
        ['up', 'down', 'left', 'right'].indexOf(msg.type) >= 0
      ) {
        this.cycle.red.current_direction = msg.type;
      }
      if (this.player === 'red' &&
        ['up', 'down', 'left', 'right'].indexOf(msg.type) >= 0
      ) {
        this.cycle.blue.current_direction = msg.type;
      }
    };
  }

  broadcastEvent(from, to, type, value) {
    const event = {
      from: from,
      to: to,
      type: type,
      value: value,
    };
    this.socket.send(JSON.stringify(event));
  }

  /*displayMsg(cls, from, msg) {
    const chatText = document.querySelector('#player-messages');
    chatText.innerHTML =
      `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
  }*/
}

function sendMsg() {
  const message = document.querySelector('#chatbox')?.value;
  document.getElementById("chat").innerHTML += "<h3>" + game.user.username + ": " + message + "</h3>";
  //TODO: send messages to opponent.
}

function logout() {
  fetch(`/api/auth/logout/${game.user.username}`, {
    method: 'delete',
  }).then(() => (window.location.href = '/'));
  localStorage.deleteItem('userName');
  //TODO: run this function when user leaves.?
}

const game = new Game();
