var Interface1 = document.createElement('div');
Interface1.setAttribute('class','display');
var Header = document.createElement('span');
Header.innerHTML ="Your Sales Auditor" + "<br>";
Header.setAttribute('class','header');
var button3 = document.createElement('button');
button3.setAttribute('class','new-item');
button3.innerHTML ='Add new Object';
button3.addEventListener('click', NewItem);
function NewItem(){
    var Interface = document.createElement('div');
    Interface.setAttribute('class','display');
    var headerRow = document.createElement('tr');
    var headerCol1 = document.createElement('th');
    headerCol1.innerHTML = 'Unit selling price (Naira)';
    var headerCol2 = document.createElement('th');
    headerCol2.innerHTML = 'Quantity';
    var result = document.createElement('div');
    result.setAttribute('class','result');
    var itemName = document.createElement('input');
    itemName.setAttribute('type','text');
    itemName.setAttribute('placeholder','Item Name');
    var unitCost = document.createElement('input');
    unitCost.setAttribute('type','text');
    unitCost.setAttribute('placeholder','Cost Price');
    var button1 = document.createElement('button');
    button1.setAttribute('class','new');
    button1.innerHTML ='Add new item';
    var button2 = document.createElement('button');
    button2.setAttribute('class','sort');
    button2.innerHTML = 'Audit';
    var price;
    var quantity;
    var custom = [];

    headerRow.appendChild(headerCol1);
    headerRow.appendChild(headerCol2);
    Interface.appendChild(itemName);
    Interface.appendChild(unitCost);
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



            this.col1.appendChild(this.innerCol1);
            this.row1.appendChild(this.col1);
            this.row1.appendChild(this.col2);
            this.col2.appendChild(this.innerCol2);
            Interface.appendChild(this.row1);
        }
    }
    var item1;
    button1.addEventListener('click',()=>{
        item1 = new Sort();
        custom.push(item1);
    })

    button2.addEventListener('click', ()=>{
        var sumOfAbove50 = 0;
        var sumOfExactly50 = 0;
        var sumOfBelow50 = 0;
        var totalProfit = 0;
        var totalLoss = 0;
        var profit = 0;
        for (find of custom){
            let price = parseInt(find.innerCol1.value);
            let sum = parseInt(find.innerCol2.value)
            let costPrice = parseInt(unitCost.value)
            if (price > costPrice){
                profit = price - costPrice;
                sumOfAbove50 += sum ;
                totalProfit += profit
            }
            else if(price < costPrice){
                loss = costPrice - price;        
                sumOfBelow50 += sum;
                totalLoss += loss;
            }
            else {
                sumOfExactly50 += sum;   
            }

        }
        let name = itemName.value;
        result.innerHTML = 'You sold'+ ' '+ sumOfAbove50 + " " + name + "with a profit of " + totalProfit +'<br>' +
        'You sold'+ ' '+ sumOfBelow50 + ' ' + name + "at a loss of " + totalLoss +'<br>'+
        'You sold'+ ' '+ sumOfExactly50 + " " + name + "at no profit or loss";
        
        
            
    });
    var space = document.createElement('span');
    space.innerHTML = '<br>';
    Interface1.appendChild(Interface);
    Interface1.appendChild(result);
    Interface1.appendChild(space);
}
Interface1.appendChild(Header);
Interface1.appendChild(button3);    
document.body.appendChild(Interface1);


