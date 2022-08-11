import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
// import { useRecoilState, useSetRecoilState } from 'recoil';
import { get } from '../api/user';
import { User } from "../models/user.model";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import FormGroup from '@mui/material/FormGroup';


const Users: React.FC = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    get()?.then((users) =>
      setUsers(users))
  }, [])

  return (
    <div>
        <ul>
          {users.map((u: User) => (
            <Card sx={{ minWidth: 27 }}>
              <CardContent>
                <li key={String(u._id)}>
                  {" "}
                  <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                    <Button variant="contained"><Link to={`/user/${u._id}`}> {u.firstName + ' ' + u.lastName}</Link></Button>{" "}<br />
                    </Typography>
                    <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                    <Link to={`/add`} style={{listStyle: "none"}}> to add system</Link>{" "}<br />
                    </Typography>
                    <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                    <Link to={`/addUser`}> to add user</Link>{" "}<br />
                    </Typography>
                    <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                    <Link to={`/system/getSystemByUrlName/:urlName`}> to show system</Link>{" "}<br />
                    </Typography>
                    {/* <Button variant="contained">Contained</Button>
                    <Button variant="outlined">Outlined</Button> */}
         
                </li>
              </CardContent>
            </Card>
          ))}
        </ul>
    </div >
  );
}
//משום מה לא עובד לי בלי הדיפולט
export default Users;
