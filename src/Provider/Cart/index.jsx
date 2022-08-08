import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
    const cartStorage = JSON.parse(localStorage.getItem("@cartProducts")) || [];
    const [cartProducts, setCartProducts] = useState(cartStorage)

    const addCartProducts = (products) => {
        const newProduct = [...cartProducts, products];
        setCartProducts(newProduct);
        localStorage.setItem("@cartProducts", JSON.stringify(newProduct))

    }

    console.log(cartProducts)
    return (
        <CartContext.Provider value={{addCartProducts}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider