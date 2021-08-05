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
function githubEdit(urlObject){
  let stringURL = urlObject.toString();
  if(stringURL === "https://codenanshu.in/"){
    return "https://github.com/aianshume/codenanshu/";
  } else {
    return stringURL.replace("https://codenanshu.in/","https://github.com/aianshume/codenanshu/tree/main/content/").slice(0, -1).concat('.md');
  }
}

let gitedit = document.getElementById("githubedit");
gitedit.href = githubEdit(window.location);