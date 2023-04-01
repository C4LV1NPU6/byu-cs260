async function joinLobby() {
  if (localStorage.getItem('userName') === document.querySelector('#host')?.value) {
    return;
  }
  joinOrHost(`/api/auth/join`);
}

async function hostLobby() {
  if (localStorage.getItem('userName') !== document.querySelector('#host')?.value) {
    return;
  }
  joinOrHost(`/api/auth/host`);
}

async function joinOrHost(endpoint) {
  const host = document.querySelector('#host')?.value;
  if (host === "") {
    return;
  }
  const response = await fetch(endpoint, {
    method: 'post',
    body: JSON.stringify({ username: localStorage.getItem('userName'), host: host }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const body = await response.json();

  if (response?.status === 200) {
    game();
  }
}

function game() {
  window.location.href = 'game.html';
}