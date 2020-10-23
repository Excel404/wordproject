/*var div1= document.createElement("div");
div1.setAttribute("id","boss");
document.body.appendChild(div1);*/
var div1 = document.getElementById("li")
div1.style.width="50px";
div1.style.height="50px";
function widthChanger(){
  div1.style.width="100px";
}
div1.addEventListener("mouseover",widthChanger);



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
        
        
 
        for(var i=0; i<self.questions.length; i++){
          var question= self.questions[i];
          for(var m=0; m<question.length;m++){
            var relate= question.includes(self.ask);
            if(relate==true){
              var innerBot= self.bot[i];
              self.send(innerBot[m]);
            }
          }
        
        }
        
        
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