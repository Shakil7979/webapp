document.addEventListener("DOMContentLoaded", function () {
  /* Update the JavaScript code to display the login form */
  document
    .getElementById("login-toggle")
    .addEventListener("click", function () {
      document.getElementById("userlogin").style.display = "block";
      document.getElementById("form2").style.display = "none";
      document.getElementById("login-toggle").classList.add("active");
      document.getElementById("signup-toggle").classList.remove("active");
    });

  document
    .getElementById("signup-toggle")
    .addEventListener("click", function () {
      document.getElementById("userlogin").style.display = "none";
      document.getElementById("form2").style.display = "block";
      document.getElementById("login-toggle").classList.remove("active");
      document.getElementById("signup-toggle").classList.add("active");
    });

  /* Add the following code to show the login form by default */
  window.onload = function () {
    document.getElementById("userlogin").style.display = "block";
    document.getElementById("form2").style.display = "none";
    document.getElementById("login-toggle").classList.add("active");
    document.getElementById("signup-toggle").classList.remove("active");
  };
});
