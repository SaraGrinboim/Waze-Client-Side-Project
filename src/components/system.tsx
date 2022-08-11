import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { getSystems } from '../api/system';
import { Link } from 'react-router-dom';
import { system } from '../models/system.model';

export default function Systems() {

    const [systems, setSystems] = useState([]);

    useEffect(() => {
        const systems = async () => {
            try {
                getSystems()?.then((systems) => {
                    console.log(systems);
                    setSystems(systems)
                })
            }
            catch (error) {
                console.error(error + 'in get systems to display');
            }
        }
        systems();

    }, [])

    return (
        <div>
        <ul>
          {systems.map((s: system) => (
            <Card sx={{ minWidth: 27 }}>
              <CardContent>
                <li key={String(s._id)}>
                  {" "}
                  <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                    <Button variant="text"><Link to={`/system/${s.urlName}`}> {s.topic + ' ' + s.objectName + ' ' + s.description}</Link></Button>{" "}<br />
                    {/* <Link to={`/addUser`}> to add user</Link>{" "}<br /> */}
                    {/* <Link to={`/system/${s.urlName}`}> to show system</Link>{" "}<br /> */}
                    {/* <Button variant="contained">Contained</Button>
                    <Button variant="outlined">Outlined</Button> */}
                  </Typography>
                </li>
              </CardContent>
            </Card>
          ))}
        </ul>
        <Link to={`/add`}> to add system</Link>{" "}<br />
    </div >
    );

    // return (
    //     <>
    //         {/* {systems.map(system => {
    //         <p>njjnj</p>
    //     })} */}
    //         {systems?.map(system => {
    //             <Card sx={{ minWidth: 275 }}>
    //                 <CardContent>
    //                     <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
    //                         Word of the Day
    //                     </Typography>
    //                     <Typography variant="h5" component="div">
    //                     </Typography>
    //                     <Typography sx={{ mb: 1.5 }} color="text.secondary">
    //                         adjective
    //                     </Typography>
    //                     <Typography variant="body2">
    //                         well meaning and kindly.
    //                         <br />
    //                         {'"a benevolent smile"'}
    //                     </Typography>
    //                 </CardContent>
    //                 <CardActions>
    //                     <Button size="small">Learn More</Button>
    //                 </CardActions>
    //             </Card>
    //         })}
    //     </>
    //     // {systems:[] ? <p>frh</p>: systems.map((s) =>
    //     // <Card sx={{ minWidth: 275 }}>
    //     //     <CardContent>
    //     //         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
    //     //             Word of the Day
    //     //         </Typography>
    //     //         <Typography variant="h5" component="div">
    //     //         </Typography>
    //     //         <Typography sx={{ mb: 1.5 }} color="text.secondary">
    //     //             adjective
    //     //         </Typography>
    //     //         <Typography variant="body2">
    //     //             well meaning and kindly.
    //     //             <br />
    //     //             {'"a benevolent smile"'}
    //     //         </Typography>
    //     //     </CardContent>
    //     //     <CardActions>
    //     //         <Button size="small">Learn More</Button>
    //     //     </CardActions>
    //     // </Card>
    //     // )}
    // );
}
