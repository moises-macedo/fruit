import axios from "axios";
// axios.defaults.withCredentials = true;

const api = axios.create({
    baseURL:"http://localhost:8080/https://www.fruityvice.com/api/fruit"
})

export default api