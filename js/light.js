function hacerNoche() {
  $("body").toggleClass("black", "body");
  $("#light-sun").hide();
  $(".light-moon").show();
  $("#name").css("color", "#fff");
}

function hacerDia() {
  $("body").toggleClass("black", "body");
  $("#light-sun").show();
  $(".light-moon").hide();
  $("#name").css("color", "#000");
}

$("#light-sun").click(function (e) {
  e.preventDefault();
  hacerNoche();
});

$("#light-moon").click(function (e) {
  e.preventDefault();
  hacerDia();
});
