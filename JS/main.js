dsNm = "aotra#8187"
var dangle = 0

function invert() {
    let css = 'html {-webkit-filter: invert(100%);' +
      '-moz-filter: invert(100%);' + 
      '-o-filter: invert(100%);' + 
      '-ms-filter: invert(100%); }',
      head = document.getElementsByTagName('head')[0],
      style = document.createElement('style')
  
    if (!window.counter) {
      window.counter = 1
      dangle = 0
    } else {
      window.counter++
      if (window.counter % 2 == 0) {
        css ='html {-webkit-filter: invert(0%); -moz-filter: invert(0%); -o-filter: invert(0%); -ms-filter: invert(0%); }'
        dangle = 0
      }
    }
  
    style.type = 'text/css'
    if (style.styleSheet) {
      style.styleSheet.cssText = css
    } else {
      style.appendChild(document.createTextNode(css))
    }
    head.appendChild(style)
}
function swapdstext(){
  const a = document.getElementById("dstext")
  if (a.innerHTML === "Discord") {
    a.innerHTML = dsNm;
  } else {
    a.innerHTML = "Discord";
  }
}

function copyDS(){
  const a = document.getElementById("dstext")
  navigator.clipboard.writeText(a.innerHTML);
}

window.addEventListener('load', (event) => {
  a = document.getElementsByClassName("Discord")[0]
  console.log(a)
  a.addEventListener("mouseover", swapdstext());
  a.addEventListener("mouseleave", swapdstext());
});

function checkCB(){
  invert();
}











