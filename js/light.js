function hacerNoche() {
  // $("body").toggleClass("black", "body");
  $("body").removeClass("white");
  $("body").addClass("black");

  $("#light-sun").hide();
  $(".light-moon").show();
  $("#name").css("color", "#fff");
  $(".card-body").css("background-color", "#808080cc");
}

function hacerDia() {
  // $("body").toggleClass("black", "body");
  $("body").removeClass("black");
  $("body").addClass("white");

  $("#light-sun").show();
  $(".light-moon").hide();
  $("#name").css("color", "#000");
  $(".card-body").css("background-color", "#000000e6");
}

$("#light-sun").click(function (e) {
  e.preventDefault();
  hacerNoche();
  localStorage.setItem("black-mode", "true");
});

$("#light-moon").click(function (e) {
  e.preventDefault();
  hacerDia();
  localStorage.setItem("black-mode", "false");
});

// Obtenerlo

if (localStorage.getItem("black-mode") == "true") {
  hacerNoche();
} else {
  hacerDia();
}
