function Cgpa(){
    var self = this;
    self.interface = document.createElement('div');
    self.interface.setAttribute('class','interface');
    self.tableHeaderRow = document.createElement('tr');
    self.tableHeaderRow.setAttribute('class','table-header-row');
    self.tableHeader1 = document.createElement('th');
    self.tableHeader1.setAttribute('class','table-h1');
    self.tableHeader1.innerHTML = 'Course';
    self.tableHeader2 = document.createElement('th');
    self.tableHeader2.setAttribute('class','table-h2');
    self.tableHeader2.innerHTML = 'Your Score';
    self.tableHeader3 = document.createElement('th');
    self.tableHeader3.setAttribute('class','table-h3');
    self.tableHeader3.innerHTML = 'Course Unit';
    self.tableRow1 = document.createElement('tr');
    self.tableRow1.setAttribute('class','table-row1');
    self.tableCol11 = document.createElement('td');
    self.tableCol11.setAttribute('class','table-col11');
    self.input11 = document.createElement('input');
    self.input11.setAttribute('class','input11');
    self.tableCol21 = document.createElement('td');
    self.tableCol21.setAttribute('class','table-col21');
    self.input21 = document.createElement('input');
    self.input21.setAttribute('class','input21');
    self.tableCol31 = document.createElement('td');
    self.tableCol31.setAttribute('class','table-col31');
    self.input31 = document.createElement('input');
    self.input31.setAttribute('class','input31');
    
    self.tableRow2 = document.createElement('tr');
    self.tableRow2.setAttribute('class','table-row2');
    self.tableCol12 = document.createElement('td');
    self.tableCol12.setAttribute('class','table-col12');
    self.input12 = document.createElement('input');
    self.input12.setAttribute('class','input12');
    self.tableCol22 = document.createElement('td');
    self.tableCol22.setAttribute('class','table-col22');
    self.input22 = document.createElement('input');
    self.input22.setAttribute('class','input22');
    self.tableCol32 = document.createElement('td');
    self.tableCol32.setAttribute('class','table-col32');
    self.input32 = document.createElement('input');
    self.input32.setAttribute('class','input32');
    
    self.tableRow3 = document.createElement('tr');
    self.tableRow3.setAttribute('class','table-row3');
    self.tableCol13 = document.createElement('td');
    self.tableCol13.setAttribute('class','table-col13');
    self.input13 = document.createElement('input');
    self.input13.setAttribute('class','input13');
    self.tableCol23 = document.createElement('td');
    self.tableCol23.setAttribute('class','table-col23');
    self.input23 = document.createElement('input');
    self.input23.setAttribute('class','input23');
    self.tableCol33 = document.createElement('td');
    self.tableCol33.setAttribute('class','table-col33');
    self.input33 = document.createElement('input');
    self.input33.setAttribute('class','input33');

    self.tableRow4 = document.createElement('tr');
    self.tableRow4.setAttribute('class','table-row4');
    self.tableCol14 = document.createElement('td');
    self.tableCol14.setAttribute('class','table-col14');
    self.input14 = document.createElement('input');
    self.input14.setAttribute('class','input14');
    self.tableCol24 = document.createElement('td');
    self.tableCol24.setAttribute('class','table-col24');
    self.input24 = document.createElement('input');
    self.input24.setAttribute('class','input24');
    self.tableCol34 = document.createElement('td');
    self.tableCol34.setAttribute('class','table-col34');
    self.input34 = document.createElement('input');
    self.input34.setAttribute('class','input34');
    
    self.tableRow5 = document.createElement('tr');
    self.tableRow5.setAttribute('class','table-row1');
    self.tableCol15 = document.createElement('td');
    self.tableCol15.setAttribute('class','table-col15');
    self.input15 = document.createElement('input');
    self.input15.setAttribute('class','input15');
    self.tableCol25 = document.createElement('td');
    self.tableCol25.setAttribute('class','table-col25');
    self.input25 = document.createElement('input');
    self.input25.setAttribute('class','input25');
    self.tableCol35 = document.createElement('td');
    self.tableCol35.setAttribute('class','table-col35');
    self.input35 = document.createElement('input');
    self.input35.setAttribute('class','input35');

    self.tableRow6 = document.createElement('tr');
    self.tableRow6.setAttribute('class','table-row6');
    self.tableCol16 = document.createElement('td');
    self.tableCol16.setAttribute('class','table-col16');
    self.input16 = document.createElement('input');
    self.input16.setAttribute('class','input16');
    self.tableCol26 = document.createElement('td');
    self.tableCol26.setAttribute('class','table-col26');
    self.input26 = document.createElement('input');
    self.input26.setAttribute('class','input26');
    self.tableCol36 = document.createElement('td');
    self.tableCol36.setAttribute('class','table-col36');
    self.input36 = document.createElement('input');
    self.input36.setAttribute('class','input36');
   
    self.tableRow7 = document.createElement('tr');
    self.tableRow7.setAttribute('class','table-row7');
    self.tableCol17 = document.createElement('td');
    self.tableCol17.setAttribute('class','table-col17');
    self.input17 = document.createElement('input');
    self.input17.setAttribute('class','input17');
    self.tableCol27 = document.createElement('td');
    self.tableCol27.setAttribute('class','table-col27');
    self.input27 = document.createElement('input');
    self.input27.setAttribute('class','input27');
    self.tableCol37 = document.createElement('td');
    self.tableCol37.setAttribute('class','table-col37');
    self.input37 = document.createElement('input');
    self.input37.setAttribute('class','input37');

    self.tableRow8 = document.createElement('tr');
    self.tableRow8.setAttribute('class','table-row8');
    self.tableCol18 = document.createElement('td');
    self.tableCol18.setAttribute('class','table-col18');
    self.input18 = document.createElement('input');
    self.input18.setAttribute('class','input18');
    self.tableCol28 = document.createElement('td');
    self.tableCol28.setAttribute('class','table-col28');
    self.input28 = document.createElement('input');
    self.input28.setAttribute('class','input28');
    self.tableCol38 = document.createElement('td');
    self.tableCol38.setAttribute('class','table-col38');
    self.input38 = document.createElement('input');
    self.input38.setAttribute('class','input38');

    self.tableRow9 = document.createElement('tr');
    self.tableRow9.setAttribute('class','table-row9');
    self.tableCol19 = document.createElement('td');
    self.tableCol19.setAttribute('class','table-col19');
    self.input19 = document.createElement('input');
    self.input19.setAttribute('class','input12');
    self.tableCol29 = document.createElement('td');
    self.tableCol29.setAttribute('class','table-col29');
    self.input29 = document.createElement('input');
    self.input29.setAttribute('class','input29');
    self.tableCol39 = document.createElement('td');
    self.tableCol39.setAttribute('class','table-col39');
    self.input39 = document.createElement('input');
    self.input39.setAttribute('class','input39');

    self.tableRow10 = document.createElement('tr');
    self.tableRow10.setAttribute('class','table-row10');
    self.tableCol1a = document.createElement('td');
    self.tableCol1a.setAttribute('class','table-col1a');
    self.input1a = document.createElement('input');
    self.input1a.setAttribute('class','input1a');
    self.tableCol2a = document.createElement('td');
    self.tableCol2a.setAttribute('class','table-col2a');
    self.input2a = document.createElement('input');
    self.input2a.setAttribute('class','input2a');
    self.tableCol3a = document.createElement('td');
    self.tableCol3a.setAttribute('class','table-col3a');
    self.input3a = document.createElement('input');
    self.input3a.setAttribute('class','input3a');

    self.tableRow11 = document.createElement('tr');
    self.tableRow11.setAttribute('class','table-row11');
    self.tableCol1b = document.createElement('td');
    self.tableCol1b.setAttribute('class','table-col1b');
    self.input1b = document.createElement('input');
    self.input1b.setAttribute('class','input12');
    self.tableCol2b = document.createElement('td');
    self.tableCol2b.setAttribute('class','table-col2b');
    self.input2b = document.createElement('input');
    self.input2b.setAttribute('class','input2b');
    self.tableCol3b = document.createElement('td');
    self.tableCol3b.setAttribute('class','table-col3b');
    self.input3b = document.createElement('input');
    self.input3b.setAttribute('class','input3b');

    self.tableRow12 = document.createElement('tr');
    self.tableRow12.setAttribute('class','table-row12');
    self.tableCol1c = document.createElement('td');
    self.tableCol1c.setAttribute('class','table-col1c');
    self.input1c = document.createElement('input');
    self.input1c.setAttribute('class','input1c');
    self.tableCol2c = document.createElement('td');
    self.tableCol2c.setAttribute('class','table-col2c');
    self.input2c = document.createElement('input');
    self.input2c.setAttribute('class','input2c');
    self.tableCol3c = document.createElement('td');
    self.tableCol3c.setAttribute('class','table-col3c');
    self.input3c = document.createElement('input');
    self.input3c.setAttribute('class','input3c');

    self.tableRow13 = document.createElement('tr');
    self.tableRow13.setAttribute('class','table-row13');
    self.tableCol1d = document.createElement('td');
    self.tableCol1d.setAttribute('class','table-col1d');
    self.input1d = document.createElement('input');
    self.input1d.setAttribute('class','input1d');
    self.tableCol2d = document.createElement('td');
    self.tableCol2d.setAttribute('class','table-col2d');
    self.input2d = document.createElement('input');
    self.input2d.setAttribute('class','input2d');
    self.tableCol3d = document.createElement('td');
    self.tableCol3d.setAttribute('class','table-col3d');
    self.input3d = document.createElement('input');
    self.input3d.setAttribute('class','input3d');

    self.tableRow14 = document.createElement('tr');
    self.tableRow14.setAttribute('class','table-row14');
    self.tableCol1e = document.createElement('td');
    self.tableCol1e.setAttribute('class','table-col1e');
    self.input1e = document.createElement('input');
    self.input1e.setAttribute('class','input1e');
    self.tableCol2e = document.createElement('td');
    self.tableCol2e.setAttribute('class','table-col2e');
    self.input2e = document.createElement('input');
    self.input2e.setAttribute('class','input2e');
    self.tableCol3e = document.createElement('td');
    self.tableCol3e.setAttribute('class','table-col3e');
    self.input3e = document.createElement('input');
    self.input3e.setAttribute('class','input3e');

    self.tableRow15 = document.createElement('tr');
    self.tableRow15.setAttribute('class','table-row15');
    self.tableCol1f = document.createElement('td');
    self.tableCol1f.setAttribute('class','table-col1f');
    self.input1f = document.createElement('input');
    self.input1f.setAttribute('class','input1f');
    self.tableCol2f = document.createElement('td');
    self.tableCol2f.setAttribute('class','table-col2f');
    self.input2f = document.createElement('input');
    self.input2f.setAttribute('class','input2f');
    self.tableCol3f = document.createElement('td');
    self.tableCol3f.setAttribute('class','table-col3f');
    self.input3f = document.createElement('input');
    self.input3f.setAttribute('class','input3f');

    self.label = document.createElement('span');
    self.label.setAttribute('class','label');
    self.label.innerHTML = 'Your CGPA =';
    self.resultBox = document.createElement('span');
    self.resultBox.setAttribute('class','result-box');
    self.calcGp = document.createElement('button');
    self.calcGp.setAttribute('class','calc-Gp');
    self.calcGp.innerHTML = 'Calculate';
    self.lastRow = document.createElement('div');
    self.lastRow.setAttribute('class', 'last-row');
    

    function GpCalc(){
        var x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12,x13,x14,x15;
        x1 = self.input21.value; x2 = self.input22.value; x3 = self.input23.value; x4 = self.input24.value; x5 = self.input25.value; x6 = self.input26.value;
        x7 = self.input27.value; x8 = self.input28.value; x9 = self.input29.value; x10 = self.input2a.value; x11 = self.input2b.value; x12 = self.input2c.value;
        x13 = self.input2d.value; x14 = self.input2e.value; x15 = self.input2f.value;
        var y;
        var m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12,m13,m14,m15;
        m1 = self.input31.value; m2 = self.input32.value; m3 = self.input33.value; m4 = self.input34.value; m5 = self.input35.value; m6 = self.input36.value;
        m7 = self.input37.value; m8 = self.input38.value; m9 = self.input39.value; m10 = self.input3a.value; m11 = self.input3b.value; m12 = self.input3c.value;
        m13 = self.input3d.value; m14 = self.input3e.value; m15 = self.input3f.value;
        if(x1>=70){
            y= 5;
            var y1 = y*m1;
        }else if(70>x1 && x1>=60){
            y= 4;
            var y1 = y*m1;
        }else if(60>x1 && x1>=50){
            y= 3;
            var y1 = y*m1;
        }else if(50>x1 && x1>=45){
            y= 2;
            var y1 = y*m1;
        }else if(45>x1 && x1>=40){
            y =1;
            var y1 = y*m1;
        }else if(x1<40){
            y = 0;
            var y1 = y*m1;
        }else{
            y = 0;
        }

        if(x2>=70){
            y= 5;
            var y2 = y*m2;
        }else if(70>x2 && x2>=60){
            y= 4;
            var y2 = y*m2;
        }else if(60>x2 && x2>=50){
            y= 3;
            var y2 = y*m2;
        }else if(50>x2 && x2>=45){
            y = 2;
            var y2 = y*m2;
        }else if(45>x2 && x2>=40){
            y = 1;
            var y2 = y*m2;
        }else if(x2<40){
            y = 0;
            var y2 = y*m2;
        }else{
            y = 0;
        }

        if(x3>=70){
            y= 5;
            var y3 = y*m3;
        }else if(70>x3 && x3>=60){
            y= 4;
            var y3 = y*m3;
        }else if(60>x3 && x3>=50){
            y= 3;
            var y3 = y*m3;
        }else if(50>x3 && x3>=45){
            y= 2;
            var y3 = y*m3;
        }else if(45>x3 && x3>=40){
            y =1;
            var y3 = y*m3;
        }else if(x3<40){
            y = 0;
            var y3 = y*m3;
        }else{
            y = 0;
        }

        if(x4>=70){
            y= 5;
            var y4 = y*m4;
        }else if(70>x4 && x4>=60){
            y= 4;
            var y4 = y*m4;
        }else if(60>x4 && x4>=50){
            y= 3;
            var y4 = y*m4;
        }else if(50>x4 && x4>=45){
            y= 2;
            var y4 = y*m4;
        }else if(45>x4 && x4>=40){
            y =1;
            var y4 = y*m4;
        }else if(x4<40){
            y = 0;
            var y4 = y*m4;
        }else{
            y = 0;
        }

        if(x5>=70){
            y= 5;
            var y5 = y*m5;
        }else if(70>x5 && x5>=60){
            y= 4;
            var y5 = y*m5;
        }else if(60>x5 && x5>=50){
            y= 3;
            var y5 = y*m5;
        }else if(50>x5 && x5>=45){
            y= 2;
            var y5 = y*m5;
        }else if(45>x5 && x5>=40){
            y =1;
            var y5 = y*m5;
        }else if(x5<40){
            y = 0;
            var y5 = y*m5;
        }else{
            y = 0;
        }
        
        if(x6>=70){
            y= 5;
            var y6 = y*m6;
        }else if(70>x6 && x6>=60){
            y= 4;
            var y6 = y*m6;
        }else if(60>x6 && x6>=50){
            y= 3;
            var y6 = y*m6;
        }else if(50>x6 && x6>=45){
            y= 2;
            var y6 = y*m6;
        }else if(45>x6 && x6>=40){
            y =1;
            var y6 = y*m6;
        }else if(x6<40){
            y = 0;
            var y6 = y*m6;
        }else{
            y = 0;
        }

        if(x7>=70){
            y= 5;
            var y7 = y*m7;
        }else if(70>x7 && x7>=60){
            y= 4;
            var y7 = y*m7;
        }else if(60>x7 && x7>=50){
            y= 3;
            var y7 = y*m7;
        }else if(50>x7 && x7>=45){
            y= 2;
            var y7 = y*m7;
        }else if(45>x7 && x7>=40){
            y =1;
            var y7 = y*m7;
        }else if(x7<40){
            y = 0;
            var y7 = y*m7;
        }else{
            y = 0;
        }

        if(x8>=70){
            y= 5;
            var y8 = y*m8;
        }else if(70>x8 && x8>=60){
            y= 4;
            var y8 = y*m8;
        }else if(60>x8 && x8>=50){
            y= 3;
            var y8 = y*m8;
        }else if(50>x8 && x8>=45){
            y= 2;
            var y8 = y*m8;
        }else if(45>x8 && x8>=40){
            y =1;
            var y8 = y*m8;
        }else if(x8<40){
            y = 0;
            var y8 = y*m8;
        }else{
            y = 0;
        }

        if(x9>=70){
            y= 5;
            var y9 = y*m9;
        }else if(70>x9 && x9>=60){
            y= 4;
            var y9 = y*m9;
        }else if(60>x9 && x9>=50){
            y= 3;
            var y9 = y*m9;
        }else if(50>x9 && x9>=45){
            y= 2;
            var y9 = y*m9;
        }else if(45>x9 && x9>=40){
            y =1;
            var y9 = y*m9;
        }else if(x9<40){
            y = 0;
            var y9 = y*m9;
        }else{
            y = 0;
        }

        if(x10>=70){
            y= 5;
            var y10 = y*m10;
        }else if(70>x10 && x10>=60){
            y= 4;
            var y10 = y*m10;
        }else if(60>x10 && x10>=50){
            y= 3;
            var y10 = y*m10;
        }else if(50>x10 && x10>=45){
            y= 2;
            var y10 = y*m10;
        }else if(45>x10 && x10>=40){
            y =1;
            var y10 = y*m10;
        }else if(x10<40){
            y = 0;
            var y10 = y*m10;
        }else{
            y = 0;
        }

        if(x11>=70){
            y= 5;
            var y11 = y*m11;
        }else if(70>x11 && x11>=60){
            y= 4;
            var y11 = y*m11;
        }else if(60>x11 && x11>=50){
            y= 3;
            var y11 = y*m11;
        }else if(50>x11 && x11>=45){
            y= 2;
            var y11 = y*m11;
        }else if(45>x11 && x11>=40){
            y =1;
            var y11 = y*m11;
        }else if(x11<40){
            y = 0;
            var y11 = y*m11;
        }else{
            y = 0;
        }

        if(x12>=70){
            y= 5;
            var y12 = y*m12;
        }else if(70>x12 && x12>=60){
            y= 4;
            var y12 = y*m12;
        }else if(60>x12 && x12>=50){
            y= 3;
            var y12 = y*m12;
        }else if(50>x12 && x12>=45){
            y= 2;
            var y12 = y*m12;
        }else if(45>x12 && x12>=40){
            y =1;
            var y12 = y*m12;
        }else if(x12<40){
            y = 0;
            var y12 = y*m12;
        }else{
            y = 0;
        }

        if(x13>=70){
            y= 5;
            var y13 = y*m13;
        }else if(70>x13 && x13>=60){
            y= 4;
            var y13 = y*13;
        }else if(60>x13 && x13>=50){
            y= 3;
            var y13 = y*m13;
        }else if(50>x13 && x13>=45){
            y= 2;
            var y13 = y*m13;
        }else if(45>x13 && x13>=40){
            y =1;
            var y13 = y*m13;
        }else if(x13<40){
            y = 0;
            var y13 = y*m13;
        }else{
            y = 0;
        }
        
        if(x14>=70){
            y= 5;
            var y14 = y*m14;
        }else if(70>x14 && x14>=60){
            y= 4;
            var y14 = y*m14;
        }else if(60>x14 && x14>=50){
            y= 3;
            var y14 = y*m14;
        }else if(50>x14 && x14>=45){
            y= 2;
            var y14 = y*m14;
        }else if(45>x14 && x14>=40){
            y =1;
            var y14 = y*m14;
        }else if(x14<40){
            y = 0;
            var y14 = y*m14;
        }else{
            y = 0;
        }

        if(x15>=70){
            y= 5;
            var y15 = y*m15;
        }else if(70>x15 && x15>=60){
            y= 4;
            var y15 = y*m15;
        }else if(60>x15 && x15>=50){
            y= 3;
            var y15 = y*m15;
        }else if(50>x15 && x15>=45){
            y= 2;
            var y15 = y*m15;
        }else if(45>x15 && x15>=40){
            y =1;
            var y15 = y*m15;
        }else if(x15<40){
            y = 0;
            var y15 = y*m15;
        }else{
            y = 0;
        }

        function Inner(){
            var gp = (y1 + y2 + y3 + y4 + y5 + y6 + y7 + y8 + y9 + y10 + y11 + y12 + y13 + y14 + y15)/(Number(m1) + Number(m2) + Number(m3) + Number(m4) + Number(m5) + Number(m6) + Number(m7) + Number(m8) + Number(m9) + Number(m10) + Number(m11) + Number(m12) + Number(m13) + Number(m14) + Number(m15));
            self.resultBox.innerHTML = gp.toFixed(2);
            
        }
        Inner();
    }
    self.calcGp.addEventListener('click',GpCalc);
    self.interface.appendChild(self.tableHeaderRow);
    self.tableHeaderRow.appendChild(self.tableHeader1);
    self.tableHeaderRow.appendChild(self.tableHeader2);
    self.tableHeaderRow.appendChild(self.tableHeader3);
    
    self.interface.appendChild(self.tableRow1);
    self.tableRow1.appendChild(self.tableCol11);
    self.tableCol11.appendChild(self.input11);
    self.tableRow1.appendChild(self.tableCol21);
    self.tableCol21.appendChild(self.input21);
    self.tableRow1.appendChild(self.tableCol31);
    self.tableCol31.appendChild(self.input31);

    self.interface.appendChild(self.tableRow2);
    self.tableRow2.appendChild(self.tableCol12);
    self.tableCol12.appendChild(self.input12);
    self.tableRow2.appendChild(self.tableCol22);
    self.tableCol22.appendChild(self.input22);
    self.tableRow2.appendChild(self.tableCol32);
    self.tableCol32.appendChild(self.input32);
    
    self.interface.appendChild(self.tableRow3);
    self.tableRow3.appendChild(self.tableCol13);
    self.tableCol13.appendChild(self.input13);
    self.tableRow3.appendChild(self.tableCol23);
    self.tableCol23.appendChild(self.input23);
    self.tableRow3.appendChild(self.tableCol33);
    self.tableCol33.appendChild(self.input33);
    
    self.interface.appendChild(self.tableRow4);
    self.tableRow4.appendChild(self.tableCol14);
    self.tableCol14.appendChild(self.input14);
    self.tableRow4.appendChild(self.tableCol24);
    self.tableCol24.appendChild(self.input24);
    self.tableRow4.appendChild(self.tableCol34);
    self.tableCol34.appendChild(self.input34);
    
    self.interface.appendChild(self.tableRow5);
    self.tableRow5.appendChild(self.tableCol15);
    self.tableCol15.appendChild(self.input15);
    self.tableRow5.appendChild(self.tableCol25);
    self.tableCol25.appendChild(self.input25);
    self.tableRow5.appendChild(self.tableCol35);
    self.tableCol35.appendChild(self.input35);

    self.interface.appendChild(self.tableRow6);
    self.tableRow6.appendChild(self.tableCol16);
    self.tableCol16.appendChild(self.input16);
    self.tableRow6.appendChild(self.tableCol26);
    self.tableCol26.appendChild(self.input26);
    self.tableRow6.appendChild(self.tableCol36);
    self.tableCol36.appendChild(self.input36);

    self.interface.appendChild(self.tableRow7);
    self.tableRow7.appendChild(self.tableCol17);
    self.tableCol17.appendChild(self.input17);
    self.tableRow7.appendChild(self.tableCol27);
    self.tableCol27.appendChild(self.input27);
    self.tableRow7.appendChild(self.tableCol37);
    self.tableCol37.appendChild(self.input37);

    self.interface.appendChild(self.tableRow8);
    self.tableRow8.appendChild(self.tableCol18);
    self.tableCol18.appendChild(self.input18);
    self.tableRow8.appendChild(self.tableCol28);
    self.tableCol28.appendChild(self.input28);
    self.tableRow8.appendChild(self.tableCol38);
    self.tableCol38.appendChild(self.input38);

    self.interface.appendChild(self.tableRow9);
    self.tableRow9.appendChild(self.tableCol19);
    self.tableCol19.appendChild(self.input19);
    self.tableRow9.appendChild(self.tableCol29);
    self.tableCol29.appendChild(self.input29);
    self.tableRow9.appendChild(self.tableCol39);
    self.tableCol39.appendChild(self.input39);

    self.interface.appendChild(self.tableRow10);
    self.tableRow10.appendChild(self.tableCol1a);
    self.tableCol1a.appendChild(self.input1a);
    self.tableRow10.appendChild(self.tableCol2a);
    self.tableCol2a.appendChild(self.input2a);
    self.tableRow10.appendChild(self.tableCol3a);
    self.tableCol3a.appendChild(self.input3a);

    self.interface.appendChild(self.tableRow11);
    self.tableRow11.appendChild(self.tableCol1b);
    self.tableCol1b.appendChild(self.input1b);
    self.tableRow11.appendChild(self.tableCol2b);
    self.tableCol2b.appendChild(self.input2b);
    self.tableRow11.appendChild(self.tableCol3b);
    self.tableCol3b.appendChild(self.input3b);

    self.interface.appendChild(self.tableRow12);
    self.tableRow12.appendChild(self.tableCol1c);
    self.tableCol1c.appendChild(self.input1c);
    self.tableRow12.appendChild(self.tableCol2c);
    self.tableCol2c.appendChild(self.input2c);
    self.tableRow12.appendChild(self.tableCol3c);
    self.tableCol3c.appendChild(self.input3c);

    self.interface.appendChild(self.tableRow13);
    self.tableRow13.appendChild(self.tableCol1d);
    self.tableCol1d.appendChild(self.input1d);
    self.tableRow13.appendChild(self.tableCol2d);
    self.tableCol2d.appendChild(self.input2d);
    self.tableRow13.appendChild(self.tableCol3d);
    self.tableCol3d.appendChild(self.input3d);

    self.interface.appendChild(self.tableRow14);
    self.tableRow14.appendChild(self.tableCol1e);
    self.tableCol1e.appendChild(self.input1e);
    self.tableRow14.appendChild(self.tableCol2e);
    self.tableCol2e.appendChild(self.input2e);
    self.tableRow14.appendChild(self.tableCol3e);
    self.tableCol3e.appendChild(self.input3e);

    self.interface.appendChild(self.tableRow15);
    self.tableRow15.appendChild(self.tableCol1f);
    self.tableCol1f.appendChild(self.input1f);
    self.tableRow15.appendChild(self.tableCol2f);
    self.tableCol2f.appendChild(self.input2f);
    self.tableRow15.appendChild(self.tableCol3f);
    self.tableCol3f.appendChild(self.input3f);

    self.interface.appendChild(self.lastRow);
    self.lastRow.appendChild(self.calcGp);
    self.lastRow.appendChild(self.label);
    self.lastRow.appendChild(self.resultBox);
    
    document.body.appendChild(self.interface);
}
var Cgpa1= new Cgpa();