import { Route, Routes as RoutePages } from "react-router-dom"
import Cards from "../Components/Cards"
import Header from "../Components/Header"

const Routes = () => {
    return (
        <RoutePages>
            <Route exact path="/" element={<Header />} />
        </RoutePages>
    )
}
export default Routes