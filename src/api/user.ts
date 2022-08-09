import axios from 'axios';
import { User } from '../models/user.model';

export const get = async () => {
    try {
        const users = await axios.get(`http://localhost:3000/user`);
        return users.data;
    }
    catch (error) {
        console.log('error in get users', error);
    }

}

export const getById = async (id: string) => {
    try {
        const user = await axios.get(`http://localhost:3000/user/${id}`);
        return user.data;
    }
    catch (error) {
        console.log('error in get user', error);
    }
}

export const update = (id: string, user: User) => {
    try {
        return axios.put(`http://localhost:3000/user/${id}`, user);

    }
    catch (error) {
        console.log('error in update user', error);
    }
}

export const add = (user: User) => {
    try {
        return axios.post(`http://localhost:3000/user`, user);
    }
    catch (error) {
        console.log('error in add user', error);
    }
}

export const deleteById = (id: string) => {
    try {
        return axios.delete(`http://localhost:3000/user/${id}`);

    }
    catch (error) {
        console.log('error in delete user', error);
    }
}