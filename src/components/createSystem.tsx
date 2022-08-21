import React, { useState } from 'react';
import { System } from '../models/system.model';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
import { createSystem } from '../api/system';
import { Button, TextField } from '@mui/material';
import {  useNavigate } from 'react-router-dom';

export default function CreateSystem() {
  const navigate = useNavigate();

  const [topic, setTopic] = useState('');
  const [objectName, setObjectName] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [ownerId, setOwnerId] = useState('');
  const [urlName, setUrlName] = useState('');
  const [logoUrl, setLogoUrl] = useState('');


  const addSystem = async () => {
    const sys: System = {
      topic,
      objectName,
      ownerId,
      description,
      email,  
      phone,
      urlName,
      logoUrl
    }
    console.log(sys);
    let result = await createSystem(sys);
    console.log(result);
    navigate('/systems');
  }

  return (
    <form className='auth-inner' 
    // onSubmit={addSystem}
    
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
      <div className="mb-3">
      <TextField id="outlined-basic" label="enter logo url" variant="outlined" onChange={(e) => setLogoUrl(e.target.value)}></TextField>
      </div>
      <div className="d-grid">
        {/* <Button variant="outlined" type="submit">Submit</Button> */}
        <Button variant="outlined" onClick={addSystem}>Submit</Button>
      </div>
    </form>
  );
}
