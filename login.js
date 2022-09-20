function validate() {
  var userName = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  console.log("username :: ", userName);
  console.log("password :: " ,password);
  
  if(userName == 'aadhya' && password == 'password')
  {
  location.href ='file:///C:/Users/AadhyaS/Desktop/uiassign/normalForm%20(1).html';
  
  }
  else{
  window.alert("Please enter valid details!");
  }
  }

