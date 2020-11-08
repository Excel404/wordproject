var Courses = []; 
var Interface = document.createElement('div');
Interface.setAttribute('class','display');
var Header = document.createElement('span');
Header.innerHTML ="Your CGPA calculator" + "<br>";
Header.setAttribute('class','header');
var button1 = document.createElement('button');
button1.setAttribute('class','add-course');
button1.innerHTML ='Add New Course';
var button2 = document.createElement('button');
button2.setAttribute('class','calc-gp');
button2.innerHTML = 'Calculate GP';
var headerRow = document.createElement('tr');
var headerCol1 = document.createElement('th');
headerCol1.innerHTML = 'Course Name';
var headerCol2 = document.createElement('th');
headerCol2.innerHTML = 'score';
var headerCol3 = document.createElement('th');
headerCol3.innerHTML = 'Unit Load';
var result = document.createElement('span');
result.setAttribute('class','result');

headerRow.appendChild(headerCol1);
headerRow.appendChild(headerCol2);
headerRow.appendChild(headerCol3);
Interface.appendChild(Header);
Interface.appendChild(button1);
Interface.appendChild(button2);
Interface.appendChild(headerRow);
document.body.appendChild(Interface);
document.body.appendChild(result);
class GpCalc{
  constructor(){
    this.row1 = document.createElement('tr');
    this.col1 = document.createElement('td');
    this.innerCol1 = document.createElement('input');
    this.innerCol1.setAttribute('type','text');
    this.col2 = document.createElement('td');
    this.innerCol2 = document.createElement('input');
    this.innerCol2.setAttribute('type','text');
    this.col3 = document.createElement('td');
    this.innerCol3 = document.createElement('input');
    this.innerCol3.setAttribute('type','text');
    
    this.col1.appendChild(this.innerCol1);
    this.row1.appendChild(this.col1);
    this.row1.appendChild(this.col2);
    this.col2.appendChild(this.innerCol2);
    this.row1.appendChild(this.col3);
    this.col3.appendChild(this.innerCol3);
    Interface.appendChild(this.row1);
  }

}

button1.addEventListener('click', ()=>{
  var course = new GpCalc();
  Courses.push(course)  
})

button2.addEventListener('click', ()=>{
  let sum = 0;
  let totalUnits = 0;  
  for (find of Courses){
    var self = this;
    var y ;
    var y1;
    var m1 = find.innerCol3.value;
    var x1 = find.innerCol2.value;
    if(x1>=70){
      y= 5;
      y1 = y*m1
    }else if(70>x1 && x1>=60){
      y= 4;
      y1 = y*m1;
    }else if(60>x1 && x1>=50){
      y= 3;
      y1 = y*m1;
    }else if(50>x1 && x1>=45){
      y= 2;
      y1 = y*m1;  
    }else if(45>x1 && x1>=40){
      y =1;
      y1 = y*m1;
    }else if(x1<40){
      y = 0;
      y1 = y*m1;
    }else{
      y = 0;
    }
    sum += parseInt(y1);
    totalUnits += parseInt(m1);
    var gp = sum/totalUnits;
    result.innerHTML = 'Your GP ='+" "+ gp.toFixed(2);
  }  
})
