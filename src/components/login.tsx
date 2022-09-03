import React, { useContext, useRef, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { auth } from '../firebaseSetup';
import { AuthContext } from '../context/AuthContext';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import '../styles/login.css'
import { add } from '../api/user';
import { eRole, User } from '../models/user.model';
export default function Login() {
    const user = useContext(AuthContext);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");


    const createAccount = async () => {
        try {
            await auth.createUserWithEmailAndPassword(
                email,
                password
            );
        } catch (error) {
            alert(error)
            console.error(error);
        }
        try{
            let u:User={
                role:eRole.admin,
                firstName:firstName,
                lastName:lastName,
                email:email,
                phone:phone
            };
            const user=await add(u);
            alert(JSON.stringify(user))
        }
        catch (error) {
            alert(error)
            console.error(error);
        }
    };

    const signIn = async () => {
        try {
            await auth.signInWithEmailAndPassword(
                email, password
            );
        } catch (error) {
            alert(error)
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
                // <Grid container justifyContent="center" spacing={{ xs: 2, md: 3 }} >
                <div className="conteiner">
                    <div className="section">
                        <TextField id="outlined-basic" label="email" variant="outlined" required value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        <br />
                        <TextField id="outlined-basic" label="password" variant="outlined" required value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                        <br />
                        <TextField id="outlined-basic" label="phone" variant="outlined" required value={phone}
                            onChange={(e) => setPhone(e.target.value)} />
                        <br />
                        <TextField id="outlined-basic" label="first name" variant="outlined" required value={firstName}
                            onChange={(e) => setFirstName(e.target.value)} />
                        <br />
                        <TextField id="outlined-basic" label="last name" variant="outlined" required value={lastName}
                            onChange={(e) => setLastName(e.target.value)} />
                        <br />

                        <Button variant="contained" onClick={createAccount}>Sign Up</Button>
                    </div>
                    <div className="section">
                        <TextField  className="item" id="outlined-basic" label="email" variant="outlined" required value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        <br />
                        <TextField className="item" id="outlined-basic" label="password" variant="outlined" required value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                        <br />

                        <Button variant="contained" onClick={signIn}>Sign In</Button>
                    </div>
                    {/* sx={{
                  height: 140,
                  width: 100,
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
              /> */}
                    {/* </Grid> */}


                </div> : (
                    <h2 >Welcome {user.email}</h2>
                )
            }
        </div >
    )
}
