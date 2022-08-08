import { useContext } from 'react';
import { BsHandbag } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../Provider/Cart';
import "../../Assets/Styles/Css/header.css";
import Logo from "../../Assets/Img/logo.png"

const Header = () => {
    const navigate = useNavigate();
    const { cartProducts } = useContext(CartContext)
  
    return (
        <header className='container--header'>
            <button onClick={()=> navigate("/")}
            className="header-btn">
                <img src={Logo} alt="Logo" />
                <p>Fruits</p>
            </button>
            <button className='btn-cart' onClick={() => navigate("/carrinho")}>
                <div>
                    <span className='counter-btn'> {cartProducts.length}</span>
                    <p><BsHandbag /></p>
                </div>
                <p className='btn-name'>Carrinho</p>
            </button>
        </header>
    )
}
export default Header