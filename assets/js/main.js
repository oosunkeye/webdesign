/*
 * Project Name : WebDesign - Web Services Website
 * Designed & Coded By : David Osunkeye
 */

$(window).on("load", function () {
  $("#preloader").fadeOut(1e3);
}),
  $(document).ready(function () {
    "use strict";
    const e = $(window).scrollTop(),
      o = $("html, body"),
      t = $(".navbar"),
      s = $("#goTop"),
      i = $("#modal");
    $(window).on("scroll", function () {
      const e = $(this).scrollTop();
      e > 100 ? t.addClass("sticky") : t.removeClass("sticky"),
        e > 1e3 ? s.addClass("popped") : s.removeClass("popped");
    });
    new bootstrap.ScrollSpy(document.body, { target: ".navbar", offset: 100 });
    function l(e) {
      o.animate({ scrollTop: $(e).offset().top }, "fast");
    }
    e > 100 ? t.addClass("sticky") : t.removeClass("sticky"),
      e > 1e3 ? s.addClass("popped") : s.removeClass("popped"),
      s.click(function () {
        return o.animate({ scrollTop: 0 }, "fast"), !1;
      }),
      $(".hero_btn").click(function () {
        return l("#services"), !1;
      }),
      $(".about_btn").click(function () {
        return l("#deal"), !1;
      }),
      $(".services_btn").click(function () {
        return l("#faq"), !1;
      }),
      $(".price_btn").click(function () {
        $(this)
          .parent()
          .siblings()
          .children(".price_btn")
          .text("Select Plan")
          .removeClass("selected"),
          $(this).text("Selected").addClass("selected");
      }),
      $(".contact_btn").click(function (e) {
        e.preventDefault(), o.addClass("overflow_hide"), i.addClass("show");
      }),
      $(".close_btn").click(function () {
        o.removeClass("overflow_hide"), i.removeClass("show");
      }),
      $(".contact_form").on("submit", function () {
        alert("Your Message has been send successfully."), location.reload();
      });
    new Swiper(".services_swiper", {
      effect: "coverflow",
      grabCursor: !0,
      speed: 600,
      loop: !0,
      loopedSlides: 5,
      centeredSlides: !0,
      slideToClickedSlide: !0,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 2,
        stretch: 0,
        depth: 16.6,
        modifier: 10,
        slideShadows: !1,
      },
      autoplay: { delay: 3e3, disableOnInteraction: !1 },
      pagination: { el: ".services_swiper .swiper-pagination", clickable: !0 },
      keyboard: { enabled: !0, onlyInViewport: !1 },
      mousewheel: { invert: !1, releaseOnEdges: !0 },
    }),
      new Swiper(".testi_swiper", {
        effect: "coverflow",
        grabCursor: !0,
        speed: 600,
        autoplay: !0,
        centeredSlides: !0,
        slideToClickedSlide: !0,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 5,
          slideShadows: !1,
        },
        autoplay: { delay: 3e3, disableOnInteraction: !1 },
        pagination: { el: ".testi_swiper .swiper-pagination", clickable: !0 },
        keyboard: { enabled: !0, onlyInViewport: !1 },
      });
    const a = document.querySelector(".project_wrapper");
    VanillaTilt.init(a, {
      max: 2,
      reverse: !1,
      speed: 400,
      glare: !0,
      "max-glare": 0.2,
      scale: 1.04,
      perspective: 500,
      transition: !0,
      easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    });
  });
