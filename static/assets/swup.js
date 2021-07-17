const swup = new Swup();

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
  if (width < 640){
  var x = document.getElementById("menu");
  if (x.className == "hidden") {
    x.className = "show";
  } else {
    x.className = "hidden";
  }
  }
}