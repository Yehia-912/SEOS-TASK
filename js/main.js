$(function () {
  //preloader
  $("#pre-louder .pre-louder-content").animate(
    {
      opacity: 1,
    },
    1300,
    function () {
      $("#pre-louder").hide();
    }
  );
  //animate landing element
  $(".animate-to-right").animate(
    {
      left: 0,
    },
    1600
  );
  $(".landing img").animate(
    {
      left: 0,
    },
    1500
  );
  //scroll-x for slider
  setInterval(function(){
    $(".carousel-item").toggleClass('active').parent().next().toggleClass('active sr');
  },3000)
  //initial width to collapsing navbar
  var strangeCollapse =
    ($(window).innerWidth() - $("nav .container").innerWidth()) / 2;
  $("header nav .strange-collapse").css({
    width: `${$("nav .container").innerWidth()}`,
    left: strangeCollapse,
  });
  //dynamic width for collapsing navbar
  $(window).resize(function () {
    strangeCollapse =
      ($(window).innerWidth() - $("nav .container").innerWidth()) / 2;
    $("header nav .strange-collapse").css({
      width: `${$("nav .container").innerWidth()}`,
      left: strangeCollapse,
    });
  });
  //slide links
  $(".menu-icon").click(function () {
    $(".links").slideToggle();
  });
  //make navigation sticky;
  $(window).on("scroll", function () {
    if ($(window).scrollTop() < 255 && $(window).scrollTop() > 100) {
      $("header").css("transform", "translateY(-100%)");
    } else {
      $("header").css("transition", "0s ease 0s");
      $("header").css("transform", "translateY(0)");
    }
    if ($(window).scrollTop() >= 255) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
    }
  });
  //show and hide scroll button
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 385) {
      $("#scroll-top").fadeIn();
    } else {
      $("#scroll-top").fadeOut();
    }
  });
  //scroll to top
  $("#scroll-top").click(function () {
    $("html").animate(
      {
        scrollTop: 0,
      },
      400
    );
  });
});
