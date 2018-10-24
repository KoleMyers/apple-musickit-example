let music;

function getEl(id) {
  return document.getElementById(id);
}

function setupClickListeners() {
  getEl('add-to-q-btn').addEventListener('click', () => {
    const idInput   = getEl('id-input');
    const typeInput = getEl('type-input');

    music.setQueue({
      [typeInput.value]: idInput.value
    });

    idInput.value   = '';
    typeInput.value = '';
  });

  getEl('play-btn').addEventListener('click', () => {
    music.play();
  });

  getEl('pause-btn').addEventListener('click', () => {
    music.pause();
  });

  getEl('login-btn').addEventListener('click', () => {
    music.authorize().then(musicUserToken => {
      console.log(`musicUserToken = ${musicUserToken}`);
    });
  });
}

document.addEventListener('musickitloaded', () => {
  // MusicKit global is now defined
  fetch('/token').then(response => response.json()).then(res => {
    music = MusicKit.configure({
      developerToken: res.token,
      app: {
        name: 'TestAppleMusicKit',
        build: '1978.4.1'
      }
    });

    setupClickListeners();
  });
});
