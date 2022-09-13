import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react';
import systemStore from '../../api/system';
import { Button, TextField } from '@mui/material';
import swal from 'sweetalert';
import { System } from '../../models/system.model';

const Update = () => {

    const navigate = useNavigate();
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
                        console.log(result);
                        swal("!Your system has been edited!", {
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
    );
}
export default observer(Update);
