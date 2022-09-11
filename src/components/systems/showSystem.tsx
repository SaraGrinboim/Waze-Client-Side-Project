import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react';
import systemStore from '../../api/system';
import { Button, Card, CardContent, Typography, CardActionArea } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import swal from 'sweetalert';
import { System } from '../../models/system.model';
import '../../styles/system.css';
import userStore from '../../api/user';
import CardMedia from '@mui/material/CardMedia';

const ShowSystem = () => {

    const navigate = useNavigate();
    const { urlName, id } = useParams();
    const [edit, setEdit] = useState(false);
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
    
    useEffect(() => {
        async function getSystem() {
            if (id) {
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
                            {userStore.user && userStore.user.role ==='0'}
                            <div className="d-grid">
                                <Button onClick={Delete} startIcon={<DeleteIcon />}></Button>
                                <Button onClick={() => setEdit(true)} startIcon={<ModeEditOutlineIcon />}></Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            }
        </>
    );
}
export default observer(ShowSystem);
