import { useContext } from "react";
import { CartContext } from "../../Provider/Cart";
import"../../Assets/Styles/Css/buttonCleanCart.css";

const ButtonCleanCart = () => {
    const { cartProducts, cleanCart } = useContext(CartContext);
    return (
        <div className="container--buttonCleanCart">
            <button onClick={cleanCart}
            className="buttonCleanCart-btnDelete">
                <p>Limpar carrinho</p>
            </button>
            <div className="buttonCleanCart-size">
                <span>Qtd.</span>
                <p>{cartProducts.length}</p>
            </div>
        </div>
    )
}
export default ButtonCleanCart