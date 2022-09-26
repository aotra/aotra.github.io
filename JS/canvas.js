// window.addEventListener("load", () => {
//     const axo = document.querySelector("#axo")

//     axo.addEventListener("mouseover",execute_this,false);
//     function execute_this(){
//     axo.addEventListener("mousedown", execute_sth, false);
//     }
//     function m(x, y){
//         axo.style.left = x-axo.style.height + "px"; 
// 		axo.style.top = y-axo.style.height + "px"; 
//         console.log("moved")
//     }
//     function execute_sth(){
//         document.addEventListener('mousemove', mousePosition);
//         function mousePosition(e) {
//         var x = e['pageX'] || e.clientX;
//         var y = e['pageY'] || e.clientY;
//         m(x, y)
//         }
//     }
// })