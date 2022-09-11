import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react';
import systemStore from '../../api/system';
import { Button, Card, CardContent, Typography, CardActionArea } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import CardMedia from '@mui/material/CardMedia';
import userStore from '../../api/user';

const ShowSystem = () => {

    const navigate = useNavigate();
    const { urlName, id } = useParams();

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
                <Card sx={{ maxWidth: 345, display: 'inline-block' }} >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="200"
                            image={systemStore.system.logoUrl}
                            alt="system logo"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {systemStore.system.topic}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {systemStore.system.description}
                            </Typography>
                            <br />
                            <Typography variant="body2">
                                objectName:   {systemStore.system.objectName}
                            </Typography>
                            <Typography variant="body2">
                                urlName:   {systemStore.system.urlName}
                            </Typography>
                            <Typography variant="body2">
                                owner Id:   {systemStore.system.ownerId}
                            </Typography>
                            <Typography variant="body2">
                                email address:   {systemStore.system.email}
                            </Typography>
                            <Typography variant="body2">
                                phone number:   {systemStore.system.phone}
                            </Typography>
                            <br />
                        </CardContent>
                    </CardActionArea>
                </Card>
            }
            {userStore.user?.role === 'admin' &&
                <CardContent>
                    <Button onClick={() => navigate("/delete")} startIcon={<DeleteIcon />}>delete</Button>
                    <br />
                    <Button onClick={() => navigate("/update")} startIcon={<ModeEditOutlineIcon />}>update</Button>
                </CardContent>
            }

        </>
    );
}
export default observer(ShowSystem);
