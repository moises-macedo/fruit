import CartProvider from "./Cart"
import ProdutcsProvider from "./Products"

const Provider = ({ children }) => {
    return (
        <ProdutcsProvider>
            <CartProvider>
                {children}
            </CartProvider>
        </ProdutcsProvider>
    )
}
export default Provider