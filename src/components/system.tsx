import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { sys } from 'typescript';
// import { systemecoilState, useSetRecoilState } from 'recoil';
import { getSystemsByUrlName } from '../api/system';
import { System } from '../models/system.model';

const System = () => {
    const { urlName } = useParams();
    let s:System={
        _id: "",
        topic:"",
        objectName:"",
        ownerId:"",
        description:"",
        email:"",
        phone:"",
        urlName:"",
    };
    const [system, setSystem] = useState(s);

    let url:string;
    url = String(urlName);
    const navigate = useNavigate();
    // const [name, setName] = useState(system?.name);
    useEffect(() =>{
        getSystemsByUrlName(url).then((s) =>{
        setSystem(s);
       })
        if (!system) {
            console.log('no sytem');
            navigate('/system');  // דוגמא לניווט ע"י קוד
        }
    }, []);


    return system?
    <form className='auth-inner'  
    //   component="form"
    //   sx={{
    //     '& > :not(style)': { m: 1, width: '25ch' },
    //   }}
    //   noValidate
    //   autoComplete="off"
    >
        <h3>system: {system._id}</h3>
        {/* <TextField id="outlined-basic" label="topic" variant="outlined"  className="mb-3"/>
  <TextField id="outlined-basic" label="objectName" variant="outlined" className="mb-3" /> */}
        {/* <TextField id="filled-basic" label="Filled" variant="filled" />
  <TextField id="standard-basic" label="Standard" variant="standard" /> */}
        <div className="mb-3">
            <label>topic:  </label>
            {system.topic}
        </div>
        <div className="mb-3">
            <label>objectName:  </label>
            {system.objectName}
        </div>
        <div className="mb-3">
            <label>description:  </label>
            {system.description}
        </div>
        <div className="mb-3">
            <label>email:  </label>
            {system.email}
        </div>
        <div className="mb-3">
            <label>phone:  </label>
            {system.phone}
        </div>
        <div className="mb-3">
            <label>urlName:  </label>
            {system.urlName}
        </div>
        <div className="d-grid">
            <Link to={`/update/${system._id}`}>to update</Link>
            <button>to delete</button>
        </div>
    </form>:null;


}

export default System;