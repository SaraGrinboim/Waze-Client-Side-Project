import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
// import { systemecoilState, useSetRecoilState } from 'recoil';
import { getSystemsByUrlName, deleteSystem } from '../api/system';
import { System } from '../models/system.model';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Button, Card, CardContent, CardHeader, FormControl, Skeleton, Typography } from '@mui/material';


const ShowSystem = () => {
    const { urlName } = useParams();
    let s: System = {
        _id: "",
        topic: "",
        objectName: "",
        ownerId: "",
        description: "",
        email: "",
        phone: "",
        urlName: ""
    };
    const [system, setSystem] = useState(s);

    const navigate = useNavigate();
    // const [name, setName] = useState(system?.name);
    useEffect(() => {
        getSystemsByUrlName(String(urlName)).then((s) => {
            setSystem(s);
        })
        if (!system) {
            console.log('no system found');
            navigate('/system');  // דוגמא לניווט ע"י קוד
        }
    }, []);


    const Delete = async () =>{
        let result =  await deleteSystem(String(system._id));
          console.log(result);
          navigate('/system');
      };

    return system ?
    <Card>
        <CardContent>
            <form className='auth-inner'
            //   component="form"
            //   sx={{
            //     '& > :not(style)': { m: 1, width: '25ch' },
            //   }}
            //   noValidate
            //   autoComplete="off"
            >
                {/* <h3>system {system._id}</h3> */}
                <Typography variant="h3">The system</Typography>

                {/* <TextField id="outlined-basic" label="topic" variant="outlined"  className="mb-3"/>
  <TextField id="outlined-basic" label="objectName" variant="outlined" className="mb-3" /> */}
                {/* <TextField id="filled-basic" label="Filled" variant="filled" />
  <TextField id="standard-basic" label="Standard" variant="standard" /> */}
                <div className="mb-3">
                    {/* <label>topic:  {system.topic} </label> */}
                    <Typography variant="h5">topic:  {system.topic}</Typography>

                </div>
                <div className="mb-3">
                    <Typography variant="h5">objectName:   {system.objectName}</Typography>

                </div>
                <div className="mb-3">
                <Typography variant="h5">description:   {system.description}</Typography>
                </div>
                <div className="mb-3">
                <Typography variant="h5">urlName:   {system.urlName}</Typography>
                </div>
                <div className="mb-3">
                <Typography variant="h5">email address:   {system.email}</Typography>
                </div>
                <div className="mb-3">
                <Typography variant="h5">phone number:   {system.phone}</Typography>
                </div>
                <div className="d-grid">
                    <Button variant="text" onClick={Delete}>to delete</Button>{" "}<br />
                </div>
            </form> 
        </CardContent>
        </Card>: null;

}

export default ShowSystem;