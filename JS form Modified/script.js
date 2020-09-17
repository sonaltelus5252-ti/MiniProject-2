function myFun()
{
   var user = document.getElementById("Uname");
   var pwd = document.getElementById("Pass");



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
      window.open("home.html");
      return true;
    }
  }