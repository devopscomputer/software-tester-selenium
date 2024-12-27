import axios from "axios";

const BASE_URL = "https://api.exemplo.com";

export const fetchTestCases = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/test-cases`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar casos de teste:", error);
        throw error;
    }
};
