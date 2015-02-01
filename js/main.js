// activate tooltips for members page
$(function () {
  $('[data-toggle="tooltip"]').tooltip({
    placement: "bottom",
    html: true,
    trigger: "click hover"
  });
});

// fancy hover effect for recipe cards
$('.recipe')
  .mouseover(function() {
    $(this).find('img').css("opacity", "0.6");
    $(this).find('img').css("transform", "scale(1.2)");
    $(this).find('p').css("color", "#fff");
    $(this).css("background-color", "#473537");
    $(this).css("cursor", "zoom-in");
})
  .mouseout(function() {
    $(this).find('img').css("opacity", "1");
    $(this).find('img').css("transform", "scale(1)");
    $(this).find('p').css("color", "#000");
    $(this).css("background-color", "#fff");
});
