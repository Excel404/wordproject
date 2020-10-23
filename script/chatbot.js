function Chatbot(name,creator){
  this.name= name;
  this.creator= creator;
  this.questions=[
    ['hello Jarvis','hi Jarvis','Good morning Jarvis'],
    ["I'm fine",'It was fine','splendid'],
    ['What are my activities today','Do I have any appointment today'],
    ['Ok, thank you']
  ];
  this.bot=[
    ['How are you?','How was your night?','How was today?'],
    ["That's fine","Wow, that's great","Ok, that's fine"],
    ['Go to church and Play football','Yeah, meet Emeka and Chinedu'],
    ["You're welcome"]
  ];
  this.chatInterface= document.createElement('div');
  this.chatInterface.setAttribute("class","chat-interface");
  this.messageBox= document.createElement("div");
  this.messageBox.setAttribute("class","message-box");
  this.inputBox= document.createElement("input");
  this.inputBox.setAttribute("class","input-box");
   this.inputBox.setAttribute("type","text");
  this.sendButton= document.createElement("button");
  this.sendButton.setAttribute("class","send-button");
  this.sendButton.innerHTML="Send";
  
  this.chatInterface.appendChild(this.messageBox);
  this.chatInterface.appendChild(this.inputBox);
  this.chatInterface.appendChild(this.sendButton);
  document.body.appendChild(this.chatInterface);
  this.ask="";
  this.start= function(){
    var self= this;
    function iterate(){
     // while(self.ask!='Goodbye'){
      var inputMessage= self.inputBox.value;
      //console.log(inputMessage);
      if(self.ask!=inputMessage){
        //self.ask=inputMessage;
        //self.ask= prompt("I am Jarvis, how may I help you?");
        self.receiveMessage(inputMessage);
        var i= 0;
        while (i<self.questions.length){
          var innerQuestions= self.questions[i];
          var m=0;
          while(m<innerQuestions.length){
            var question= innerQuestions[m];
            var relate= question.includes(self.ask);
            if (relate== true){
              var innerBot=self.bot[i];
              self.send(innerBot[m]);
                //break;
              }else{
              m++;
            }
          }
          i++;
        }
      }
    }
    iterate();
    
    function createMessage(ask, messageBox,type="send"){
      //this creates a message
      var box= document.createElement("div");
      box.setAttribute("class","box")
      var text= document.createElement("span");
    
      if(type=="receive"){
        text.style.backgroundColor= "lightgreen";
        text.setAttribute("class","text-receive");
      }else{
        text.style.backgroundColor="white";
        text.setAttribute("class","text-send");
      }
      box.appendChild(text);
      messageBox.appendChild(box);
      text.innerHTML= ask;
      //this.messageBox= messageBox;
      //this.ask=ask;
    }
    
    this.receiveMessage= function(ask){
      //this receives message from the user
      this.ask=ask;
      createMessage(ask,this.messageBox,"receive");
    } 
    this.send= function(ask){
      //this repies the user
      this.ask=ask;
      createMessage(ask,this.messageBox);
    }
    
    var self= this;
    /*self.sendButton.addEventListener("click",function(e){
    e.preventDefault();
    iterate();
    
    });*/
    
  }
  var self= this;
  self.sendButton.addEventListener("click",function(e){
    e.preventDefault();
    self.start();
  });
  self.sendButton.addEventListener("click", function(){
    self.inputBox.value.display="none";
  })
  
};
var chat1= new Chatbot("Nart","Excel");
chat1.start();
