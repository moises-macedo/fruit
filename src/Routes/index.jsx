import { Route, Routes as RoutePages } from "react-router-dom";
import ButtonCleanCart from "../Components/ButtonCleanCart";
import Cart from "../Components/Cart";
import Home from "../Pages/Home";

const Routes = () => {
    return (
        <RoutePages>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/carrinho" element={
                <>
                    <ButtonCleanCart />
                    <Cart />
                </>
            } />
        </RoutePages>
    )
}
export default Routes