$(document).ready(function () {
  // Details Page Quantity
  $(document).ready(function () {
    //quantity2
    var valueCount;
    document
      .querySelector(".quantity2 .qty-down2")
      .setAttribute("disabled", "disabled");
    document
      .querySelector(".quantity2 .qty-up2")
      .addEventListener("click", function () {
        valueCount = document.getElementById("quantity2").value;
        valueCount++;
        document.getElementById("quantity2").value = valueCount;
        if (valueCount > 1) {
          document.querySelector(".qty-down2").removeAttribute("disabled");
          document.querySelector(".qty-down2").classList.remove("disabled");
        }
      });
    document.querySelector(".qty-down2").addEventListener("click", function () {
      valueCount = document.getElementById("quantity2").value;
      valueCount--;
      document.getElementById("quantity2").value = valueCount;
      if (valueCount == 1) {
        document
          .querySelector(".qty-down2")
          .setAttribute("disabled", "disabled");
      }
    });
  });
  //   --Ending quantity-
});
