import { Alert, Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
import { add } from '../api/user';
import { eRole, User } from '../models/user.model';

export default function CreateSystem() {

    const [role, setRole] = useState('');
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const addUser = async () => {

        <Alert severity="success">This is a success!</Alert>
        const user: User = {
            // _id:'',
            role: eRole.customer,

            firstName,
            lastName,
            email,
            phone
        }
        console.log(user);
        let result = await add(user);
        console.log(result);
    }

    const handleChange = (event: SelectChangeEvent) => {
        setRole(event.target.value);
    };

    return (
        <form className='auth-inner' onSubmit={addUser}
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
                {/* <label>role</label>
                <input
                    type="string"
                    className="form-control"
                    placeholder="Enter topic" 
                onChange={(e) => setRole<Erole>(e.target.value)}
               /> */}
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select
                        value={role}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value={'customer'}>customer</MenuItem>
                        <MenuItem value={'manager'}>manager</MenuItem>
                        <MenuItem value={'admin'}>admin</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="mb-3">
                {/* <label>first name</label>
                <input
                    type="string"
                    className="form-control"
                    placeholder="Enter objectName"
                    onChange={(e) => setfirstName(e.target.value)}
                /> */}
                <TextField id="outlined-basic" label="first name" variant="outlined" onChange={(e) => setfirstName(e.target.value)} />
            </div>
            <div className="mb-3">
                {/* <label>last name</label>
                <input
                    type="string"
                    className="form-control"
                    placeholder="Enter topic"
                    onChange={(e) => setlastName(e.target.value)}
                /> */}
                <TextField id="outlined-basic" label="last name" variant="outlined" onChange={(e) => setlastName(e.target.value)} />
            </div>
            <div className="mb-3">
                {/* <label>email</label>
                <input
                    type="string"
                    className="form-control"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                /> */}
                <TextField id="outlined-basic" label="emil address" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
                {/* <label>phone</label>
                <input
                    type="string"
                    className="form-control"
                    placeholder="Enter phone"
                    onChange={(e) => setPhone(e.target.value)}
                /> */}
                <TextField id="outlined-basic" label="phone number" variant="outlined" onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className="d-grid">
                {/* <button type="submit" className="btn btn-primary">
                    Submit
                </button> */}
                <Button variant="outlined" type="submit">Submit</Button>
            </div>
        </form>
    );
}

