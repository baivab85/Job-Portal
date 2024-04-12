import axios from "axios";
const URL = 'http://localhost:8000';

export const addUser = async (data) =>{
    try{
        return await axios.post(`${URL}/addd`, data)
    }catch(error){
        console.log("Error While Calling API", error);
    }
}
export const loginUser = async (userData) => {
    try {
        const response = await axios.post(`${URL}/login`, userData);
        return response;
    } catch (error) {
        throw error;
    }
}
export const logoutUser = async () => {
    try {
        const response = await axios.post(`${URL}/logout`);
        return response.data;
    } catch (error) {
        console.error("Error while calling logoutUser API", error);
        throw error;
    }
};

export const getAllUsers = async () => {
    try {
        const response = await axios.get(`${URL}/users`);
        return response;
    } catch (error) {
        throw error;
    }
};