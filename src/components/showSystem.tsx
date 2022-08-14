import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import { systemecoilState, useSetRecoilState } from 'recoil';
import { getSystemsByUrlName, deleteSystem, updateSystem } from '../api/system';
import { System } from '../models/system.model';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Button, Card, CardContent, Typography, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import swal from 'sweetalert';

const ShowSystem = () => {

    const { urlName } = useParams();
    console.log(urlName);

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
    const [edit, setEdit] = useState(false);

    const navigate = useNavigate();
    // const [name, setName] = useState(system?.name);
    useEffect(() => {
        getSystemsByUrlName(String(urlName)).then((s) => {
            setSystem(s);
        })
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
    };

    const topic: any = useRef();
    const objectName: any = useRef();
    const ownerId: any = useRef();
    const description: any = useRef();
    const email: any = useRef();
    const phone: any = useRef();
    const URLName: any = useRef();

    const Edit = async () => {
        
        const newSystem: System = {
            "topic": topic.value,
            "objectName": objectName.value,
            "ownerId": ownerId.value,
            "description": description.value,
            "email": email.value,
            "phone": phone.value,
            "urlName": URLName.value
        }

        swal({
            title: "Are you sure?",
            text: "Once edited, you will not be able to recover this system file!",
            icon: "warning",
            dangerMode: true,
        })
            .then(async function name(willDelete: any) {

                if (willDelete) {
                    try {
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
                                <Typography variant="h5">email address:   {system.email}</Typography>
                            </div>
                            <div className="mb-3">
                                <Typography variant="h5">phone number:   {system.phone}</Typography>
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
                    <h3>create new system</h3>
                    <div className="mb-3">
                        <TextField type="string" id="outlined-basic" label="enter topic" variant="outlined" inputRef={topic}></TextField>
                    </div>
                    <div className="mb-3">
                        <TextField type="string" id="outlined-basic" label="enter objectName" variant="outlined" inputRef={objectName}></TextField>
                    </div>
                    <div className="mb-3">
                        <TextField type="string" id="outlined-basic" label="enter ownerId" variant="outlined" inputRef={ownerId}></TextField>
                    </div>
                    <div className="mb-3">
                        <TextField type="string" id="outlined-basic" label="enter description" variant="outlined" inputRef={description}></TextField>
                    </div>
                    <div className="mb-3">
                        <TextField type="string" id="outlined-basic" label="enter email address" variant="outlined" inputRef={email}></TextField>
                    </div>
                    <div className="mb-3">
                        <TextField type="string" id="outlined-basic" label="enter phone number" variant="outlined" inputRef={phone}></TextField>
                    </div>
                    <div className="mb-3">
                        <TextField type="string" id="outlined-basic" label="enter urlName" variant="outlined" inputRef={URLName}></TextField>
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
