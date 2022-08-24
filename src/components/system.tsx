import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { getSystems } from '../api/system';
import { System } from '../models/system.model';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import '../styles/system.css';
export default function Systems() {
    const navigate = useNavigate();
    const [systems, setSystems] = useState([]);
    useEffect(() => {
        async function getAllSystems() {
            try {
                getSystems()?.then((systems) => {
                    console.log(systems);
                    setSystems(systems)
                })
            }
            catch (error) {
                console.error(error);
            }
        }
        getAllSystems();
    }, [])
    return (
        <div className="card-systems">
            <div className="card-systems-container">
                {systems?.map((s: System) => (
                    <Card sx={{ maxWidth: 345, backgroundImage: `${s.logoUrl}`}} className="card">
                        {/* <CardMedia
                            component="img"
                            height="140"
                        // srcSet={s.logoUrl}
                        />*/}
                        <img
                            src={`${s.logoUrl}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${s.logoUrl}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            // alt={item.title}
                            loading="lazy"></img> 
                        {/* <Typography gutterBottom variant="h5" component="div">
                            {s.logoUrl}
                        </Typography> */}
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {s.topic}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {s.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="outlined" onClick=
                                {
                                    () => navigate(`/systems/${s._id}`)
                                }
                            >show {s.topic} details</Button>
                            {/* <Button size="small">Learn More</Button> */}
                        </CardActions>
                    </Card>
                ))}
                {/* <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                <Link to={`/add`} style={{ listStyle: "none" }}> to add system</Link>{" "}<br />
            </Typography> */}
            </div>
            <Button variant="outlined" onClick=
                {
                    () => navigate('/add')
                }
            >add system</Button>
        </div>
    )
}
