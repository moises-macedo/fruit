import { Route, Routes as RoutePages } from "react-router-dom"

const Routes = () => {
    return (
        <RoutePages>
            <Route exact path="/" element={<>Olá mundo</>} />
        </RoutePages>
    )
}
export default Routes