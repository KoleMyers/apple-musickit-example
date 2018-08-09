const ajax = function (method, url, data, callback) {
  try {
    var x = new(XMLHttpRequest || ActiveXObject)('MSXML2.XMLHTTP.3.0');
    x.open(method, url, 1);
    x.withCredentials = true;
    x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    x.setRequestHeader('Content-type', 'application/json');
    x.onreadystatechange = function () {
      x.readyState > 3 && callback && callback(x.responseText, x);
    };
    x.send(data)
  } catch (e) {}
};

const el = (id) => {
  return document.getElementById(id);
}

document.addEventListener('musickitloaded', function() {
  // MusicKit global is now defined
  ajax('get', '/token', {}, function(res) {
    res = JSON.parse(res);
    MusicKit.configure({
      developerToken: res.token,
      app: {
        name: 'Developmentspeak',
        build: '1978.4.1'
      }
    });

    const kit = MusicKit.getInstance();

    el("add-to-q-btn").addEventListener("click", function(){
      const idInput   = el('id-input');
      const typeInput = el('type-input');
      const id        = idInput.value;
      const type      = typeInput.value;

      kit.setQueue({
        [type]: id
      });

      idInput.value   = "";
      typeInput.value = "";
    });

    el("play-btn").addEventListener("click", function(){
      kit.play();
    });

    el("pause-btn").addEventListener("click", function(){
      kit.pause();
    });
  });
});
