var wrapperEle = document.body.querySelector(".wrapper");

// if(!isNaN(456)){
//   wrapperEle.innerHTML="Is a number";
// }

var repeat ="dog"
var number = 0;

// while(number<=3){
//   repeat=prompt("What is the new value?");
//   number++;
// }

for(var i=0; i<5; i++){
  number=number+2;
  repeat=prompt("Put some words here")
}

wrapperEle.innerHTML=number;