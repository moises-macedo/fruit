import { Route, Routes as RoutePages } from "react-router-dom"
import Body from "../Components/Body"
import Cards from "../Components/Cards"
import Header from "../Components/Header"

const Routes = () => {
    return (
        <RoutePages>
            <Route exact path="/" element={<Body />} />
        </RoutePages>
    )
}
export default Routes