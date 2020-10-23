function fac(n,m){
  if(n>0){
    fac(n-1,m);
    function key(m=12){
      if (m>0){
        key(m-1);
        var ans= n*m;
        document.write(n + "*" + m + "=" + ans + "<br>");
      }
      
    }
    key(m);
    document.write("<br>");
  }
  
}
fac(2,8);
