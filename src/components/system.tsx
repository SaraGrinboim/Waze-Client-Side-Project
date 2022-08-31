import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { System } from '../models/system.model';
import systemStore from '../api/system';
import { useNavigate } from 'react-router-dom';
import '../styles/system.css';

const Systems = () => {

    const navigate = useNavigate();

    useEffect(() => {

        getAllSystems();

    }, [])

    async function getAllSystems() {
        try {
            await systemStore.getSystems();
        }
        catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="card-systems">
            <div className="card-systems-container">
                {systemStore.systems?.map((s: System) => (
                    <Card sx={{ maxWidth: 345, backgroundImage: `${s.logoUrl}` }} className="card">
                        {/* <CardMedia
                            component="img"
                            height="140"
                        // srcSet={s.logoUrl}
                        />*/}
                        <img className='img'
                            src={`${s.logoUrl}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${s.logoUrl}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={s.topic}
                            loading="lazy">
                        </img>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {s.topic}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {s.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="outlined"
                                onClick={() => navigate(`/systems/${s._id}`)}>
                                show {s.topic} details
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </div>
            <Button variant="outlined" onClick=
                {
                    () => navigate('/add')
                }
            >add system</Button>

        </div>
    )
}
export default observer(Systems);
