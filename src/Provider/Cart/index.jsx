import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
    const cartStorage = JSON.parse(localStorage.getItem("@cartProducts")) || [];
    const [cartProducts, setCartProducts] = useState(cartStorage)

    const addCartProducts = (products) => {

        const newProduct = [...cartProducts, products];
        setCartProducts(newProduct);
        localStorage.setItem("@cartProducts", JSON.stringify(newProduct));

    }



    const removecart = (indexCart) => {
        const newCart = cartProducts.filter((el, index) => {
            return index !== indexCart
        });
        localStorage.setItem("@cartProducts", JSON.stringify(newCart));
        setCartProducts(newCart)
    }

    const cleanCart = () => {
        setCartProducts([]);
        localStorage.removeItem("@cartProducts");
    }

    return (
        <CartContext.Provider value={{ addCartProducts, cartProducts, removecart, cleanCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider