import axios from 'axios';
import { User } from '../models/user.model';
import { makeAutoObservable } from 'mobx'

export const get = async () => {
    try {
        const users = await axios.get(`http://localhost:3333/user`);
        return users.data;
    }
    catch (error) {
        console.log('error in get users', error);
    }

}

export const getById = async (id: string) => {
    try {
        const user = await axios.get(`http://localhost:3333/user/${id}`);
        return user.data;
    }
    catch (error) {
        console.log('error in get user', error);
    }
}

export const update = async (id: string, user: User) => {
    try {
        return await axios.put(`http://localhost:3333/user/${id}`, user);

    }
    catch (error) {
        console.log('error in update user', error);
    }
}

export const add = async (user: User) => {
    try {
        return await axios.post(`http://localhost:3333/user`, user);
    }
    catch (error) {
        console.log('error in add user', error);
    }
}

export const deleteById = async (id: string) => {
    try {
        return await axios.delete(`http://localhost:3333/user/${id}`);

    }
    catch (error) {
        console.log('error in delete user', error);
    }
}

class Store {

    user: User | any = null;
    users: User[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    async get():Promise<User[]> {
        this.users = await get();
        return this.users;
    }

    async getById(id: string): Promise<User>{
        this.user = await getById(id);
        return this.user;
    }

    async add(user: User): Promise<User>{
        await add(user);
        this.users = await this.get();
        return this.user;
    }

    async deleteById(id: string):Promise<void> {
        await deleteById(id);
    }
}
const UserStore = new Store();
export default UserStore;