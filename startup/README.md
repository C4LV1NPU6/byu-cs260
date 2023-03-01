# README for Startup Web Application assignment, made by pair programmers Calvin Pugmire (C4LV1NPU6) and Tachiinii Ranger (rokketranger):

# This is the short unofficial README. For the full official README see the README directory.



## 1/23/23 (C4LV1NPU6):

This is the directory for the startup web application.

Access in VS code has been achieved.
Access in GitHub has been achieved.
Merge change part #1.
Merge change part #2.

GitHub notes: GitHub is a great way to backup my code. Pulling and pushing changes seem to be limited to the console on my computer. The console seems to be the best way for me to deal with the backup/syncing aspect of coding in this class.



## 1/26/23 (C4LV1NPU6+rokketranger):

Start up deliverable - specification:

Have you ever wanted to take part in a lightbike battle from the hit movie "Tron: Legacy", or wondered which of your friends you could beat in a head-to-head? The Tron Lightbike Battle application makes it so you and your friends can live out your Grid dreams. Any player can fight any other player in decisive 1v1s. Additionally, each player can easily keep track of their wins, losses, and position on the world-wide scoreboard!

![Illustration_sans_titre](https://user-images.githubusercontent.com/89880125/215221594-4fe18c7e-f147-41ed-9923-c7dba0f9fe23.jpg)

Key features:
-Secure login over HTTPS.
-Ability to play the Tron Lightbike Battle game with any other user.
-Ability to see personal match history and number of wins and losses.
-Ability to see total wins and losses from all users displayed in realtime on a world-wide scoreboard.
-Personal match history, wins, and losses for all users are persistently stored.



## 1/27/23 (C4LV1NPU6):

Set up a web server with AWS.

I found it interesting that it costs you the same amount regardless of whether your server is running or not running (at least when using an elastic IP address).

Browser address: http://3.15.70.3

Remote shell command: ssh -i ~/Desktop/finish.delete.Open\ Tabs/,schoolwork/CS\ 260/production.pem ubuntu@3.15.70.3



## 1/30/23 (C4LV1NPU6):

Set up domain name with AWS.

I found it interesting that my preferred domain name wasn't taken yet.

Domain name: http://startup.lightbikebattle.click/



## 2/2/23 (C4LV1NPU6):

Secured web server communication by configuring Caddy to request a certificate from Let's Encrypt for the domain name.

I found it interesting that we didn't start with https.

Host name: https://startup.lightbikebattle.click/



## 2/6/23 (C4LV1NPU6):

Set up official HTML website.

I found it interesting that I had to change my startup URL from cs260game.lightbikebattle.click to startup.lightbikebattle.click.

Site name: https://lightbikebattle.click/

Website deploy command: ./deployWebsite.sh -k ~/Desktop/finish.delete.Open\ Tabs/,schoolwork/CS\ 260/production.pem -h lightbikebattle.click



## 2/6/23 (C4LV1NPU6):

Set up Simon HTML sub-website.

I learned how to implement the Simon Game web application using only HTML. This included the layout and functions for the about, home, play, and scores pages. It was a lot of information but I studied it and copied it perfectly.

Sub-site name: https://simon.lightbikebattle.click/

Sub-site deploy command: ./deployFiles.sh -k ~/Desktop/finish.delete.Open\ Tabs/,schoolwork/CS\ 260/production.pem -h lightbikebattle.click -s simon



## 2/10/23 (C4LV1NPU6):

Made CSS Practice project. Can be used in Startup App's website.

I found the typing animation interesting.

CSSP CodePen URL: https://codepen.io/C4LV1NPU6/pen/WNKVodL



## 2/13/23 (C4LV1NPU6):

Made CSS Flex project. Can be used in Startup App's website.

I found it interesting how HTML passes variables to CSS.

CSSF CodePen URL: https://codepen.io/C4LV1NPU6/pen/dyqbwwB



## 2/15/23 (C4LV1NPU6):

Set up Simon CSS sub-website.

I learned how to implement the Simon Game web application using HTML and CSS. This included the layout and appearances for the about, home, play, and scores pages. It was a lot of information but I studied it and copied it perfectly.

Sub-site name: https://simon.lightbikebattle.click/

Sub-site deploy command: ./deployFiles.sh -k ~/Desktop/finish.delete.Open\ Tabs/,schoolwork/CS\ 260/production.pem -h lightbikebattle.click -s simon



## 2/20/23 (C4LV1NPU6+rokketranger):

Set up Startup HTML+CSS sub-website.

I learned how to implement the Startup web application using HTML and CSS. This included the layout and appearances for the main game page. It was a lot of information but I used my Codepen prototype so it didn't take super long.

Sub-site name: https://startup.lightbikebattle.click/

Sub-site deploy command: ./deployFiles.sh -k ~/Desktop/finish.delete.Open\ Tabs/,schoolwork/CS\ 260/,Access\ Info/production.pem -h lightbikebattle.click -s startup

Website deploy command: ./deployWebsite.sh -k ~/Desktop/finish.delete.Open\ Tabs/,schoolwork/CS\ 260/,Access\ Info/production.pem -h lightbikebattle.click

Sub-site deploy command: ./deployFiles.sh -k ~/Desktop/finish.delete.Open\ Tabs/,schoolwork/CS\ 260/,Access\ Info/production.pem -h lightbikebattle.click -s simon



## 2/22/23 (C4LV1NPU6):

Made JavaScript Functions+Arrows+Arrays+Objects+Classes projects. Arrays can be used in Startup App's website.

I found it interesting that you can pass functions as parameters. I found it interesting that the writers of JS decided to let functions be first order objects, especially since not many other languages do it. I found the syntax for arrays in JS interesting, I expected it to be more like how it is in Java. I found it interesting how objects are a lot like dictionaries in Python.

JavaScript Arrays(+Loops+Conditionals) CodePen URL: https://codepen.io/C4LV1NPU6/pen/VwGaNqP



## 2/25/23 (C4LV1NPU6):

Made JavaScript Expressions+Rest+Spread+Destructuring+Exceptions projects. Exceptions can be used in Startup App's website.

I found it interesting that an easier way of doing regular expression operations hasn't been made in JavaScript like how it has in other programming languages. I found it interesting (and nice) that JavaScript has a shorthand for doing rest+spread operations. I find it interesting (and handy) that you can use destructuring with rest. I found it interesting (and helpful) that throwing an exception skips the rest of your code so you don't have to do it yourself with an unwieldy set of nested if/else statements.

JavaScript Exceptions CodePen URL: https://codepen.io/C4LV1NPU6/pen/LYJRawg



## 2/26/23 (C4LV1NPU6):

Made JavaScript DOM project. Can be used in Startup App's website.

I found it interesting that there was no direct reference to using setHTML() for safely injecting HTML.

JavaScript DOM CodePen URL: https://codepen.io/C4LV1NPU6/pen/bGxBgJN



## 2/26/23 (3/3/23) (C4LV1NPU6):

Set up Simon JavaScript sub-website.

I learned how to implement the Simon Game web application using HTML, CSS, and JavaScript. This included the layout, appearances, and functionality for the about, home, play, and scores pages. It was a lot of information but I studied it and copied it perfectly.

Sub-site name: https://simon.lightbikebattle.click/

Sub-site deploy command: ./deployFiles.sh -k ~/Desktop/finish.delete.Open\ Tabs/,schoolwork/CS\ 260/,Access\ Info/production.pem -h lightbikebattle.click -s simon



## Websites:

### Main:

#### HTML:

"<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- This is a placeholder for when you start using CSS -->
    <link rel="stylesheet" href="index.css" />
    <title>Calvin's CS260</title>
  </head>
  <body>
    <header>
      <h1>Calvin</h1>
      <img src="profile.jpg" alt="me" />
    </header>
    <main>
      <section>
        <h2>About me</h2>
        <p>
          I'm just a dude trying to make dreams come true.
        </p>
        <p>
          Like seriously, I want to bring your favorite characters to life.
        </p>
        <p>
          Also it would be pretty awesome if we could all fly.
        </p>
      </section>
      <section>
        <h2>Start up project</h2>
        <p>
          <a href="https://startup.lightbikebattle.click/">LightbikeBattle</a>
        </p>
      </section>
      <section>
        <h2>Simon project</h2>
        <p>
          <a href="https://simon.lightbikebattle.click/">SimonGame</a>
        </p>
      </section>
      <section>
        <h2>Web programming assignments</h2>
        <h3>HTML</h3>
        <ul>
          <li>
            <a href="https://codepen.io/C4LV1NPU6/pen/bGjOxEJ">Introduction</a>
          </li>
          <li>
            <a href="https://codepen.io/C4LV1NPU6/pen/KKBbxaw">Structure</a>
          </li>
          <li>
            <a href="https://codepen.io/C4LV1NPU6/pen/dyjwqRe">Input</a>
          </li>
          <li>
            <a href="https://codepen.io/C4LV1NPU6/pen/KKBbxyd">Media</a>
          </li>
        </ul>
	<h3>CSS</h3>
        <ul>
          <li>
            <a href="https://codepen.io/C4LV1NPU6/pen/WNKVodL">Practice</a>
          </li>
          <li>
            <a href="https://codepen.io/C4LV1NPU6/pen/dyqbwwB">Flex</a>
          </li>
          <li>
            <a href="https://codepen.io/C4LV1NPU6/details/QWVWJdz">Frameworks</a>
          </li>
        </ul>
      </section>
    </main>
  </body>
</html>"

#### CSS:

"* {
  font-family: Arial, Helvetica, sans-serif;
  box-sizing: border-box;
}"

### Startup:

#### HTML:

"<!DOCTYPE html>
<html lang="en">

<head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="index.css" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="monospace" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous" />
</head>

<body>
  <header>
    <h1 class="text" style="--sn: 19; --wn: 13em;">Welcome to the Grid</h1>
  </header>
  <main>
    <section id="loginform">
      <form onsubmit="return login()">
        <div class="form-floating">
          <input type="username" class="form-control" id="username" placeholder="Username">
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="password" placeholder="Password">
        </div>
        <button class="button" type="submit">Login</button>
      </form>
    </section>
  </main>
  <footer>
    <h2 class="text" style="--sn: 31; --wn: 21.2em;">From C4LV1NPU6 and rokketranger</h2>
    <a class="text" href="https://github.com/C4LV1NPU6/byu-cs260/tree/main/startup">Source</a>
  </footer>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous">
  </script>
</body>

</html>"

#### CSS:

"* {
  text-align: center;
  font-family: monospace;
  color: #fff;
  box-sizing: border-box;
}

body {
  background: #000;
  display: flex;
  justify-content: center;
  margin: 0;
  flex-direction: column;
  height: 100vh;
}

header {
  padding-top: 2em;
  padding-bottom: 2em;
  flex: 0 80px;
}

footer {
  padding-top: 1em;
  flex: 0 50px;
}

main {
  flex: 1;
  display: flex;
  flex-direction: row;
}

section:nth-child(1) {
  flex: 1;
  background-color: #222;
}
section:nth-child(2) {
  flex: 4;
  background-color: #444;
}
section:nth-child(3) {
  flex: 1;
  background-color: #222;
}

form {
  padding-top: 1em;
}
input {
  background: #000;
  font-size: 18px;
}
button {
  background: #000;
  font-size: 18px;
}

@media (orientation: portrait) {
  main {
    flex-direction: column;
  }
}

@media (max-height: 700px) {
  header {
    display: none;
  }
  footer {
    display: none;
  }
}

.text {
  overflow: hidden;
  border-right: 0.15em solid #fff;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.15em;
  animation: typing 2.5s steps(var(--sn), end), blink-caret 0.5s step-end 6;
  border-color: transparent;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: var(--wn);
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #fff;
  }
}"

#### JS:

"function login() {
  try {
    arguments = [];
    arguments.push(document.getElementById("username").value);
    arguments.push(document.getElementById("password").value);

    for (let i = 0; i < arguments.length; i++) {
      if (arguments[i] === "") {
        throw "Entry needed.";
      }
    }

    //get user from database
    user = true;

    if (user === null) {
      throw "User not found.";
    }

    const el = document.getElementById("loginform");
    const base = el.parentElement;

    base.removeChild(el);
    base.setHTML(`
    <section>
      <h2 class="text" style="--sn: 5; --wn: 3.4em;">Stats</h2>
    </section>
    <section>
      <h2>Arena (to be implemented).</h2>
    </section>
    <section>
      <h2 class="text" style="--sn: 4; --wn: 2.7em;">Chat</h2>
    </section>`);
  } catch (err) {
    console.log(err);
  } finally {
    return false;
  }
}"

### Simon:

#### HTML:

##### about:
"<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>About</title>
    <link rel="icon" href="favicon.ico" />

    <link rel="stylesheet" href="main.css" />

    <!-- Include bootstrap CSS framework -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
      crossorigin="anonymous"
    />
  </head>
  <body class="bg-dark text-light">
    <header class="container-fluid">
      <nav class="navbar fixed-top navbar-dark">
        <a class="navbar-brand" href="#">Simon<sup>&reg;</sup></a>
        <menu class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="play.html">Play</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="scores.html">Scores</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="about.html">About</a>
          </li>
        </menu>
      </nav>
    </header>

    <main class="container-fluid bg-secondary text-center">
      <div>
        <p>
          Simon is a repetitive memory game where you follow the demonstrated
          color sequence until you make a mistake. The longer the sequence you
          repeat, the greater your score.
        </p>

        <p>
          The name Simon is a registered trademark owned by Milton-Bradley. Our
          use of the name and the game is for non-profit educational use only.
          No part of this code or program should be used outside of that
          definition.
        </p>
      </div>
    </main>

    <footer class="bg-dark text-dark text-muted">
      <div class="container-fluid">
        <span class="text-reset">C4LV1NPU6</span>
        <a
          class="text-reset"
          href="https://github.com/C4LV1NPU6/byu-cs260/tree/main/simon"
          >Source</a
        >
      </div>
    </footer>
  </body>
</html>"

##### index:
"<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <!-- Tell browsers not to scale the viewport automatically -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Simon</title>
    <link rel="icon" href="favicon.ico" />

    <script src="login.js"></script>
    <link rel="stylesheet" href="main.css" />

    <!-- Include bootstrap CSS framework -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
      crossorigin="anonymous"
    />
  </head>
  <body class="bg-dark text-light">
    <header class="container-fluid">
      <nav class="navbar fixed-top navbar-dark">
        <a class="navbar-brand" href="#">Simon<sup>&reg;</sup></a>
        <menu class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="play.html">Play</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="scores.html">Scores</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="about.html">About</a>
          </li>
        </menu>
      </nav>
    </header>

    <main class="container-fluid bg-secondary text-center">
      <div>
        <h1>Welcome</h1>
        <p>Login to play</p>
        <div>
          <input type="text" id="name" placeholder="Your name here" />
          <button class="btn btn-primary" onclick="login()">Login</button>
        </div>
      </div>
    </main>

    <footer class="bg-dark text-dark text-muted">
      <div class="container-fluid">
        <span class="text-reset">C4LV1NPU6</span>
        <a
          class="text-reset"
          href="https://github.com/C4LV1NPU6/byu-cs260/tree/main/simon"
          >Source</a
        >
      </div>
    </footer>
  </body>
</html>"

##### play:
"<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <!-- Tell browsers not to scale the viewport automatically -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Simon</title>
    <link rel="icon" href="favicon.ico" />

    <link rel="stylesheet" href="main.css" />

    <!-- Include bootstrap CSS framework -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
      crossorigin="anonymous"
    />
  </head>
  <body class="bg-dark text-light">
    <header class="container-fluid">
      <nav class="navbar fixed-top navbar-dark">
        <a class="navbar-brand" href="#">Simon<sup>&reg;</sup></a>
        <menu class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="play.html">Play</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="scores.html">Scores</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="about.html">About</a>
          </li>
        </menu>
      </nav>
    </header>

    <main class="bg-secondary">
      <div class="players">
        Player:
        <span class="player-name"></span>
      </div>
      <div class="game">
        <div class="button-container">
          <!-- buttons are discovered in the JavaScript by selecting the game-button class -->
          <!-- onclick triggers a button push interaction -->
          <button id="green" class="game-button button-top-left" onclick="game.pressButton(this)"></button>
          <button id="red" class="game-button button-top-right" onclick="game.pressButton(this)"></button>
          <button id="yellow" class="game-button button-bottom-left" onclick="game.pressButton(this)"></button>
          <button id="blue" class="game-button button-bottom-right" onclick="game.pressButton(this)"></button>
          <div class="controls center">
            <div class="game-name">Simon<sup>&reg;</sup></div>
            <div id="score" class="score center">--</div>
            <button class="btn btn-primary" onclick="game.reset()">Reset</button>
          </div>
        </div>
      </div>
    </main>

    <footer class="bg-dark text-dark text-muted">
      <div class="container-fluid">
        <span class="text-reset">C4LV1NPU6</span>
        <a class="text-reset" href="https://github.com/C4LV1NPU6/byu-cs260/tree/main/simon">Source</a>
      </div>
    </footer>

    <!-- Script is located at the bottom because it references HTML elements during initialization -->
    <script src="play.js"></script>
  </body>
</html>"

##### scores:
"<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Scores</title>
    <link rel="icon" href="favicon.ico" />

    <link rel="stylesheet" href="main.css" />

    <!-- Include bootstrap CSS framework -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
      crossorigin="anonymous"
    />
  </head>
  <body class="bg-dark text-light">
    <header class="container-fluid">
      <nav class="navbar fixed-top navbar-dark">
        <a class="navbar-brand" href="#">Simon<sup>&reg;</sup></a>
        <menu class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="play.html">Play</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="scores.html">Scores</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="about.html">About</a>
          </li>
        </menu>
      </nav>
    </header>

    <main class="container-fluid bg-secondary text-center">
      <table class="table table-warning table-striped-columns">
        <thead class="table-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Score</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody id="scores"></tbody>
      </table>
    </main>

    <footer class="bg-dark text-dark text-muted">
      <div class="container-fluid">
        <span class="text-reset">C4LV1NPU6</span>
        <a
          class="text-reset"
          href="https://github.com/C4LV1NPU6/byu-cs260/tree/main/simon"
          >Source</a
        >
      </div>
    </footer>

    <script src="scores.js"></script>
  </body>
</html>"

#### CSS:

##### main:
"body {
  display: flex;
  flex-direction: column;
  min-width: 375px;
}

header {
  flex: 0 80px;
}

main {
  flex: 1 calc(100vh - 110px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

footer {
  flex: 0 30px;
}

menu {
  flex: 1;
  display: flex;
  /*  overwrite Bootstrap so the menu does not wrap */
  flex-direction: row !important;
  list-style: none;
}

.navbar-brand {
  padding-left: 0.3em;
  border-bottom: solid rgb(182, 182, 182) thin;
}

menu .nav-item {
  padding: 0 0.3em;
}

footer a {
  float: right;
}

#count {
  color: rgb(246, 239, 158);
}

.players {
  flex: 1;
  width: 100%;
  padding: 0.5em;
}

.player-name {
  color: rgb(118, 190, 210);
}

.game {
  background: rgb(0, 0, 0);
  border-radius: 50%;
  box-shadow: 0 0 20px 5px rgb(69, 69, 69);
  width: 80vw;
  height: 80vw;
  position: absolute;
  min-width: 350px;
  min-height: 350px;
  max-width: min(80vmin, 1000px);
  max-height: min(80vmin, 1000px);
}

.button-container {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.button-top-left {
  border-radius: 100% 0 0 0;
  margin: 20px 0 0 20px;
  background-color: green;
  border: thick solid rgb(36, 53, 0);
}

.button-top-right {
  border-radius: 0 100% 0 0;
  margin: 20px 20px 0 0;
  background-color: red;
  border: thick solid rgb(83, 12, 12);
}

.button-bottom-left {
  border-radius: 0 0 0 100%;
  margin: 0 0 20px 20px;
  background-color: yellow;
  border: thick solid rgb(130, 124, 13);
}

.button-bottom-right {
  border-radius: 0 0 100% 0;
  margin: 0 20px 20px 0;
  background-color: blue;
  border: thick solid rgb(27, 14, 100);
}

.controls {
  position: absolute;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  background-color: black;
  padding: 2em;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
}

.game-name {
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 0.5em;
}

.score {
  position: absolute;
  text-align: center;
  font-size: 20px;
  font-family: monospace;
  font-weight: bold;
  color: red;
  cursor: default;
  width: 50px;
  height: 30px;
  border-radius: 10px;
  border: solid thin rgb(117, 0, 0);
  background-color: #300;
}

.center {
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

@media (max-height: 600px) {
  header {
    display: none;
  }
  footer {
    display: none;
  }
  main {
    flex: 1 100vh;
  }
}"

#### JS:

##### login:
"function login() {
  const nameEl = document.querySelector("#name");
  localStorage.setItem("userName", nameEl.value);
  window.location.href = "play.html";
}"

##### play:
"const btnDescriptions = [
  {file: 'sound1.mp3', hue: 120},
  {file: 'sound2.mp3', hue: 0},
  {file: 'sound3.mp3', hue: 60},
  {file: 'sound4.mp3', hue: 240},
];

class Button {
  constructor(description, el) {
    this.el = el;
    this.hue = description.hue;
    this.sound = loadSound(description.file);
    this.sound.playbackRate = 2.0;
    this.paint(25);
  }

  paint(level) {
    const background = `hsl(${this.hue}, 100%, ${level}%)`;
    this.el.style.backgroundColor = background;
  }

  async press(playSound) {
    this.paint(50);
    if (playSound) {
      await new Promise((resolve) => {
        this.sound.onended = resolve;
        this.sound.play();
      });
    } else {
      await delay(100);
    }
    this.paint(25);
    await delay(100);
  }
}

class Game {
  buttons;
  allowPlayer;
  sequence;
  playerPlaybackPos;
  mistakeSound;

  constructor() {
    this.buttons = new Map();
    this.allowPlayer = false;
    this.sequence = [];
    this.playerPlaybackPos = 0;
    this.mistakeSound = loadSound('error.mp3');

    document.querySelectorAll('.game-button').forEach((el, i) => {
      if (i < btnDescriptions.length) {
        this.buttons.set(el.id, new Button(btnDescriptions[i], el));
      }
    });

    const playerNameEl = document.querySelector('.player-name');
    playerNameEl.textContent = this.getPlayerName();
  }

  async pressButton(button) {
    if (this.allowPlayer) {
      this.allowPlayer = false;
      await this.buttons.get(button.id).press(true);

      if (this.sequence[this.playerPlaybackPos].el.id === button.id) {
        this.playerPlaybackPos++;
        if (this.playerPlaybackPos === this.sequence.length) {
          this.playerPlaybackPos = 0;
          this.addButton();
          this.updateScore(this.sequence.length - 1);
          await this.playSequence(500);
        }
        this.allowPlayer = true;
      } else {
        this.saveScore(this.sequence.length - 1);
        this.mistakeSound.play();
        await this.buttonDance();
      }
    }
  }

  async reset() {
    this.allowPlayer = false;
    this.playerPlaybackPos = 0;
    this.sequence = [];
    this.updateScore('--');
    await this.buttonDance(1);
    this.addButton();
    await this.playSequence(500);
    this.allowPlayer = true;
  }

  getPlayerName() {
    return localStorage.getItem('userName') ?? 'Mystery player';
  }

  async playSequence(delayMs = 0) {
    if (delayMs > 0) {
      await delay(delayMs);
    }
    for (const btn of this.sequence) {
      await btn.press(true);
    }
  }

  addButton() {
    const btn = this.getRandomButton();
    this.sequence.push(btn);
  }

  updateScore(score) {
    const scoreEl = document.querySelector('#score');
    scoreEl.textContent = score;
  }

  async buttonDance(laps = 5) {
    for (let step = 0; step < laps; step++) {
      for (const btn of this.buttons.values()) {
        await btn.press(false);
      }
    }
  }

  getRandomButton() {
    let buttons = Array.from(this.buttons.values());
    return buttons[Math.floor(Math.random() * this.buttons.size)];
  }

  saveScore(score) {
    const userName = this.getPlayerName();
    let scores = [];
    const scoresText = localStorage.getItem('scores');
    if (scoresText) {
      scores = JSON.parse(scoresText);
    }
    scores = this.updateScores(userName, score, scores);

    localStorage.setItem('scores', JSON.stringify(scores));
  }

  updateScores(userName, score, scores) {
    const date = new Date().toLocaleDateString();
    const newScore = {name: userName, score: score, date: date};

    let found = false;
    for (const [i, prevScore] of scores.entries()) {
      if (score > prevScore.score) {
        scores.splice(i, 0, newScore);
        found = true;
        break;
      }
    }

    if (!found) {
      scores.push(newScore);
    }

    if (scores.length > 10) {
      scores.length = 10;
    }

    return scores;
  }
}

const game = new Game();

function delay(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('delay completed');
      resolve(true);
    }, milliseconds);
  });
}

function loadSound(filename) {
  return new Audio('assets/' + filename);
}"

##### scores:
"function loadScores() {
  let scores = [];
  const scoresText = localStorage.getItem('scores');
  if (scoresText) {
    scores = JSON.parse(scoresText);
  }

  const tableBodyEl = document.querySelector('#scores');

  if (scores.length) {
    for (const [i, score] of scores.entries()) {
      const positionTdEl = document.createElement('td');
      const nameTdEl = document.createElement('td');
      const scoreTdEl = document.createElement('td');
      const dateTdEl = document.createElement('td');

      positionTdEl.textContent = i + 1;
      nameTdEl.textContent = score.name;
      scoreTdEl.textContent = score.score;
      dateTdEl.textContent = score.date;

      const rowEl = document.createElement('tr');
      rowEl.appendChild(positionTdEl);
      rowEl.appendChild(nameTdEl);
      rowEl.appendChild(scoreTdEl);
      rowEl.appendChild(dateTdEl);

      tableBodyEl.appendChild(rowEl);
    }
  } else {
    tableBodyEl.innerHTML = '<tr><td colSpan=4>Be the first to score</td></tr>';
  }
}

loadScores();"
