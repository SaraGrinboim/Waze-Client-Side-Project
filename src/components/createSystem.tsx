import React, { useState } from 'react';
import { System } from '../models/system.model';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
import { createSystem } from '../api/system';


export default function CreateSystem() {

  const [topic, setTopic] = useState('');
  const [objectName, setObjectName] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [ownerId, setOwnerId] = useState('');
  const [urlName, setUrlName] = useState('');


  const addSystem = async () => {
    const sys: System = {
      topic,
      objectName,
      ownerId,
      description,
      email,
      phone,
      urlName
    }
    console.log(sys);
  let result =  await createSystem(sys);
  console.log(result);
  }

  return (
    <form className='auth-inner'
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
        <label>topic</label>
        <input
          type="string"
          className="form-control"
          placeholder="Enter topic"
          onChange={(e) => setTopic(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>objectName</label>
        <input
          type="string"
          className="form-control"
          placeholder="Enter objectName"
          onChange={(e) => setObjectName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>owner id</label>
        <input
          type="string"
          className="form-control"
          placeholder="Enter topic"
          onChange={(e) => setOwnerId(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>description</label>
        <input
          type="string"
          className="form-control"
          placeholder="Enter description"
          onChange={(e) => setDescription(e.target.value)}
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
      <div className="mb-3">
          <label>url name</label>
          <input
            type="string"
            className="form-control"
                    placeholder="Enter objectName"
                    onChange={(e) => setUrlName(e.target.value)}
          />
        </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary" onSubmit={addSystem}>
          Submit
        </button>
      </div>
    </form>
  );
}
