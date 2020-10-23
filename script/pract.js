
var data1=[];
var cont="yes";
while(cont!="no"){
  var name= prompt("what is your name:");
  var score = prompt("what is your score: ");
  var age = prompt("what is your age")
  var data ={name:name,score:score,age:age};
  data1.push(data);
  cont = prompt ("do you want to continue: ");
}
var sorter = data1.sort(
  function(a,b){
    return a.score -b.score;
  }
)
console.log(sorter);

