import products from "../js/date.js";
import template from "../src/template.hbs";

const container = document.querySelector("#root");
container.innerHTML = template({ products });

const searchInput = document.createElement("input");
searchInput.setAttribute("type", "text");
searchInput.setAttribute("placeholder", "Search products...");
document.body.prepend(searchInput);

searchInput.addEventListener("input", () => {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchInput.value.toLowerCase())
  );
  container.innerHTML = template({ products: filteredProducts });
});
