import { Route, Routes as RoutePages } from "react-router-dom"
import Cards from "../Components/Cards"

const Routes = () => {
    return (
        <RoutePages>
            <Route exact path="/" element={<Cards />} />
        </RoutePages>
    )
}
export default Routes