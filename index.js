var i = 0;
var txt = 'Free and Open Source Electronic Library';
var speed = 50;

window.onload = function typeWriter() {
  if (i < txt.length) {
    document.getElementById("Text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}