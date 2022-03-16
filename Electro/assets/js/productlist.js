$(document).ready(function () {
  //sol filterin elementlerinin gorunub gorunmemesi
  $(".mylist .filters .filterelement").hide();
  $(".filtername").click(function () {
    $(this).find(".Icon").toggleClass("zerodeg udeg");
    $(this).next(".filterelement").slideToggle(200);
  });
  // ----------

  //filterin gorunub gorunmemesi
  $("#productlistPage .sortingFilter .filterName").click(function () {
    $("#productlistPage .sortingFilter .sortList").toggleClass(
      "sortListActive"
    );
  });
  // ------------

  //gorunus modlari deyismek
  var allmods = document.querySelectorAll(
    "#productlistPage .settingsforProducts .lookingProducts span"
  );
  $("#productlistPage .settingsforProducts .lookingProducts span").click(
    function () {
      for (let i = 0; i < allmods.length; i++) {
        allmods[i].classList.remove("activelooking");
      }
      this.classList.add("activelooking");
    }
  );
  // --------------

  var productWrapper = document.querySelectorAll(
    ".productlistpageRightside .productWrapper"
  );
  $("#productlistPage .settingsforProducts .lookingProducts span").click(
    function () {
      var text = $(this).attr("data-grid");
      if (text == "grid-4") {
        for (i = 0; i <= productWrapper.length; i++) {
          productWrapper[i].classList.remove("col-lg-4");
          productWrapper[i].classList.remove("col-lg-12");
          productWrapper[i].classList.remove("listmode");
          productWrapper[i].classList.add("col-lg-3");
        }
      }
      if (text == "grid-3") {
        for (i = 0; i <= productWrapper.length; i++) {
          productWrapper[i].classList.remove("col-lg-12");
          productWrapper[i].classList.remove("col-lg-3");
          productWrapper[i].classList.remove("listmode");
          productWrapper[i].classList.add("col-lg-4");
        }
      }
      if (text == "grid-2") {
        for (i = 0; i <= productWrapper.length; i++) {
          productWrapper[i].classList.remove("col-lg-3");
          productWrapper[i].classList.remove("col-lg-4");
          productWrapper[i].classList.add("col-lg-12");
          productWrapper[i].classList.add("listmode");
        }
      }
      if (text == "grid-1") {
        for (i = 0; i <= productWrapper.length; i++) {
          productWrapper[i].classList.remove("col-lg-3");
          productWrapper[i].classList.remove("col-lg-4");
          productWrapper[i].classList.add("col-lg-12 listmode");
        }
      }
    }
  );
});
