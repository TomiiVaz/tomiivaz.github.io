function abrirMenu() {
  $(".navheader").slideDown("1000", function () {
    $(".btn_menu").hide();
    $(".navheader").show();
    $(".btn_close").show();
    $(".navheader").addClass('menuMobileOpen');
  });
}

function cerrarMenu() {
  $(".navheader").slideUp("1000", function () {
    $(".btn_close").hide();
    $(".btn_menu").show();
    $(".navheader").hide();
  });
}

$(document).ready(function () {
  $(".btn_menu").click(function () {
    abrirMenu();
  });

  $(".btn_close").click(function () {
    cerrarMenu();
  });
});
