import axios from "axios";
const URL = 'http://localhost:8000';

export const addUser = async (data) =>{
    try{
        return await axios.post(`${URL}/add`, data)
    }catch(error){
        console.log("Error While Calling API", error);
    }
}

export const getUsers = async() =>{
    try{
        return await axios.get(`${URL}/all`);
    }catch(error){
        console.log('Error While Fetching Data', error);
    }
}

export const getUsersdata = async(data) =>{
    try{
        return await axios.post(`${URL}/getUser`,data);
    }catch(error){
        console.log('Error While Fetching Data', error);
    }
}
export const updateUsers = async(data) =>{
    try{
        return await axios.post(`${URL}/updateUser`,data);
    }catch(error){
        console.log('Error While Fetching Data', error);
    }
}
export const deleteUsers = async(data) =>{
    try{
        return await axios.post(`${URL}/deleteUser`,data);
    }catch(error){
        console.log('Error While Fetching Data', error);
    }
}