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

let curs = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;
  curs.style.left = x - 20 + "px";
  curs.style.top = y - 20 + "px";
  curs.style.opacity = "1";
});

document.addEventListener("click", (e) => {
  curs.style.transform.translate = "scale(1.2)";
});
