import axios from 'axios';
import {System } from '../models/system.model';

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
        return system.data;
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
        return axios.post(`http://localhost:3333/system`, system)
    } catch (error) {
        console.error(error);
    }

}

export const updateSystem = async (id: string, system: System) => {

    try {
        return axios.put(`http://localhost:3333/system/${id}`, system)
    } catch (error) {
        console.error(error);
    }

}

export const deleteSystem = async (id: string) => {

    try {
        return axios.delete(`http://localhost:3333/system/${id}`)
    } catch (error) {
        console.error(error);
    }

}
