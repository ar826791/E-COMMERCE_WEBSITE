import { getCartProductFromLS } from "./getCartProduct";

export const updateCartProductTotal =() => {

    const productSubTotal = document.querySelector(".productSubTotal");
    const productFinalTotal = document.querySelector(".productFinalTotal");

    let localCartProducts = getCartProductFromLS();
    let initialValue = 0;
    let totalProductPrice = localCartProducts.reduce((accum, currElem) =>{
        let ProductPrice = parseInt(currElem.price) || 0;
        return accum + ProductPrice;
    }, initialValue);

    // console.log(totalProductPrice);

    productSubTotal.innerText = `₹${totalProductPrice}`;
    productFinalTotal.textContent = `₹${totalProductPrice + 50}`;

};