import { useContext, useState } from "react";
import { CartContext } from "../../Provider/Cart";
import { FiTrash2 } from 'react-icons/fi';
import "../../Assets/Styles/Css/cart.css";

const Cart = () => {
    const { cartProducts, removecart } = useContext(CartContext);

    return (
        <div className="container--cart">
            {cartProducts.length > 0 ? (
                cartProducts.map((el, index) => {
                    const { name, genus, family } = el
                    return (
                        <ul key={index} className="list--cart">
                            <li className="cart-info">
                                <span>Nome</span>
                                <p>{name}</p>
                            </li>
                            <li className="cart-info">
                                <span>Gênero</span>
                                <p>{genus}</p>
                            </li>
                            <li className="cart-info">
                                <span>Família</span>
                                <p>{family}</p>
                            </li>
                            <li>
                                <button className="cart-btn-delete" onClick={() => removecart(index)}>
                                    <p>
                                        <FiTrash2 />
                                    </p>
                                </button>
                            </li>
                        </ul>
                    )
                })
            ):(
                <h2>Sem itens no carrinho</h2>
            )}
        </div>
    )
}
export default Cart