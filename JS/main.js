dsNm = "aotra#8187"
var dangle = 0

const clientId = "5457041136914f71a5e1ef6674da80f6"
const clientSec = "055862ecad3b454f8c6b2b8645e997fc"

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

function checkCB(){
  invert();
}

function lights(){
  



  fetch('https://openapi.tuyaeu.com/v1.0/iot-03/devices/0536720640f5200c12fb/commands', {
      mode: 'no-cors',
      method: 'POST',
      headers: {
        'sign_method': 'HMAC-SHA256',
        'client_id': '33x8yqvp3pmg4d89nd3c',
        't': '1664314315217',
        'mode': 'cors',
        'Content-Type': 'application/json',
        'sign': 'EB3CA32EFAB113A937D75F25F3582220988504E552D63444E8393E0F0A6F6D1A',
        'access_token': '5ef4eb4ca9877f587caa82d228a72650'
      },
      body: '{commands:[{code:switch_led,value:false}]}'
    });
  console.log("light")
}












