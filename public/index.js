let music;

document.addEventListener('musickitloaded', () => {
  // MusicKit global is now defined
  fetch('/token').then(response => response.json()).then(res => {
    MusicKit.configure({
      developerToken: res.token,
      app: {
        name: 'TestAppleMusicKit',
        build: '1978.4.1'
      }
    });

    music = MusicKit.getInstance();

    const getEl = (id) => {
      return document.getElementById(id);
    }

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
  });
});
