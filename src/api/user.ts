import axios, { AxiosResponse } from 'axios';
import { User } from '../models/user.model';

export const get = () => {
    try {
        debugger
        return axios.get('http://localhost:3333/user');

    }
    catch (error) {
        console.log('error in get user', error);
    }

}
// export get;