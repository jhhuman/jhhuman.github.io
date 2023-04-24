const DESKTOP_BREAKPOINT = 480;
window.addEventListener("load",function() {
  let heroVideoEl = document.getElementById("hero-video");
  let heroVideoSrc = heroVideoEl.dataset.srcMobile
  let viewportWidth = window.innerWidth;
  if (viewportWidth >= DESKTOP_BREAKPOINT) {
    heroVideoSrc = heroVideoEl.dataset.srcDesktop;
  }
  heroVideoEl.src = heroVideoSrc;
})
const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);

const element = document.getElementById("div1");
element.appendChild(para);