$(document).ready(function () {
  //--------Category menu open close starting-------
  $(".categories .headofCat").click(function () {
    $(this).toggleClass("active");
    $(".categories .Menu").toggleClass("deactive");
  });
  //--------Category menu open close ending-------

  // -----------------Starting Owl Carousel--------
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

  $(document).ready(function () {
    $("#shoplistBannerfourth .owl-carousel").owlCarousel({
      items: 6,
      nav: true,
      navText: [
        "<i class='fa-solid fa-chevron-left'></i>",
        "<i class='fa-solid fa-chevron-right'></i>",
      ],
      dots: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 2,
          nav: true,
        },
        768: {
          items: 4,
          nav: true,
        },
        992: {
          items: 6,
          nav: false,
        },
        1200: {
          items: 6,
          nav: true,
          loop: false,
        },
      },
    });
  });
  //-----------Ending owl Caorousel-------------

  //--------------Starting Shoplist FirstBanner Tab
  let category = document.querySelectorAll(
    "#shoplistBannerfirst .productsCat .category"
  );
  let catContent = document.querySelectorAll(
    "#shoplistBannerfirst .content .all"
  );

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
        catContent[i].classList.add("activeB1Content");
      } else catContent[i].classList.remove("activeB1Content");
    }
  }
  function changeActive(activeitem) {
    for (let i = 0; i < category.length; i++) {
      category[i].classList.remove("activeB1CatName");
    }
    activeitem.classList.add("activeB1CatName");
  }
  //--------------Ending Shoplist FirstBanner Tab

  //--------------Starting Shoplist SecondBanner Tab
  let category2 = document.querySelectorAll(
    "#shoplistBannersecond .productsCat .category"
  );
  let catContent2 = document.querySelectorAll(
    "#shoplistBannersecond .content .all"
  );
  console.log(catContent2);

  for (let i = 0; i < category2.length; i++) {
    category2[i].addEventListener(
      "click",
      filterContents2.bind(this, category2[i])
    );
  }

  function filterContents2(item2) {
    changeActive2(item2);
    for (let i = 0; i < catContent2.length; i++) {
      if (catContent2[i].classList.contains(item2.attributes.id.value)) {
        catContent2[i].classList.add("activeB2Content");
      } else catContent2[i].classList.remove("activeB2Content");
    }
  }
  function changeActive2(activeitem2) {
    for (let i = 0; i < category2.length; i++) {
      category2[i].classList.remove("activeB2catName");
    }
    activeitem2.classList.add("activeB2catName");
  }
  //--------------Ending Shoplist SecondBanner Tab
});
