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

    system: System | any = null;
    systems: System[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    async getSystems(): Promise<System[]> {
        this.systems = await getSystems();
        return this.systems;
    }

    async getSystemById(id: string): Promise<System> {
        this.system = await getSystemById(id)
        return this.system;
    }

    async getSystemsByUrlName(urlName: string): Promise<System> {
        this.system = await getSystemsByUrlName(urlName);
        return this.system;
    }

    async createSystem(system: System): Promise<System> {
        this.systems.push(system);
        return await createSystem(system);
    }

    async updateSystem(id: string, s: System): Promise<System[]> {
        await updateSystem(id, s);
        this.systems = await getSystems();
        return this.systems.filter((system) => system._id === id);
    }

    async deleteSystem(id: string): Promise<System[]> {
        await deleteSystem(id);
        this.systems = await getSystems();
        return this.systems;
    }

}
const systemStore = new Store();
export default systemStore;
