import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react';
import systemStore from '../../api/system';
import { Button, Card, CardContent, Typography, CardActionArea } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
<<<<<<< HEAD
import swal from 'sweetalert';
import { System } from '../../models/system.model';
import '../../styles/system.css';
import userStore from '../../api/user';
=======
import CardMedia from '@mui/material/CardMedia';
>>>>>>> f60a30e73001e4bed7f57cf53f41357948d6e2e4

const ShowSystem = () => {

    const navigate = useNavigate();
    const { urlName, id } = useParams();
<<<<<<< HEAD
    const [edit, setEdit] = useState(false);
=======
>>>>>>> f60a30e73001e4bed7f57cf53f41357948d6e2e4

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
