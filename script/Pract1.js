const pol= "Excel";
/*var pol1= (name,salary)=>{
  this.name = name;
  this.salary = salary;
  document.write(this.name+"is paid"+ this.salary);
}
pol1("Excel","20000");
document.write(pol);*/
class Employee{
  constructor(name,salary){
    this.name = name;
    this.salary = salary;
    document.write(this.name+"is paid"+ this.salary+"<br>");
  }
  getPaid(person){
    document.write(person+"'s salary is"+this.salary+"<br>");
  }
  static pay(name){
    
    document.write("pay"+ name);
  }
}
class Staff extends Employee{
  constructor(name,salary,role){
    
    super(name,salary);
    this.role= role;
  }
  
}
var staff1 = new Staff("Excel",200000,"CEO");
var employ1= new Employee ("Excel","200000");
staff1.getPaid("Comfort");
employ1.getPaid("Prosper");
Employee.pay("Favour");
  