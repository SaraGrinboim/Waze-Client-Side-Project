import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import { systemecoilState, useSetRecoilState } from 'recoil';

import { getSystemsByUrlName, deleteSystem, getSystemById, updateSystem } from '../api/system';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Button, Card, CardContent, Typography, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import swal from 'sweetalert';
import { System } from '../models/system.model';



const ShowSystem = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { urlName } = useParams();


    let s: System = {
        topic: "",
        objectName: "",
        ownerId: "",
        description: "",
        email: "",
        phone: "",
        urlName: "",
        logoUrl: "",
    };
    const [system, setSystem] = useState(s);
    const [edit, setEdit] = useState(false);


    // const [name, setName] = useState(system?.name);
    useEffect(() => {
        if (id)
            getSystemById(String(id)).then((s) => {
                console.log(s);
                setSystem(s);
            })
            else{
                getSystemsByUrlName(String(urlName)).then((s) => {
                    console.log(s);
                    setSystem(s);
                })
            }

        if (!system) {
            console.log('no system found');
            navigate('/systems');  // דוגמא לניווט ע"י קוד
        }
    }, []);


    const Delete = async () => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this system file!",
            icon: "warning",
            dangerMode: true,
        })
            .then(async function name(willDelete: any) {
                debugger;
                console.log('name: ' + willDelete);
                if (willDelete) {
                    try {
                        let result = await deleteSystem(String(system._id));
                        console.log(result);
                        swal("Poof! Your system has been deleted!", {
                            icon: "success",
                        });
                    } catch (error) {
                        console.error(error);
                    }
    
                } else {
                    swal("Your system is safe!");
                }
            });
        navigate('/systems');

        // let result = await deleteSystem(String(system._id));
        // console.log(result);
        // navigate('/systems');
    };

   
    


    const topic: any = useRef();
    const objectName: any = useRef();
    const description: any = useRef();
    const email: any = useRef();
    const phone: any = useRef();
    const ownerId: any = useRef();
    const URLName: any = useRef();
    const LogoUrl: any = useRef();

    const Edit = async () => {

        const newSystem: System = {
            "topic": topic.current?.value,
            "objectName": objectName.current?.value,
            "ownerId": system.ownerId,
            "description": description.current?.value,
            "email": email.current?.value,
            "phone": phone.current?.value,
            "urlName": URLName.current?.value,
            "logoUrl": LogoUrl.current?.value
        }
        console.log("newSystem: " + newSystem);
        swal({
            title: "Are you sure?",
            text: "Once edited, you will not be able to recover this system file!",
            icon: "warning",
            dangerMode: true,
        })
            .then(async function name(willDelete: any) {

                if (willDelete) {
                    try {
                        console.log(newSystem);
                        let result = await updateSystem(String(system._id), newSystem);
                        console.log(result);
                        swal("Poof! Your system has been edited!", {
                            icon: "success",
                        });
                    } catch (error) {
                        console.error(error);
                    }
                } else {
                    swal("Your system is safe!");
                }

            });
        navigate('/systems');
    };

    return (
        <>
            {
                system &&
                <Card>
                    <CardContent>
                        <form className='auth-inner'>
                            <Typography variant="h3">The system</Typography>
                            <div className="mb-3">
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
                                <Typography variant="h5">owner Id:   {system.ownerId}</Typography>
                            </div>
                            <div className="mb-3">
                                <Typography variant="h5">email address:   {system.email}</Typography>
                            </div>
                            <div className="mb-3">
                                <Typography variant="h5">phone number:   {system.phone}</Typography>
                            </div>
                            <div className="mb-3">
                                <Typography variant="h5">logo url:   {system.logoUrl}</Typography>
                            </div>
                            <div className="d-grid">
                                <Button onClick={Delete} startIcon={<DeleteIcon />}></Button>
                                <Button onClick={() => setEdit(true)} startIcon={<ModeEditOutlineIcon />}></Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            }

            {
                edit &&
                <form className='auth-inner' onSubmit={Edit}>
                    <h3>change this system</h3>
                    <div className="mb-3">
                        <TextField required type="string" id="outlined-basic" label="enter topic" variant="outlined" inputRef={topic}></TextField>
                    </div>
                    <div className="mb-3">
                        <TextField required type="string" id="outlined-basic" label="enter objectName" variant="outlined" inputRef={objectName}></TextField>
                    </div>
                    <div className="mb-3">
                        <TextField required type="string" id="outlined-basic" label="enter description" variant="outlined" inputRef={description}></TextField>
                    </div>
                    <div className="mb-3">
                        <TextField required type="email" id="outlined-basic" label="enter email address" variant="outlined" inputRef={email}></TextField>
                    </div>
                    <div className="mb-3">
                        <TextField required type="number" id="outlined-basic" label="enter phone number" variant="outlined" inputRef={phone}></TextField>
                    </div>
                    <div className="mb-3">
                        <TextField required type="string" id="outlined-basic" label="enter urlName" variant="outlined" inputRef={URLName}></TextField>
                    </div>
                    <div className="mb-3">
                        <TextField required type="string" id="outlined-basic" label="enter logo url" variant="outlined" inputRef={LogoUrl}></TextField>
                    </div>
                    <div className="d-grid">
                        <Button variant="outlined" type="submit">Submit</Button>
                    </div>
                </form>
            }
        </>
    );


}
export default ShowSystem;
