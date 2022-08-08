import Body from "../../Components/Body"
import Header from "../../Components/Header"
import { motion } from "framer-motion"

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}>
            <Header />
            <Body />
        </motion.div>
    )
}
export default Home