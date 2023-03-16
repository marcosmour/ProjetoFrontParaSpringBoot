import axios from 'axios'

const apiFetch = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Content-Type":"aplication/json"
    }
})

export default apiFetch;