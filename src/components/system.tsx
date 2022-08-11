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
        <div>
        <ul>
          {systems.map((s: System) => (
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

}
