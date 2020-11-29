function Word(){
    //var this = this;    
   this.wordInterface = document.getElementById("word-interface");
   this.topBar = document.getElementById("Top-baR");;
   this.toolBar = document.getElementById("Tool-baR");
   this.menuBar = document.getElementById("Menu-baR");
   this.searchBox = document.createElement('input');
   this.searchBox.setAttribute('class','search-box');
   this.searchBox.setAttribute('type','text');
   this.searchBox.setAttribute('placeholder','type to search');
   this.textArea = document.querySelector("#Text-areA");

   this.file = document.getElementById("FilE");;
   this.file.innerHTML = "FILE";
   this.home = document.getElementById("HomE");
   this.home.innerHTML = "HOME";
   this.Insert = document.getElementById("InserT");
   this.Insert.innerHTML = "INSERT";
   this.Design = document.getElementById("DesigN");
   this.Design.innerHTML = "DESIGN";
   this.pageLayout = document.getElementById("Page-layouT");
   this.pageLayout.innerHTML = "PAGE LAYOUT";
   this.references = document.getElementById("ReferenceS");
   this.references.innerHTML = "REFERENCES";
   this.mailings = document.getElementById("MailingS");
   this.mailings.innerHTML = "MAILINGS";
   this.review = document.getElementById("RevieW");
   this.review.innerHTML = "REVIEW";
   this.view = document.getElementById("VieW");
   this.view.innerHTML = "VIEW";
    
   this.home.addEventListener('click',()=>{
        this.homeInterface = document.getElementById('Home-interfacE');
        this.homeInterface.style.display = 'block';
        //this.home.style.color = 'blue';
        //this.home.style.backgroundColor = 'white';
        Home();
    })
   this.Insert.addEventListener('click',()=>{
        //Insert();
       //this.Insert.style.color = 'blue';
       //this.Insert.style.backgroundColor = 'white';
    })
   this.Design.addEventListener('click',()=>{
        //Home();
       //this.Design.style.color = 'blue';
       //this.Design.style.backgroundColor = 'white';
    })
   this.pageLayout.addEventListener('click',()=>{
        //Home();
       //this.pageLayout.style.color = 'blue';
       //this.pageLayout.style.backgroundColor = 'white';
    })
   this.references.addEventListener('click',()=>{
        //Home();
       //this.references.style.color = 'blue';
       //this.references.style.backgroundColor = 'white';
    })
   this.mailings.addEventListener('click',()=>{
        //Home();
       //this.mailings.style.color = 'blue';
       //this.mailings.style.backgroundColor = 'white';
        
    })
   this.review.addEventListener('click',()=>{
        //Home();
       //this.review.style.color = 'blue';
       //this.review.style.backgroundColor = 'white';
    })
   this.view.addEventListener('click',()=>{
        //Home();
       //this.view.style.color = 'blue';
       //this.view.style.backgroundColor = 'white';
    })

    
    function Home(){

       this.replace = document.getElementById('ReplacE');
       this.replace.addEventListener('click',Replace)
       this.caseIcon = document.getElementById('Case-icoN');
        function Replace(){
            this.replaceInterface = document.getElementById('Replace-interfacE');
            this.replaceInterface.style.display = "block";
            var replaceBtn = document.getElementById('Replace-buttoN');
            var replaceAllBtn = document.getElementById('Replace-all-buttoN');

            replaceBtn.addEventListener('click',()=>{
                document.querySelector("#Text-areA").value = document.querySelector("#Text-areA").value.replace(RegExp(document.querySelector('#Find-boX').value,'i'),document.querySelector('#Replace-boX').value);
            });
            replaceAllBtn.addEventListener('click', function(){
                document.querySelector("#Text-areA").value = document.querySelector("#Text-areA").value.replace(RegExp(document.querySelector('#Find-boX').value,'gi'),document.querySelector('#Replace-boX').value);
            });
        }
        function Bold(){
           //this.bold.style.backgroundColor = 'lightblue';
            //this.textArea.value = ;
            
            var selectedText = document.querySelector("#Text-areA");
            //var lie = document.querySelector("#Text-areA").value;
            if(document.querySelector("#Text-areA").selectionStart == document.querySelector("#Text-areA").selectionEnd){
                return;
            }
            var selected = document.querySelector("#Text-areA").value.slice(document.querySelector("#Text-areA").selectionStart,document.querySelector("#Text-areA").selectionEnd);
            selectedText.style.fontStyle ='italic';
            console.log(selected.italics());
            /*document.querySelector("#Text-areA").setRangeText(selected.strike);
            */
            console.log(selectedText);
            //console.log(lie);
        }
        function ChangeCase(){
            var text = document.querySelector("#Text-areA");
            var text1 = text.value;
            var end =text.selectionEnd;
            var start =text.selectionStart;
            //let upperCase = 
            if(text.selectionStart == text.selectionEnd){
                let previousIndex = text1.lastIndexOf(' ', start-1);
                console.log("start"+start);
                console.log("previousIndex"+previousIndex);
                console.log("end"+end)
                let nextIndex = text1.indexOf(" ", end);
                console.log(nextIndex);
                const begin = previousIndex < 0 ? 0: previousIndex +1;
                const end1 = nextIndex < 0 ? text1.length : nextIndex +1;
                const between = text1.substring(begin, end1);
                console.log(between.toUpperCase());
                text1.replace(RegExp(between,'i'), between.toUpperCase());

            }

            var text3 = text1.slice(start,end);
            text.setRangeText(text3.toUpperCase());


        }
       this.bold = document.getElementById('Bold-icoN')
       this.bold.setAttribute('class','bold-icon');
       this.caseIcon.addEventListener('click', ChangeCase)
       this.bold.addEventListener('click', Bold);
       this.replace.addEventListener('click', Replace);
    }
    function Insert(){
       this.dateTime = document.createElement('span');
       this.dateTime.setAttribute('class','date-time');
       this.dateTime.innerHTML = 'Date and Time';
       this.insertMenu = document.createElement('div');
       this.insertMenu.appendChild(this.dateTime);
       this.menuBar.innerHTML =this.insertMenu;
    }
   
}
var word1 = new Word();
