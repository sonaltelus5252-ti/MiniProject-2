function myFun()
 {
   var user = document.getElementById("Uname");
   var pwd = document.getElementById("Pass");
   var a = false;

   if(user.value =="" && pwd.value=="" )
   {
     alert("Blank value not allowed");
   return false;
   }
     else if(user.value =="")
   {
     alert("User blank value not allowed");
     return false;
   }
   else if(pwd.value=="")
   {
    alert("Password blank value not allowed");
    return false;
   }
   else
   {
    document.getElementById("New").innerHTML="Hii Welcome:)";
    a = true;
    }
   
  
  }