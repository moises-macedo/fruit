import { useContext } from "react"
import "../../Assets/Styles/Css/cards.css";
import { CartContext } from "../../Provider/Cart";


const Cards = ({ card }) => {

    const { addCartProducts } = useContext(CartContext)


    return (
        <section className="container--cards">
            {card.map((el) => {
                const { name, id, genus, family } = el
                return (
                    <ul key={id} className="cards--list-unitary">
                        <li className="list-unitary">
                            <span>Nome:</span>
                            <p>{name}</p>
                        </li>
                        <li className="list-unitary">
                            <span>Gênero:</span>
                            <p>{genus}</p>
                        </li>
                        <li className="list-unitary">
                            <span>Família:</span>
                            <p>{family}</p>
                        </li>
                        <li className="list-btn">
                            <button onClick={() => addCartProducts(el)}>
                                <p>Adicionar</p>
                            </button>
                        </li>                       
                    </ul>

                )
            })}

        </section>
    )
}
export default Cards