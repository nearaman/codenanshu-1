const swup = new Swup();

// run once
init();

// this event runs for every page view after initial load
swup.on("contentReplaced", init);

function init() {
  if (document.querySelector("#googleArticleAd")) {
    console.log("ad is placed");
    let ad = document.getElementsByTagName('body')
    var s = document.createElement("script");
    s.setAttribute("async", "");
    s.setAttribute(
      "src",
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6691816550079346"
    );
    s.setAttribute("crossorigin", "anonymous");
    s.onload = console.log("added");
    ad[0].appendChild(s);
  }
}

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
