import { useContext } from "react"
import "../../Assets/Styles/Css/cards.css";
import { CartContext } from "../../Provider/Cart";
import ModalCard from "../ModalCard";


const Cards = ({ card }) => {

    const { addCartProducts } = useContext(CartContext)



    return (
        <section className="container--cards">
            {card.map((el) => {
                const { name, id, genus, family } = el
                return (
                    <div key={id}  className="cards-list">
                        <ul className="cards--list-unitary">
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
                        <ModalCard
                            calories={el.nutritions.calories}
                            carbohydrates={el.nutritions.carbohydrates}
                            fat={el.nutritions.fat}
                            protein={el.nutritions.protein}
                            sugar={el.nutritions.sugar} />
                    </div>


                )
            })}

        </section>
    )
}
export default Cards