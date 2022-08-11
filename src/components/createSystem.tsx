import React, { useState } from 'react';
import { system } from '../models/system.model';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
import { createSystem } from '../api/system';
import { Button, TextField } from '@mui/material';


export default function CreateSystem() {

  const [topic, setTopic] = useState('');
  const [objectName, setObjectName] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [ownerId, setOwnerId] = useState('');
  const [urlName, setUrlName] = useState('');



  const addSystem = async () => {
    const sys: system = {
      topic,
      objectName,
      ownerId,
      description,
      email,
      
      phone,
      urlName
    }
    console.log(sys);
    let result = await createSystem(sys);
    console.log(result);
  }

  return (
    <form className='auth-inner' onSubmit={addSystem}
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
        <TextField id="outlined-basic" label="enter topic" variant="outlined" onChange={(e) => setTopic(e.target.value)}></TextField>
      </div>
      <div className="mb-3">
      <TextField id="outlined-basic" label="enter objectName" variant="outlined" onChange={(e) => setObjectName(e.target.value)}></TextField>
      </div>
      <div className="mb-3">
      <TextField id="outlined-basic" label="enter ownerId" variant="outlined" onChange={(e) => setOwnerId(e.target.value)}></TextField>
      </div>
      <div className="mb-3">
      <TextField id="outlined-basic" label="enter description" variant="outlined" onChange={(e) => setDescription(e.target.value)}></TextField>
      </div>
      <div className="mb-3">
      <TextField id="outlined-basic" label="enter email address" variant="outlined" onChange={(e) => setEmail(e.target.value)}></TextField>
      </div>
      <div className="mb-3">
      <TextField id="outlined-basic" label="enter phone number" variant="outlined" onChange={(e) => setPhone(e.target.value)}></TextField>
      </div>
      <div className="mb-3">
      <TextField id="outlined-basic" label="enter urlName" variant="outlined" onChange={(e) => setUrlName(e.target.value)}></TextField>
      </div>
      <div className="d-grid">
        <Button variant="outlined" type="submit">Submit</Button>
      </div>
    </form>
  );
}
