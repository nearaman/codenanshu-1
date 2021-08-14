const swup = new Swup();
// for open mobile menu
function openMenu() {
  var x = document.getElementById("menu");
  if (x.className == "hidden") {
    x.className = "show";
  } else {
    x.className = "hidden";
  }
}
function closeMenu() {
  let width = screen.width;
  if (width < 640) {
    var x = document.getElementById("menu");
    if (x.className == "hidden") {
      x.className = "show";
    } else {
      x.className = "hidden";
    }
  }
}

function rendomLottieAnimation(){
  let animations = [
    "https://assets10.lottiefiles.com/packages/lf20_w51pcehl.json",
    "https://assets2.lottiefiles.com/packages/lf20_iorpbol0.json",
    "https://assets10.lottiefiles.com/packages/lf20_9unpvaft.json",
    "https://assets2.lottiefiles.com/datafiles/TwXatofJPhLwwn75v8AembjHGFUvPSoKeIJxrjPO/sky.json"
  ]

  let toSend = Math.floor(Math.random() * animations.length);
  let player = document.getElementById("lottiePlayer");
  player.src = animations[toSend];
}

rendomLottieAnimation();