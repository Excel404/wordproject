setInterval(function(){document.body.style.backgroundColor = ["green","red","yellow","blue","purple"][Math.floor(Math.random()*5)]}, 1000);
var h1 = document.getElementById('head');
h1.innerHTML='Jarvis, my digital assistant';
h1.style.backgroundColor="red";
var button1= document.getElementById('button1');
var button2= document.getElementById('button');
setInterval(function(){
  var attri = button2.getAttribute("class");
  if(attri.includes("you")){
    button2.setAttribute("class", "me");
  }else{
    button2.setAttribute("class", "you");
  }
},1000);
//button1.style.backgroundColor= "red";
button1.onclick= function(){
  alert("joe")
};
button2.style.width= "20px";
button2.style.height= "20px";
/*setInterval(function (){
  button2.classList.toggle('you')
},1000);*/
//console.log(button1);
var Divs = document.getElementsByTagName('div');
Divs[0].style.color='red';
//button2.style.backgroundColor ='green';

//console.log(Divs)
