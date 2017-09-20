$("#return-to-top").click(function() {
    $("html, body").animate({scrollTop: 0},1000);
    return false;
});
$(".nav").on("click", function() {
    $(".header_hide").fadeIn(500);
  });
  $(".nav_back").on("click", function() {
    $(".header_hide").fadeOut(500);
  });
