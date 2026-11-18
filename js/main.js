$(function () {
  "use strict";

    /*faq shuffle*/
    $(".faq .faq-main #faq-card").hide();
    $(".faq1").fadeIn(800);
  $(".faq .faq-list ul li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(".faq .faq-main #faq-card").hide();
    $($(this).data("class")).fadeIn(800);
  });
    // $(".faq .btn").on("click", function () {
    //     $(".faq .faq-main .card .collapse.show")
    //       .prev(".card .card-header")
    //       .addClass("highlight")
    //       .siblings()
    //       .removeClass("highlight");
    // });
    $(".card-header button").each(() => {
    if (".card-header button .collapsed") {
      $(".card-header button i").addClass("fa-plus");
    } else {
      $(".card-header button i").addClass("fa-minus");
    }
});
    
});

/*TODO: scroll top*/

$(document).ready(() => {
    let topBtn = $(".btn-top");
    topBtn.hide();
    $(window).scroll(() => {
        $(this).scrollTop() >= 700 ? topBtn.fadeIn() : topBtn.fadeOut();
    });
    topBtn.click(() => {
        $("html , body").animate({ scrollTop:0 }, 400);
  });

});

/*active navbar link*/

var addClassOnScroll = function () {
  var windowTop = $(window).scrollTop();
  $("section[id]").each(function (index, elem) {
    var offsetTop = $(elem).offset().top;
    var outerHeight = $(this).outerHeight(true);

    if (windowTop > offsetTop - 50 && windowTop < offsetTop + outerHeight) {
      var elemId = $(elem).attr("id");
      $("nav .navbar-collapse ul li a.active").removeClass("active");
      $("nav .navbar-collapse ul li a[href='#" + elemId + "']").addClass(
        "active"
      );
    }
  });
};

$(function () {
  $(window).on("scroll", function () {
    addClassOnScroll();
  });
});

$(".navbar-toggler").on("click", () => {
  $(".m-menu").fadeIn(200, "swing");
});

$(".m-menu i").on("click", () => {
  $(".m-menu").fadeOut(200, "swing");
});

