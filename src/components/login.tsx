/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { get } from '../api/user'
const Login: React.FC = () => {
    const [userName, setUserName] = useState([]);

    useEffect( () => {
        debugger
        // const { data }= await get<User[]>();
           get()?.then((users)=>
            setUserName(users))
    }, [])
    return (
        <div>
            <h1>hello to: {userName}</h1>
        </div>
    )
}
export default Login;