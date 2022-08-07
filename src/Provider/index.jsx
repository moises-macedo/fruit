import ProdutcsProvider from "./Products"

const Provider = ({ children }) => {
    return (
        <ProdutcsProvider>
            {children}
        </ProdutcsProvider>
    )
}
export default Provider