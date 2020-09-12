import { getExistingFavs } from "./utils/favFunctions.js";

const favourites = getExistingFavs();

const productContainer = document.querySelector(".product-container");

if (favourites.length === 0) {
    productContainer.innerHTML = "No favourites yet";
}

favourites.forEach((favourite) => {
    productContainer.innerHTML += `<div class="product">
                                    <h4>${favourite.name}</h4>
                                    <i class="fa fa-heart"></i>
                                </div>`;
});
