---
title: "Stop Inspacting Js"
date: 2021-07-14T22:47:45+05:30
description : "JavaScript code to stop inspacting"
image : "https://cdn.dribbble.com/users/241205/screenshots/9023972/media/2630a26e249f4f24e206afa3fe863158.png?compress=1&resize=1200x900"
---

## Is it possible to remove “Inspect Element”?
well yes its possible to stop inspecting the website into the browser. as you know that there are three ways to inspect a website into the browser

* using keyboard shortcuts
* using right click
* using developer menu of the browser

i have solution for the 1 and the 2 ways here is the JavaScript code but user user 3rd way is very rare cases

{{<file "js" "index.js">}}
{{<highlight "JavaScript">}}
// take body to change the content
const body = document.getElementsByTagName('body');
// stop keyboard shortcuts
window.addEventListener("keydown", (event) => {
  if(event.ctrlKey && (event.key === "S" || event.key === "s")) {
     event.preventDefault();
     body[0].innerHTML = "sorry, you can't do this 💔"
  }

  if(event.ctrlKey && (event.key === "C")) {
     event.preventDefault();
     body[0].innerHTML = "sorry, you can't do this 💔"
  }
  if(event.ctrlKey && (event.key === "E" || event.key === "e")) {
     event.preventDefault();
     body[0].innerHTML = "sorry, you can't do this 💔"
  }
  if(event.ctrlKey && (event.key === "I" || event.key === "i")) {
     event.preventDefault();
     body[0].innerHTML = "sorry, you can't do this 💔";
  }
  if(event.ctrlKey && (event.key === "K" || event.key === "k")) {
     event.preventDefault();
     body[0].innerHTML = "sorry, you can't do this 💔";
  }
  if(event.ctrlKey && (event.key === "U" || event.key === "u")) {
     event.preventDefault();
     body[0].innerHTML = "sorry, you can't do this 💔";
  }
});
// stop right click
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});
{{</highlight>}}