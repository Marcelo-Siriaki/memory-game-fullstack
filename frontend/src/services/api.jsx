import axios from "axios";

const instanceAxios = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        // Adicione os seguintes cabeçalhos para lidar com preflight, problemas de cors
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
});

export default instanceAxios;