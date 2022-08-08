import { useContext } from "react";
import { ProductsContext } from "../../Provider/Products";
import Cards from "../Cards";
import "../../Assets/Styles/Css/body.css"

const Body = () => {
    const { productsAll } = useContext(ProductsContext);
    console.log(productsAll)
    
    return (
        <main className="container--body">
            <div className="body-img">
                <h3>Todas as Frutas</h3>
            </div>
            <Cards card={productsAll} />
        </main>
    )
}
export default Body 