import axios from "axios";
// axios.defaults.withCredentials = true;

const api = axios.create({
    baseURL:"https://cors-fruits.herokuapp.com/https://www.fruityvice.com/api/fruit"
})

export default api