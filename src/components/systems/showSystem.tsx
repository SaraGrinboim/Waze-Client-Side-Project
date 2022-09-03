import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react';
import systemStore from '../../api/system';
import { Button, Card, CardContent, Typography, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import swal from 'sweetalert';
import { System } from '../../models/system.model';
import '../../styles/system.css';

const ShowSystem = () => {

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
    const navigate = useNavigate();
    const { urlName, id } = useParams();
    const [edit, setEdit] = useState(false);
    
    useEffect(() => {
        async function getSystem  ()  {
            if (id){
                await systemStore.getSystemById(String(id))
            }
            else {
                await systemStore.getSystemsByUrlName(String(urlName))
            }
    
            if (!systemStore.system) {
                alert('no system found');
                navigate('/systems');
            }
        }
        getSystem();
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
                        let result = await systemStore.deleteSystem(String(systemStore.system._id));
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
    const description: any = useRef();
    const email: any = useRef();
    const phone: any = useRef();
    const URLName: any = useRef();
    const LogoUrl: any = useRef();

    const Edit = async () => {
        const newSystem: System = {
            "topic": topic.current?.value,
            "objectName": objectName.current?.value,
            "ownerId": systemStore.system.ownerId,
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
                        let result = await systemStore.updateSystem(String(systemStore.system._id), newSystem);
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
                systemStore.system &&
                <Card sx={{ maxWidth: 345 }} >
                    <CardContent>
                        <form className='auth-inner'>
                            <Typography variant="h3">The system</Typography>
                            <div className="mb-3">
                                <Typography variant="h5">topic:  {systemStore.system.topic}</Typography>
                            </div>
                            <div className="mb-3">
                                <Typography variant="h5">objectName:   {systemStore.system.objectName}</Typography>
                            </div>
                            <div className="mb-3">
                                <Typography variant="h5">description:   {systemStore.system.description}</Typography>
                            </div>
                            <div className="mb-3">
                                <Typography variant="h5">urlName:   {systemStore.system.urlName}</Typography>
                            </div>
                            <div className="mb-3">
                                <Typography variant="h5">owner Id:   {systemStore.system.ownerId}</Typography>
                            </div>
                            <div className="mb-3">
                                <Typography variant="h5">email address:   {systemStore.system.email}</Typography>
                            </div>
                            <div className="mb-3">
                                <Typography variant="h5">phone number:   {systemStore.system.phone}</Typography>
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
                <form className='edit' onSubmit={Edit}>
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
export default observer(ShowSystem);
