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

// smooth scrolling

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 3
        }, 1000);
        return false;
      }
    }
  });
});
