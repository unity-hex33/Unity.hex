function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

const stockStatus = {
  mk1: "In Stock",
  mk1a: "Out of Stock",
  mk1a_ulr: "In Stock",
};

function updateStock() {
  const mk1 = document.getElementById("mk1-stock");
  const mk1a = document.getElementById("mk1a-stock");
  const mk1a_ulr = document.getElementById("mk1a-ulr-stock");

  if (mk1) mk1.innerText = stockStatus.mk1;
  if (mk1a) mk1a.innerText = stockStatus.mk1a;
  if (mk1a_ulr) mk1a_ulr.innerText = stockStatus.mk1a_ulr;
}

updateStock();

function addToCart(item) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(item + " added to cart.");
}

function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const list = document.getElementById("cart-items");
  if (!list) return;

  list.innerHTML = "";
  cart.forEach(i => {
    const li = document.createElement("li");
    li.innerText = i;
    list.appendChild(li);
  });
}

loadCart();
