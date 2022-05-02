let date = new Date();

setInterval(function () {
  document.querySelector('.time').innerText = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
}, 1000);

setTimeout(function () {
  document.querySelector('#boot').style.display = 'none';
}, 0);

setTimeout(function () {
  document.querySelector('#boot-ready').style.display = 'none';
}, 0);


function background() {
  var t = document.getElementById("start-button");

  if (t.value=="NO"){
    document.getElementById("desktop").style.backgroundImage = "none";
    t.value="YES";}
  else if (t.value=="YES"){
    document.getElementById("desktop").style.backgroundImage = "url(../images/backgrounds/wallpaper.jpg)";
    t.value="NO";}
  }
