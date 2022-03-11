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

  //shoplist firstBanner tabs
  let category = document.querySelectorAll(
    "#shoplistBannerfirst .productsCat .category"
  );
  let catContent = document.querySelectorAll(
    "#shoplistBannerfirst .content .all"
  );
  console.log(catContent);

  for (let i = 0; i < category.length; i++) {
    category[i].addEventListener(
      "click",
      filterContents.bind(this, category[i])
    );
  }

  function filterContents(item) {
    changeActive(item);
    for (let i = 0; i < catContent.length; i++) {
      if (catContent[i].classList.contains(item.attributes.id.value)) {
        catContent[i].classList.add("myclassTest");
      } else catContent[i].classList.remove("myclassTest");
    }
  }
  function changeActive(activeitem) {
    for (let i = 0; i < category.length; i++) {
      category[i].classList.remove("active2");
    }
    activeitem.classList.add("active2");
  }
});
