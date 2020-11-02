
function ToDo(){
  this.listInterface = document.createElement("div");
  this.listInterface.setAttribute("class","list-interface");
  this.header = document.createElement("h2");
  this.header.setAttribute("class","header");
  this.header.innerHTML = "My ToDo List";
  this.listInterface.appendChild(this.header);
  this.inputBox = document.createElement("input");
  this.inputBox.setAttribute("type", "text");
  this.inputBox.setAttribute("class", "input-box");
  this.inputBox.setAttribute("placeholder", "Type your activity here");
  this.addList= document.createElement("button");
  this.addList.setAttribute("class","add-list");
  

  this.addList.innerHTML = "Add";
  this.listInterface.appendChild(this.inputBox);
  this.listInterface.appendChild(this.addList);
  document.body.appendChild(this.listInterface);
  this.removeList = document.createElement("button");
  this.removeList.setAttribute("class", "remove-list");
  this.removeList.innerHTML ="Clear All"
  
  this.listInterface.appendChild(this.removeList);
  var self = this;
  this.addList.addEventListener("click",function(e){
    e.preventDefault();
    self.createToDo()});
  
  this.createToDo = function(){
    this.boxInterface = document.createElement("div");
    this.listBox= document.createElement("div");
    this.listBox.setAttribute("class","list-box");
    this.checkBox = document.createElement("input");
    this.checkBox.setAttribute("type","checkbox");
    this.checkBox.setAttribute("class","check-box");
    var message = this.inputBox.value;
    this.listSpan = document.createElement("span");
    this.listSpan.setAttribute("class","list-span");
    this.listSpan.innerHTML =message;
    //self.listSpan.style.backgroundColor ='blue';
    this.clearButton= document.createElement("button");
    this.clearButton.setAttribute("class","clear-button");
    this.clearButton.innerHTML= "Clear";
    
    //self.clearButton.setAttribute("")
   
    
    this.listBox.appendChild(this.checkBox);
    this.listBox.appendChild(this.listSpan);
    this.listBox.appendChild(this.clearButton);
    this.boxInterface.appendChild(this.listBox);
    this.listInterface.appendChild(this.boxInterface);
    
    this.removeList.addEventListener("click",function(){
      self.boxInterface.style.display= "none";
    });
    this.clearButton.addEventListener("click", function(e){
      e.preventDefault();
      self.listBox.style.display="none";
    })
    
    
  }
 
  
}
var toDo1= new ToDo();
