import axios from "axios";
import { Manager } from "../models/manager.model";
import { makeAutoObservable } from 'mobx';

export const createManager = async (manager:Manager) => {

    try {
        const res= await axios.post(`http://localhost:3333/manager`,manager);
        return res.data;
    } catch (error) {
        console.error(error);
    }

}

class Store{

    manager:Manager|any=null;
    constructor(){
        makeAutoObservable(this);
    }

    async createManager(manager:Manager){
        this.manager = await createManager(manager);
        return this.manager;
    }

}
const managerStore = new Store();
export default managerStore;
