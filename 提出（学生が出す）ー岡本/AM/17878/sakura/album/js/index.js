window.addEventListener('DOMContentLoaded',
  function() {
    // ページ本体が読み込まれたタイミングで実行するコード
    let result = document.getElementById('result');
    result.textContent = 'Hello, JavaScript!!';
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        function(pos){
          MSG =`latitude;${pos.coords.latitude}<br>
          軽度:${pos.coords.longitude}<br>
          方角:${pos.coords.heading};
          誤差(ごさ):${pos.coords.accuracy}`;
          result.innerHTML=MSG;
        }
      );
    }else{
      window.alert("GPSが使えません");
    }
  }, false
);