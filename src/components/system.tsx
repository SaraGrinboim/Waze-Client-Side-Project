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
        <>
            {systems?.map((s: System) => (
                <Card sx={{ minWidth: 275, alignItems: 'center', }}>
                    <CardContent>
                        <div key={String(s._id)}>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                {s.topic}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                phone:{s.phone}
                                <br />
                                email:{s.email}
                            </Typography>
                            <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                                <Button variant="text"><Link to={`/${s._id}`}> {s.topic + '  ' + s.objectName + '  ' + s.description}</Link></Button>{" "}<br />
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    '& > *': {
                                        m: 1,
                                    },
                                }}
                            >
                                <CardActions >
                                    <Button variant="outlined" onClick=
                                        {
                                            () => navigate(`/systemDetails/?urlName=`+s.urlName)
                                        }
                                    >show system</Button>
                                </CardActions>
                            </Box>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </>
    );

}