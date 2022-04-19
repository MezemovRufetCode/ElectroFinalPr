let addToCart = document.querySelectorAll(".addcartBtn");
if (localStorage.getItem("basket") == null) {
  localStorage.setItem("basket", []);
}
