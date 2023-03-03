class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  getUsername() {
    return this.username;
  }

  setUsername(username) {
    this.username = username;
  }

  getPassword() {
    return this.password;
  }

  setPassword(password) {
    this.password = password;
  }
}

function login() {
  try {
    arguments = [];

    logregfirst(arguments, "log");

    let user = null;
    const userCont = localStorage.getItem(arguments[0]);
    if (userCont) {
      user = JSON.parse(userCont);
    }

    if (user === null) {
      throw "User not found.";
    }

    if (user.password !== arguments[1]) {
      throw "Incorrect password.";
    }

    logreglast();
  } catch (err) {
    console.log(err);
  } finally {
    return false;
  }
}

function register() {
  try {
    arguments = [];

    logregfirst(arguments, "reg");

    let user = null;
    const userCont = localStorage.getItem(arguments[0]);
    if (userCont) {
      user = JSON.parse(userCont);
    }

    if (user !== null) {
      throw "User already exists.";
    }

    user = new User(arguments[0], arguments[1]);
    localStorage.setItem(arguments[0], JSON.stringify(user));

    logreglast();
  } catch (err) {
    console.log(err);
  } finally {
    return false;
  }
}

function logregfirst(arguments, prefix) {
  arguments.push(document.getElementById(prefix + "username").value);
  arguments.push(document.getElementById(prefix + "password").value);

  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] === "") {
      throw "Entry needed.";
    }
  }
}

function logreglast() {
  const el = document.getElementById("logregform");
  const base = el.parentElement;

  base.removeChild(el);
  base.setHTML(`
    <section>
      <h2 class="text" style="--tn: 1s; --sn: 5; --en: 3; --wn: 3.4em;">Stats</h2>
    </section>
    <section>
      <h2>Arena (to be implemented).</h2>
    </section>
    <section>
      <h2 class="text" style="--tn: 1s; --sn: 4; --en: 3; --wn: 2.7em;">Chat</h2>
    </section>`);

  //play game
}
