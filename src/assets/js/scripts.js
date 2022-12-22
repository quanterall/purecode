(function ($) {
  var allfunction = {
    //============== Menu Icon ==============
    menu_icon: function () {
      $(".main-menu ul li").each(function () {
        if ($(this).children(".sub-menu ,.mega-menu").length) {
          $(this).children("a").append('<i class="icofont-rounded-down"></i>');
        }
      });
    },

    //=============== Menu ==============
    menu_toggle: function () {
      $(".hamburger").on("click", function (e) {
        e.stopPropagation();
        $(".main-menu").toggleClass("active");
        if ($(".main-menu").hasClass("active")) {
          $(".header-account").removeClass("active");
          $("body").addClass("overlay");
        } else {
          $("body").removeClass("overlay");
          $(".plate").removeClass("active");
        }
      });
      $(".main-menu ul li").click(function (e) {
        e.stopPropagation();
        $(this)
          .toggleClass("active")
          .children(".sub-menu ,.mega-menu")
          .toggleClass("active")
          .parent("li")
          .siblings()
          .removeClass("active")
          .children()
          .removeClass("active");
      });
    },

    // ============== Hamburger icon ==================
    hamburger_icon: function () {
      $(".plate").click(function () {
        $(this).toggleClass("active");
      });
    },

    //============= Counter Up ===============
    counter_up: function () {
      $(".odometer").appear(function (e) {
        var odo = $(".odometer");
        odo.each(function () {
          var countNumber = $(this).attr("data-count");
          $(this).html(countNumber);
        });
      });
    },

    // Count Down Clock
    countdown_clock: function () {
      // jQuery CountDown
      if ($(".countdown-clock").length) {
        $(".countdown-clock").countdown("2023/03/23", function (event) {
          $(".clock-days").html(event.strftime("%D"));
          $(".clock-hours").html(event.strftime("%H"));
          $(".clock-minutes").html(event.strftime("%M"));
          $(".clock-seconds").html(event.strftime("%S"));
        });
      }
    },

    //================ Accordion =================
    accordion: function () {
      $(".single-faq").click(function () {
        if ($(this).hasClass("active")) {
          $(this).removeClass("active").children(".faq-body").slideUp();
        } else {
          $(".faq-v1-wrapper , .faq-v2-wrapper")
            .find(".single-faq")
            .removeClass("active")
            .children(".faq-body")
            .slideUp();
          $(this).addClass("active").children(".faq-body").slideDown();
        }
      });
    },

    //============== IMG to SVG ==================
    imgToSvg: function () {
      function jetix_svg() {
        jQuery("img").each(function () {
          var jQueryimg = jQuery(this);
          var imgClass = jQueryimg.attr("class");
          var imgURL = jQueryimg.attr("src");
          jQuery.get(
            imgURL,
            function (data) {
              // Get the SVG tag, ignore the rest
              var jQuerysvg = jQuery(data).find("svg");

              // Add replaced image's classes to the new SVG
              if (typeof imgClass !== "undefined") {
                jQuerysvg = jQuerysvg.attr("class", imgClass + " replaced-svg");
              }
              jQuerysvg = jQuerysvg.removeAttr("xmlns:a");
              // Replace image with new SVG
              jQueryimg.replaceWith(jQuerysvg);
            },
            "xml"
          );
        });
      }
      $(document).each(function () {
        jetix_svg();
      });
      $("a[href=#]").click(function (e) {
        e.preventDefault();
      });
    },

    //================== StopPropagations elements =================
    stopPropagationElements: () => {
      $(
        ".main-menu, .header-account ,.search-popup-wrapper ,.single-faq"
      ).click(function (e) {
        e.stopPropagation();
      });
    },

    // ================ Document click to hide elements ==================
    elementHide: () => {
      $(document).click(function () {
        $(".header-account ,.main-menu ,.plate").removeClass("active");
        $(".overlay").removeClass("overlay");
      });
    },

    // aos_aimation
    aos_aimation: function () {
      AOS.init({
        duration: 1000,
        once: true,
      });
    },

    init: function () {
      allfunction.imgToSvg();

      allfunction.menu_icon();
      allfunction.menu_toggle();
      allfunction.hamburger_icon();
      allfunction.counter_up();
      allfunction.countdown_clock();
      allfunction.accordion();
      allfunction.aos_aimation();

      allfunction.stopPropagationElements();
      allfunction.elementHide();
    },
  };

  $(document).ready(function () {
    allfunction.init();
    window.addEventListener("load", function () {
      document.querySelector("body").classList.add("loaded");
    });
  });
})(jQuery);

anime({
  targets: "#ftr-dots path",
  scale: [
    { value: 0.1, easing: "easeOutSine", duration: 500 },
    { value: 1, easing: "easeOutSine", duration: 700 },
  ],
  delay: anime.stagger(200, { grid: [20, 50], from: "top" }),
  direction: "alternate",
  loop: true,
});
// Prelax Efect
var image = document.getElementsByClassName("thumbnail");
new simpleParallax(image, {
  delay: 0.6,
  transition: "cubic-bezier(0,0,0,1)",
});

// var image = document.getElementsByClassName("left-right");
// new simpleParallax(image, {
//   delay: 0.6,
//   orientation: "right",
// });
