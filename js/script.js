/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */

$(document).ready(function () {
  let loketA = 0;
  let loketB = 0;

  function audioA() {
    let intro = new Audio("audio/nomor-antrian.mp3");
    let nomor = new Audio("audio/A" + loketA + ".m4a");
    let silahkan = new Audio("audio/silahkan-loket1.m4a");

    intro.play();
    intro.addEventListener("ended", function () {
      nomor.play();
      nomor.addEventListener("ended", function () {
        silahkan.play();
      });
    });
  }
  function audioB() {
    let intro = new Audio("audio/nomor-antrian.mp3");
    let nomor = new Audio("audio/B" + loketB + ".m4a");
    let silahkan = new Audio("audio/silahkan-loket2.mp3");

    intro.play();
    intro.addEventListener("ended", function () {
      nomor.play();
      nomor.addEventListener("ended", function () {
        silahkan.play();
      });
    });
  }
  function counterA() {
    loketA += 1;
    audioA();
  }
  function counterB() {
    loketB += 1;
    audioB();
  }
  function reset() {
    loketA = 0;
    loketB = 0;
  }

  $("body").on("keypress", function (event) {
    if (event.which === 97) {
      counterA();
    } else if (event.which === 98) {
      counterB();
    }

    $("#loketA").text("A-" + loketA.toString().padStart(3, "0"));
    $("#loketB").text("B-" + loketB.toString().padStart(3, "0"));
  });
})(function ($) {
  "use strict";

  // Sticky Menu
  $(window).scroll(function () {
    if ($(".navigation").offset().top > 100) {
      $(".navigation").addClass("nav-bg");
    } else {
      $(".navigation").removeClass("nav-bg");
    }
  });

  // team slider
  $(".team-slider").slick({
    dots: false,
    infinite: false,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:
      "<button type='button' class='prevArrow'><i class='ti-arrow-left'></i></button>",
    nextArrow:
      "<button type='button' class='nextArrow'><i class='ti-arrow-right'></i></button>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // clients logo slider
  $(".client-logo-slider").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // about video popup
  $(document).ready(function () {
    $(".venobox").venobox();
  });

  // animation scroll js
  var html_body = $("html, body");
  $(".page-scroll").on("click", function () {
    //use page-scroll class in any HTML tag for scrolling
    if (
      location.pathname.replace(/^\//, "") ===
        this.pathname.replace(/^\//, "") &&
      location.hostname === this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        html_body.animate(
          {
            scrollTop: target.offset().top - 50,
          },
          1500,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // easeInOutExpo Declaration
  jQuery.extend(jQuery.easing, {
    easeInOutExpo: function (x, t, b, c, d) {
      if (t === 0) {
        return b;
      }
      if (t === d) {
        return b + c;
      }
      if ((t /= d / 2) < 1) {
        return (c / 2) * Math.pow(2, 10 * (t - 1));
      }
      +b;
      return (c / 2) * (-Math.pow(2, -10 * --t) + 2) + b;
    },
  });
})(jQuery);
