import { getCartProductFromLS } from "./getCartProduct"
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

export const removeProdFromCart = (id) => {
    let cartProducts = getCartProductFromLS();
    cartProducts = cartProducts.filter((curProd) => curProd.id !== id); //delete from local storage

    localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));

    let removeDiv = document.getElementById(`card${id}`);   
    if(removeDiv){
        removeDiv.remove();         // it removes the removed div

        showToast("delete", id);
    }

    updateCartValue(cartProducts);
}