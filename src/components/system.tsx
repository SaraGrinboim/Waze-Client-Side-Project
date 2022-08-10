import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { getSystems } from '../api/system';

export default function Systems() {

    const [systems, setSystems]=useState([]);

    useEffect(() => {
        const systems = async () => {
            try {
                getSystems()?.then((systems) =>
                    setSystems(systems))
            } catch (error) {
                console.error(error + 'in get systems to display');
            }
        }
        systems();

    }, [])

    return (
        <>
        {systems.map(system =>
        {
            <div>
                
            </div>
        })}
        </>
        // {systems:[] ? <p>frh</p>: systems.map((s) =>
        // <Card sx={{ minWidth: 275 }}>
        //     <CardContent>
        //         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        //             Word of the Day
        //         </Typography>
        //         <Typography variant="h5" component="div">
        //         </Typography>
        //         <Typography sx={{ mb: 1.5 }} color="text.secondary">
        //             adjective
        //         </Typography>
        //         <Typography variant="body2">
        //             well meaning and kindly.
        //             <br />
        //             {'"a benevolent smile"'}
        //         </Typography>
        //     </CardContent>
        //     <CardActions>
        //         <Button size="small">Learn More</Button>
        //     </CardActions>
        // </Card>
        // )}
    );
}
