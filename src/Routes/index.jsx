import { Route, Routes as RoutePages } from "react-router-dom";
import ButtonCleanCart from "../Components/ButtonCleanCart";
import Cart from "../Components/Cart";
import CartItems from "../Pages/CartItems";
import Home from "../Pages/Home";

const Routes = () => {
    return (
        <RoutePages>
            <Route exact path="/" element={<Home />} />
            <Route  path="/carrinho" element={<CartItems />} />
        </RoutePages>
    )
}
export default Routes