import axios from 'axios';
import { System } from '../models/system.model';
import { makeAutoObservable } from 'mobx';

export const getSystems = async () => {

    try {
        const systems = await axios.get(`http://localhost:3333/system`)
        return systems.data;
    } catch (error) {
        console.error(error);
    }

}

export const getSystemById = async (id: string) => {

    try {
        const system = await axios.get(`http://localhost:3333/system/${id}`)
        return await system.data;
    } catch (error) {
        console.error(error);
    }

}


export const getSystemsByUrlName = async (urlName: string) => {

    try {
        const system = await axios.get(`http://localhost:3333/system/getSystemByUrlName/${urlName}`)
        return system.data;
    } catch (error) {
        console.error(error);
    }

}

export const createSystem = async (system: System) => {

    try {
        const result = await axios.post(`http://localhost:3333/system`, system)
        return result.data;
    } catch (error) {
        console.error(error);
    }

}

export const updateSystem = async (id: string, system: System) => {

    try {
        const result = await axios.put(`http://localhost:3333/system/${id}`, system)
        return result.data;
    } catch (error) {
        console.error(error);
    }

}

export const deleteSystem = async (id: string) => {

    try {
        console.log("delete system", id);
        return await axios.delete(`http://localhost:3333/system/${id}`)
    } catch (error) {
        console.error(error);
    }

}

class Store {

    // id: string = "";
    system: any = null;
    systems: System[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    async getSystems() {
        this.systems = await getSystems();
    }

    async getSystemById(id: string) {
        this.system = await getSystemById(id)
    }

    async getSystemsByUrlName(urlName: string) {
        this.system = await getSystemsByUrlName(urlName);
    }

    async createSystem(system: System) {
        this.systems.push(system);
        return await createSystem(system);
    }

    async updateSystem(id: string, s: System) {
        await updateSystem(id, s);
        this.systems = await getSystems(); 
        return this.systems.filter((system) => system._id===id);   
    }

    async deleteSystem(id: string) {
        await deleteSystem(id);
        this.systems = await getSystems(); 
        console.log("after delete system"+this.systems);
        return this.systems   
    }

}
const systemStore = new Store();
export default systemStore;