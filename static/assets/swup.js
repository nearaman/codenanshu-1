const swup = new Swup();

// run once 
init();

// this event runs for every page view after initial load
swup.on('contentReplaced', init);

function init(){
  if (document.querySelector('#googleArticleAd')) {
    console.log("ad is placed");
        let ad = document.querySelector('#googleArticleAd');
        var s = document.createElement( 'script' );
        s.setAttribute('async','');
        s.setAttribute( 'src', 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6691816550079346' );
        s.setAttribute('crossorigin', 'anonymous');
        s.onload = console.log("added");
        ad.appendChild( s );
        var ins = document.createElement('ins');
        let insArtibutes = {
          "class": "adsbygoogle",
          "style": "display:block; text-align:center;",
          "data-ad-layout" : "in-article",
          "data-ad-format" : "fluid",
          "data-ad-client" : "ca-pub-6691816550079346",
          "data-ad-slot" : "4746145472"
        }
        for (let keys in insArtibutes){
          ins.setAttribute(keys, insArtibutes[keys]);
        }
        ad.appendChild(ins);
        var adsInit = document.createElement('script');
        adsInit.appendChild(document.createTextNode("(adsbygoogle = window.adsbygoogle || []).push({});"));
        ad.appendChild(adsInit);
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