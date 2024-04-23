import products from "./api/products.json";
import { getCartProductFromLS } from "./getCartProduct";
import {fetchQuantityFromCartLS} from "./fetchQuantityFromCartLS";
import { removeProdFromCart } from "./removeProdFromCart";
import {incrementDecrement} from "./incrementDecrement";
import { updateCartProductTotal } from "./updateCartProductTotal";

let cartProducts = getCartProductFromLS();

let filterProducts = products.filter((curProd) => {
    return cartProducts.some((currElem) => currElem.id === curProd.id);
    // console.log(curProd.id);

});
console.log(filterProducts);



const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

const showCartProduct = () => {
    filterProducts.forEach((curProd) => {
        const { category, id, image, name, stock, price } = curProd;

        let productClone = document.importNode(templateContainer.content, true);

        let lSActualData = fetchQuantityFromCartLS(id, price);

        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src = image;
        
        productClone.querySelector(".productQuantity").textContent = lSActualData.quantity;
        productClone.querySelector(".productPrice").textContent =lSActualData.price;

        productClone.querySelector(".remove-to-cart-button").addEventListener("click", () => removeProdFromCart(id));

        // handle increment and decrement button
        productClone.querySelector(".stockElement").addEventListener("click", (event) => {
            incrementDecrement(event, id, stock, price);
        });


        cartElement.append(productClone);


    })
};

showCartProduct();

// calculating card total in cartProduct page
updateCartProductTotal();




