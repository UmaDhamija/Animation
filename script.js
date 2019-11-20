var butterflies;
var boy;

function makeThemMove(){
  var oldLeft = parseInt(butterflies.style.left);
  var newLeft = oldLeft + 10;

  if (newLeft > window.innerWidth){
    newLeft = -200;
  }

  butterflies.style.left = newLeft + 'px';
  console.log(oldLeft);
  console.log(newLeft);
}

document.addEventListener('DOMContentLoaded', function(event) {
  console.log("PAGE IS READY!");

  butterflies = document.getElementById("butterflies");
  boy = document.getElementById("boy");

  console.log(butterflies);
  console.log(boy);

  window.setInterval(makeThemMove, 45);
  // setInterval helps create this motion; every 45 milliseconds, it runs this function
});
