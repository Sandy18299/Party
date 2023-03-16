// Header section
let headIcon = document.querySelector("header .aside .head-list .close-side li") 
let navBar = document.getElementById("navBar")
let headList = document.getElementById("headList")
let textArea = document.getElementById("textArea")
let openNav = document.getElementById("openNav")
let accoBtn = document.querySelectorAll(".accordion .container .accordion-content .accordion-item button")
let count = document.querySelector(".seconds p")
let countM = document.querySelector(".min p")
let countH = document.querySelector(".hours p")
let countD = document.querySelector(".days p")
console.log(count)

headIcon.addEventListener("click" , ()=>{
    headList.style.display = "none"
})


openNav.addEventListener("click" , () => {
    headList.classList.toggle("show") 
})
//  accodion section

accoBtn.forEach((element)=>{
  element.addEventListener("click" , ()=>{
    element.nextElementSibling.classList.toggle("press");
  })
})
// CountDown section


function countDown(){
  let today = new Date();
  let vDate = new Date(today.getFullYear(), 11, 16);
  const t = vDate.getTime() - today.getTime()

  const day = Math.floor(t / (1000*60*60*24));
  const hour = Math.floor(((t) % (1000*60*60*24)) / (1000*60*60));
  const minute = Math.floor(((t) % (1000*60*60)) / (1000*60));
  const sec = Math.floor(((t) % (1000*60)) / (1000));

      count.innerHTML = sec +"s"
      countM.innerHTML = minute+ "m"
      countH.innerHTML = hour + "h"
      countD.innerHTML = day+ "d"

}

setInterval(countDown ,1000)

 

// contact section
 let maxLimit = 100

textArea.addEventListener("keyup" , function(){


  // document.getElementById("message").innerHTML = maxLimit - textArea.value.length +1 ;
 
  if(textArea.value.length == textArea.getAttribute("maxlength")){

  document.getElementById("pmessg").innerHTML = "<span class='text-danger'> your available character finished</span>"
 }
 else{
  document.getElementById("pmessg").innerHTML = `<span class='text-danger' id='message' >${maxLimit - textArea.value.length }</span>Character`

  if(textArea.value.length > textArea.getAttribute("maxlength")){
    document.getElementById("pmessg").innerHTML = `<span class='text-danger' id='message' >${maxLimit- (textArea.value.length) }</span>Character`

  }
 }
})

var x = [1 , 2, 3] ;
var y = [3]
var z = x*y
// var name = x[0]+y[3]+z[2]
// // if (x == y){
// //   z++
// // }
 
console.log(z )