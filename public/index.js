let music;

document.addEventListener('musickitloaded', function() {
  // MusicKit global is now defined
  fetch('/token').then(response => response.json()).then((res) => {
    MusicKit.configure({
      developerToken: res.token,
      app: {
        name: 'TestAppleMusicKit',
        build: '1978.4.1'
      }
    });

    music = MusicKit.getInstance();

    const el = function(id) {
      return document.getElementById(id);
    }

    el('add-to-q-btn').addEventListener('click', function(){
      const idInput   = el('id-input');
      const typeInput = el('type-input');

      music.setQueue({
        [typeInput.value]: idInput.value
      });

      idInput.value   = '';
      typeInput.value = '';
    });

    el('play-btn').addEventListener('click', function(){
      music.play();
    });

    el('pause-btn').addEventListener('click', function(){
      music.pause();
    });
  });
});
