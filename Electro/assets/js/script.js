$(document).ready(function () {
  $(".categories .headofCat").click(function () {
    $(this).toggleClass("active");
    $(".categories .Menu").toggleClass("deactive");
  });

  //owl carousel
  $(document).ready(function () {
    $("#Intro .owl-carousel").owlCarousel({
      items: 1,
      nav: true,
      loop: true,
      navText: [
        "<i class='fa-solid fa-chevron-left'></i>",
        "<i class='fa-solid fa-chevron-right'></i>",
      ],
      dots: true,
    });
  });
});
