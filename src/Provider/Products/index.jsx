import { createContext, useEffect, useState } from "react";
import api from "../../services/api";

export const ProductsContext = createContext([]);

export const ProdutcsProvider = ({ children }) => {
    const [productsAll, setProdutcsAll] = useState([]);

    const loadProductsAll = () => {
        api.get(`/all`)
            .then((res) => setProdutcsAll(res.data))
            .catch((err) => console.log(err))

    }
    useEffect(() => {
        loadProductsAll()
    }, [])
    
    return (
        <ProductsContext.Provider value={{productsAll}}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProdutcsProvider