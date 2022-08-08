import ButtonCleanCart from "../../Components/ButtonCleanCart"
import { motion } from "framer-motion"
import Cart from "../../Components/Cart"
import Header from "../../Components/Header"

const CartItems = () => {
    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0, transition: { duration: 0.1 } }}>
            <Header />
            <ButtonCleanCart />
            <Cart />
        </motion.div>
    )
}
export default CartItems