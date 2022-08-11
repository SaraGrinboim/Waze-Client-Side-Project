import axios from 'axios';
import { User } from '../models/user.model';

export const get = () => {
    try {
        debugger
        return axios.get('http://localhost:3333/user');

    }
    catch (error) {
        console.log('error in get users', error);
    }

}

export const getById = (id: string) => {
    try {
        return axios.get('http://localhost:3333/user/'+id);

    }
    catch (error) {
        console.log('error in get user', error);
    }
}

export const update = (id: string, user: User) => {
    try {
        return axios.put('http://localhost:3333/user/'+id, user);

    }
    catch (error) {
        console.log('error in update user', error);
    }
}

export const add = (user: User) => {
    try {
        return axios.post('http://localhost:3333/user',user);

    }
    catch (error) {
        console.log('error in add user', error);
    }
}

export const deleteById = (id: string) => {
    try {
        return axios.delete('http://localhost:3333/user/'+id);

    }
    catch (error) {
        console.log('error in delete user', error);
    }
}
// export get;