function logout() {
  fetch(`/api/auth/logout`, {
    method: 'delete',
  }).then(() => (window.location.href = '/'));
  localStorage.deleteItem('userName');
}

function initialize() {
  document.querySelector('#userName').textContent = localStorage.getItem('userName');
  canvas = document.getElementById("arena");
  //scoreboard = document.getElementById("text");
  context = canvas.getContext("2d");
  //scores = scoreboard.getContext("2d");
  setInterval(loop, 100);
  lastKey = null;
  //playerScores = new score(0, 0);
}

/*function score(player, enemy) {
  this.player = player;
  this.enemy = enemy;
  scores.font = canvas.height / 18 + "px sans-serif";
  scores.fillStyle = "F4E";
  scores.fillText("Player" + player + "\n" + "Enemy" + enemy, 40, 80);
}*/

enemy = {
  type: "enemy",
  width: 8,
  height: 8,
  color: "#F00",
  history: [],
  current_direction: null
};

player = {
  type: "player",
  width: 8,
  height: 8,
  color: "#00F",
  history: [],
  current_direction: null
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

game = {
  over: false,

  start: function () {
    cycle.resetPlayer();
    cycle.resetEnemy();
    game.over = false;
    game.resetCanvas();
  },

  stop: function (cycle) {
    game.over = true;
    context.fillStyle = "#FFF";
    context.font = canvas.height / 18 + "px sans-serif";
    context.textAlign = "center";
    winner = cycle.type == "enemy" ? "PLAYER" : "ENEMY";
    /*if (winner === "PLAYER") {
      playerScores.player += 1;
    } else {
      playerScores.enemy += 1;
    }*/
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
    cycle.resetPlayer();
    cycle.resetEnemy();
    this.resetCanvas();
  },

  resetCanvas: function () {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }
};

cycle = {
  resetPlayer: function () {
    player.x = canvas.width - (canvas.width / (player.width / 2) + 4);
    player.y = canvas.height / 2 + player.height / 2;
    player.color = "#1EF";
    player.history = [];
    player.current_direction = "left";
  },

  resetEnemy: function () {
    enemy.x = canvas.width / (enemy.width / 2) - 4;
    enemy.y = canvas.height / 2 + enemy.height / 2;
    enemy.color = "#EB0";
    enemy.history = [];
    enemy.current_direction = "e_right";
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
      x < enemy.width / 2 ||
      x > canvas.width - enemy.width / 2 ||
      y < enemy.height / 2 ||
      y > canvas.height - enemy.height / 2 ||
      enemy.history.indexOf(coords) >= 0 ||
      player.history.indexOf(coords) >= 0
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

Object.prototype.getKey = function (value) {
  for (var key in this) {
    if (this[key] instanceof Array && this[key].indexOf(value) >= 0) {
      return key;
    }
  }
  return null;
};

addEventListener(
  "keydown",
  function (e) {
    lastKey = keys.getKey(e.keyCode);
    if (
      ["up", "down", "left", "right"].indexOf(lastKey) >= 0 &&
      lastKey != inverseDirection(player, "up", "down", "left", "right")
    ) {
      player.current_direction = lastKey;
    }
    if (
      ["e_up", "e_down", "e_left", "e_right"].indexOf(lastKey) >= 0 &&
      lastKey != inverseDirection(enemy, "e_up", "e_down", "e_left", "e_right")
    ) {
      enemy.current_direction = lastKey;
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

function loop() {
  if (game.over === false) {
    cycle.move(player, enemy, "up", "down", "left", "right");
    cycle.draw(player);
    cycle.move(enemy, player, "e_up", "e_down", "e_left", "e_right");
    cycle.draw(enemy);
  }
}

initialize();