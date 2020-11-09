var Interface = document.createElement('div');
Interface.setAttribute('class','display');
var Header = document.createElement('span');
Header.innerHTML ="Your Items Sorter" + "<br>";
Header.setAttribute('class','header');
var headerRow = document.createElement('tr');
var headerCol1 = document.createElement('th');
headerCol1.innerHTML = 'Item';
var headerCol2 = document.createElement('th');
headerCol2.innerHTML = 'Price per Item';
var headerCol3 = document.createElement('th');
headerCol3.innerHTML = 'Quantity of Item';
var result = document.createElement('div');
result.setAttribute('class','result');
var button1 = document.createElement('button');
button1.setAttribute('class','new');
button1.innerHTML ='Add new object';
var button2 = document.createElement('button');
button2.setAttribute('class','sort');
button2.innerHTML = 'Sort Item';
var price;
var quantity;
var custom = [];
var above50 = [];
var exactly50 = [];
var below50 = [];

headerRow.appendChild(headerCol1);
headerRow.appendChild(headerCol2);
headerRow.appendChild(headerCol3);
Interface.appendChild(Header);
Interface.appendChild(button1);
Interface.appendChild(button2);
Interface.appendChild(headerRow);

class Sort{
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
        this.button3 = document.createElement('button');
        this.button3.innerHTML= 'Submit';

        this.col1.appendChild(this.innerCol1);
        this.row1.appendChild(this.col1);
        this.row1.appendChild(this.col2);
        this.col2.appendChild(this.innerCol2);
        this.row1.appendChild(this.col3);
        this.col3.appendChild(this.innerCol3);
        this.row1.appendChild(this.button3);
        Interface.appendChild(this.row1);
    }
}

button1.addEventListener('click',()=>{
    var item1 = new Sort();
    item1.button3.addEventListener('click', ()=>{
        let price = parseInt(item1.innerCol2.value);
        if (price >50){
            above50.push(item1);
        }
        else if (price == 50){
            exactly50.push(item1);
        }
        else if(price < 50){
            below50.push(item1);   
        }
        item1.button3.innerHTML = 'submitted';
    })
             
})

button2.addEventListener('click', ()=>{
    let sumOfAbove50 = 0;
    for (item1 of above50){
        sumOfAbove50 += parseInt(item1.innerCol3.value);
    }
    let sumOfExactly50 = 0;
    for (item1 of exactly50){
        sumOfExactly50 += parseInt(item1.innerCol3.value);
    }
    let sumOfBelow50 = 0;
    for (item1 of below50){
        sumOfBelow50 += parseInt(item1.innerCol3.value);
    }
    result.innerHTML = 'No of Items sold above #50 ='+ ' '+ sumOfAbove50 + '<br>' +
    'No of items sold at #50 =' + ' ' + sumOfExactly50 + '<br>'+
    'No of items sold below #50 =' + ' ' + sumOfBelow50;    
});
document.body.appendChild(Interface);
document.body.appendChild(result);

