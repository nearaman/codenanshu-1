const swup = new Swup();
// for open mobile menu
function openMenu() {
  let x = document.getElementById("menu");
  if (x.className == "hidden") {
    x.className = "show";
  } else {
    x.className = "hidden";
  }
}
function closeMenu() {
  console.log('function is called')
  let width = screen.width;
  if (width < 640) {
    let x = document.getElementById("menu");
    if (x.className == "hidden") {
    x.className = "show";
    } else {
      x.className = "hidden";
    }
  }
}