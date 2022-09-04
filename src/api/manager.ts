import axios from "axios";
import { Manager } from "../models/manager.model";

export const createManager = async (manager:Manager) => {

    try {
        const res= await axios.post(`http://localhost:3333/manager`,manager);
        return res.data;
    } catch (error) {
        console.error(error);
    }

}