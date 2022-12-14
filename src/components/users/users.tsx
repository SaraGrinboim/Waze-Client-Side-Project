import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserStore from '../../api/user';
import { User } from "../../models/user.model";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { observer } from 'mobx-react';

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    UserStore.get()?.then((users) =>
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
                    <Link to={`/addUser`}> to add user</Link>{" "}<br />
                    </Typography>
                    <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                    <Link to={`/system/getSystemByUrlName/:urlName`}> to show system</Link>{" "}<br />
                    </Typography>
                </li>
              </CardContent>
            </Card>
          ))}
        </ul>
    </div >
  );
}
export default observer(Users);
