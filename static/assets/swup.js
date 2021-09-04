const swup = new Swup();

// run once
init();

// this event runs for every page view after initial load
swup.on("contentReplaced", init);

function init() {
  if (document.querySelector("#googleArticleAd")) {
    var ads = document.querySelectorAll('#googleArticleAd');
    console.log('ads found')
    for (var i = 0; i < ads.length; i++){
      (adsbygoogle = window.adsbygoogle || []).push({});
      console.log("ad is placed");
    }
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
