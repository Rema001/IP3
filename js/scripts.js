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
    var names = $("#names").val();
    var email = $("#email").val();
    var message = $("#textarea").val();
    if ((names==="") (email==="") (message==="")) {
      alert("Please, fill the required fields!");
    }
    else {
      alert(names + ",we have received your message. Thank you for reaching out to us")
    }
  
  });
});
