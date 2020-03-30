function validate() {
    var fName = document.getElementById("fname").value;
    var lName = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var comments = document.getElementById("comments").value;
    var error_message = document.getElementById("error_message");
    error_message.style.padding = "10px";
  
    var text;
    if (fName.length < 1) {
      text = "Please Enter First Name";
      error_message.innerHTML = text;
      return false;
    }
    if (lName.length < 1) {
      text = "Please Enter Last Name";
      error_message.innerHTML = text;
      return false;
    }
    if (email.indexOf("@") == -1 || email.length < 10) {
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    if (comments.length < 1) {
      text = "Please Enter a Comment";
      error_message.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully!");
    return true;
  }