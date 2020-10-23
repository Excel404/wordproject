alert('If ax^2+bx+c=0 is a model quadratic equation, find x');
function y(a, b, c){ 
  var x1="complex";
  var x2= "complex";
  var M= (b**2 -4*a*c);
  if (M>=0){
    x1= (-b + M**(1/2))/(2*a);
    x2= (-b - M**(1/2))/(2*a);
    }
  return {x1:x1, x2:x2};
 }
var quest1= y(prompt('what is the value of a'), prompt('what is the value of b'), prompt('what is the value of c'))
console.log(quest1);
     
     
    