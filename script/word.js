function Word(){
    var self = this;    
    self.wordInterface = document.createElement("div");
    self.wordInterface.setAttribute("class","word-interface");
    self.topBar = document.createElement('div');
    self.topBar.setAttribute('class','top-bar');
    self.toolBar = document.createElement('div');
    self.toolBar.setAttribute('class','tool-bar');
    self.menuBar = document.createElement('div');
    self.menuBar.setAttribute('class','menu-bar');
    self.searchBox = document.createElement('input');
    self.searchBox.setAttribute('class','search-box');
    self.searchBox.setAttribute('type','text');
    self.searchBox.setAttribute('placeholder','type to search');
    self.textArea = document.createElement('textarea');
    self.textArea.setAttribute('class','text-area');
    self.textArea.setAttribute('type','text');

    self.file = document.createElement('span');
    self.file.setAttribute('class','file');
    self.file.innerHTML = "FILE";
    self.home = document.createElement('span');
    self.home.setAttribute('class','home');
    self.home.innerHTML = "HOME";
    self.Insert = document.createElement('span');
    self.Insert.setAttribute('class','insert');
    self.Insert.innerHTML = "INSERT";
    self.Design = document.createElement('span');
    self.Design.setAttribute('class','design');
    self.Design.innerHTML = "DESIGN";
    self.pageLayout = document.createElement('span');
    self.pageLayout.setAttribute('class','page-layout');
    self.pageLayout.innerHTML = "PAGE LAYOUT";
    self.references = document.createElement('span');
    self.references.setAttribute('class','references');
    self.references.innerHTML = "REFERENCES";
    self.mailings = document.createElement('span');
    self.mailings.setAttribute('class','mailings');
    self.mailings.innerHTML = "MAILINGS";
    self.review = document.createElement('span');
    self.review.setAttribute('class','review');
    self.review.innerHTML = "REVIEW";
    self.view = document.createElement('span');
    self.view.setAttribute('class','view');
    self.view.innerHTML = "VIEW";
    
    self.home.addEventListener('click',()=>{
        Home();
        self.home.style.color = 'blue';
        self.home.style.backgroundColor = 'whitesmoke';
    })
    self.Insert.addEventListener('click',()=>{
        Insert();
        self.Insert.style.color = 'blue';
        self.Insert.style.backgroundColor = 'whitesmoke';
    })
    self.Design.addEventListener('click',()=>{
        //Home();
        self.Design.style.color = 'blue';
        self.Design.style.backgroundColor = 'whitesmoke';
    })
    self.pageLayout.addEventListener('click',()=>{
        //Home();
        self.pageLayout.style.color = 'blue';
        self.pageLayout.style.backgroundColor = 'whitesmoke';
    })
    self.references.addEventListener('click',()=>{
        //Home();
        self.references.style.color = 'blue';
        self.references.style.backgroundColor = 'whitesmoke';
    })
    self.mailings.addEventListener('click',()=>{
        //Home();
        self.mailings.style.color = 'blue';
        self.mailings.style.backgroundColor = 'whitesmoke';
        
    })
    self.review.addEventListener('click',()=>{
        //Home();
        self.review.style.color = 'blue';
        self.review.style.backgroundColor = 'whitesmoke';
    })
    self.view.addEventListener('click',()=>{
        //Home();
        self.view.style.color = 'blue';
        self.view.style.backgroundColor = 'whitesmoke';
    })

    //self.replace.addEventListener('onclick',()=>{    })
    function Home(){
        self.replace = document.createElement('span');
        self.replace.setAttribute('class','replace');
        self.replace.innerHTML = "Replace";
        self.caseIcon = document.createElement('span');
        self.caseIcon.innerHTML ='Aa<i></i>';
        function Replace(){
            self.replaceInterface = document.createElement('div');
            self.replaceInterface.setAttribute('class','replace-interface');
            self.replaceTopBar = document.createElement('div');
            self.replaceTopBar.setAttribute('class','replace-top-bar');
            self.findLabel = document.createElement('span');
            self.findLabel.setAttribute('class','find-label');
            self.findLabel.innerHTML= "Find what:";
            self.findBox = document.createElement('input');
            self.findBox.setAttribute('class','find-box');
            self.findBox.setAttribute('type','text');
            self.replaceLabel = document.createElement('span');
            self.replaceLabel.setAttribute('class','replace-label');
            self.replaceLabel.innerHTML= 'Replace what:';
            self.replaceBox = document.createElement('input');
            self.replaceBox.setAttribute('class','replace-box');
            self.replaceBox.setAttribute('type','text');
            var replaceBtn = document.createElement('button');
            replaceBtn.setAttribute('class','replace-button');
            replaceBtn.innerHTML = "Replace";
            var replaceAllBtn = document.createElement('button');
            replaceAllBtn.setAttribute('class','replace-all-button');
            replaceAllBtn.innerHTML ="Replace All";
            
            replaceBtn.addEventListener('click',()=>{
                self.textArea.value = self.textArea.value.replace(RegExp(self.findBox.value,'i'),self.replaceBox.value);
                console.log(self.findBox.value);
                console.log(self.replaceBox.value);
                console.log(self.textArea.value);
            });
            replaceAllBtn.addEventListener('click', function(){
                self.textArea.value = self.textArea.value.replace(RegExp(self.findBox.value, 'gi'),self.replaceBox.value);
            });
            self.replace.style.backgroundColor = 'lightblue';
            self.replaceInterface.appendChild(self.replaceTopBar);
            self.replaceInterface.appendChild(self.findLabel);
            self.replaceInterface.appendChild(self.findBox);
            self.replaceInterface.appendChild(self.replaceLabel);
            self.replaceInterface.appendChild(self.replaceBox);
            self.replaceInterface.appendChild(replaceBtn);
            self.replaceInterface.appendChild(replaceAllBtn);
            self.wordInterface.appendChild(self.replaceInterface);
            
        }
        function Bold(){
            self.bold.style.backgroundColor = 'lightblue';
            //self.textArea.value = ;
            
            var selectedText = self.textArea.value;
            var lie = '';
            if(self.textArea.selectionStart == self.textArea.selectionEnd){
                return;
                //lie = selectedText.getSelection();
            }
            var selected = self.textArea.value.slice(self.textArea.selectionStart, self.textArea.selectionEnd);
            //selected.style.fontWeight ='bold';
            console.log(selected.strike());
            self.textArea.setRangeText(selected, self.textArea.selectionStart,self.textArea.selectionEnd, "end");
            console.log(selectedText);
            console.log(lie);
        }
        function ChangeCase(){
            
            if(self.textArea.selectionStart == self.textArea.selectionEnd){
                let end = self.textArea.value;
                let look = end.slice(end.lastIndexOf(' '),self.textArea.selectionStart);
                //self.textArea.setRangeText(look.toUpperCase());    
                let beg = look.toUpperCase();
                end.replace(new RegExp(look),beg);
                console.log(beg);
            }
            var text = self.textArea.value.slice(self.textArea.selectionStart,self.textArea.selectionEnd);
            self.textArea.setRangeText(text.toUpperCase());


        }
        self.bold = document.createElement('span');
        self.bold.setAttribute('class','bold-icon');
        self.bold.innerHTML = '<b>B</b>';
        self.caseIcon.addEventListener('click', ChangeCase)
        self.bold.addEventListener('click', Bold);
        self.replace.addEventListener('click', Replace);
        self.menuBar.appendChild(self.caseIcon);
        self.menuBar.appendChild(self.bold);
        self.menuBar.appendChild(self.replace);
    }
    function Insert(){
        self.dateTime = document.createElement('span');
        self.dateTime.setAttribute('class','date-time');
        self.dateTime.innerHTML = 'Date and Time';
        self.insertMenu = document.createElement('div');
        self.insertMenu.appendChild(self.dateTime);
        self.menuBar.innerHTML = self.insertMenu;
    }
    self.toolBar.appendChild(self.file);
    self.toolBar.appendChild(self.home);
    self.toolBar.appendChild(self.Insert);
    self.toolBar.appendChild(self.Design);
    self.toolBar.appendChild(self.pageLayout);
    self.toolBar.appendChild(self.references);
    self.toolBar.appendChild(self.mailings);
    self.toolBar.appendChild(self.review);
    self.toolBar.appendChild(self.view);
    self.wordInterface.appendChild(self.topBar);
    self.wordInterface.appendChild(self.toolBar);
    
    self.wordInterface.appendChild(self.menuBar);
    self.wordInterface.appendChild(self.textArea);
    document.body.appendChild(self.wordInterface);
}
var word1 = new Word();
