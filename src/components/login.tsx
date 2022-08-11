
import React, { useContext, useRef, useState } from 'react'
// import './login.css'
// import { Link, } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { auth } from '../firebaseSetup';
import { AuthContext } from '../context/AuthContext';

export default function Login() {
    const user = useContext(AuthContext);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    // const emailRef = useRef<HTMLInputElement>(null);
    // const passwordRef = useRef<HTMLInputElement>(null);

    const createAccount = async () => {
        // const email = emailRef.current!.value
        // const password = passwordRef.current!.value
        try {
            await auth.createUserWithEmailAndPassword(
                email,
                password

            );
        } catch (error) {
            console.error(error);
        }
    };

    const signIn = async () => {
        // const email = emailRef.current!.value
        // const password = passwordRef.current!.value
        try {
            await auth.signInWithEmailAndPassword(
                email, password
            );
        } catch (error) {
            console.error(error);
        }
    };

    const signOut = async () => {
        await auth.signOut();
    };


    return (
        <div>
            <header>
                <h2>Firebase Authentication</h2><br />
                {user && <Button variant="outlined" onClick={signOut}>Sign Out</Button>}
            </header>
            {!user ?
                <>
                    <TextField id="outlined-basic" label="email" variant="outlined" required value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <br />
                    <TextField id="outlined-basic" label="password" variant="outlined" required value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <br />
                    <Button variant="contained" onClick={signIn}>Sign In</Button>
                    <Button variant="contained" onClick={createAccount}>Sign Up</Button>
                </>
                : (
                    <h2 >Welcome {user.email}</h2>
                )}

        </div>

    )
}

// /* eslint-disable react-hooks/exhaustive-deps */
// import React, { useEffect, useState } from 'react';
// import { get } from '../api/user'
// const Login: React.FC = () => {
//     const [userName, setUserName] = useState('');

//     useEffect( () => {
//         debugger
//         // const { data }= await get<User[]>();
//            get()?.then((users:any)=>
//             setUserName(users.data))
//     }, [])
//     return (
//         <div>
//             <h1>hello to {userName}</h1>
//         </div>
//     )
// }
// export default Login;