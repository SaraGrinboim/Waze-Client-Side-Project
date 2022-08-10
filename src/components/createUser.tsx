import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
import { add } from '../api/user';
import { Erole, user } from '../models/user.model';


export default function CreateSystem() {

    const [role, setRole] = useState(Erole.customer);
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const addUser = async () => {
        const user: user = {
            _id: "",
            role,
            firstName,
            lastName,
            email,
            phone
        }
        console.log(user);
        let result = await add(user);
        console.log(result);
    }

    return (
        <form className='auth-inner'  onSubmit={addUser}
        //   component="form"
        //   sx={{
        //     '& > :not(style)': { m: 1, width: '25ch' },
        //   }}
        //   noValidate
        //   autoComplete="off"
        >
            <h3>create new system</h3>
            {/* <TextField id="outlined-basic" label="topic" variant="outlined"  className="mb-3"/>
      <TextField id="outlined-basic" label="objectName" variant="outlined" className="mb-3" /> */}
            {/* <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" /> */}
            <div className="mb-3">
                <label>role</label>
                <input
                    type="string"
                    className="form-control"
                    placeholder="Enter topic"
                    // onChange={(e) => setRole<Erole>(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label>first name</label>
                <input
                    type="string"
                    className="form-control"
                    placeholder="Enter objectName"
                    onChange={(e) => setfirstName(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label>last name</label>
                <input
                    type="string"
                    className="form-control"
                    placeholder="Enter topic"
                    onChange={(e) => setlastName(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label>email</label>
                <input
                    type="string"
                    className="form-control"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label>phone</label>
                <input
                    type="string"
                    className="form-control"
                    placeholder="Enter phone"
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>
            <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </div>
        </form>
    );
}

