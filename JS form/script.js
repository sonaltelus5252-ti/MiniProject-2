function myfun()
{
   var User = document.getElementById("Uname");
   var Pwd = document.getElementById("Pass");



   if(User.value =="" && Pwd.value=="" )
   {
     alert("Blank value not allowed");
   return false;
   }
     else if(User.value =="")
   {
     alert("User blank value not allowed");
     return false;
   }
   else if(Pwd.value=="")
   {
    alert("Password blank value not allowed");
    return false;
   }
   else
   {
    alert("Log in sucessfully");
      return true;
    }
  }