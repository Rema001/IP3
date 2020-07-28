$(document).ready(function () {

$(".btn_1").click(function(){
     $("p.par_1").toggle();
     $(".btn_1").toggle();
 });
 $("p.par_1").click(function(){
     $("p.par_1").toggle();
     $(".btn_1").toggle();
 });
  $(".btn_2").click(function(){
      $("p.par_2").toggle();
      $(".btn_2").toggle();
  });
  $("p.par_2").click(function(){
      $("p.par_2").toggle();
      $(".btn_2").toggle();
  });
  $(".btn_3").click(function(){
      $("p.par_3").toggle();
      $(".btn_3").toggle();
  });
  $("p.par_3").click(function(){
      $(".btn_3").toggle();
      $("p.par_3").toggle();
  });
  $("#sendButton").click(function () {
    var names = document.getElementsByiD("#names").value;
    var email = document.getElementsByiD("#email").value;
    var message = document.getElementsByiD("#textarea").value;
    if ((names==="") (email==="") (message==="")) {
      alert("Please, fill the required fields!");
      event.preventDefault();
    }
    else {
      alert(names + ",we have received your message. Thank you for reaching out to us");
    }


  });
});
