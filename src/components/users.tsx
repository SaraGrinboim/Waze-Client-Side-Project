import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
// import { useRecoilState, useSetRecoilState } from 'recoil';
import { get } from '../api/user';
import { User } from "../models/user.model";

const Users: React.FC = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    get()?.then((users) =>
      setUsers(users.data))
    console.log(users);
  }, [users])

  return (
    <div>
      <ul>
        {users.map((u:User) => (
          <li key={u.role}>
            {" "}
            <Link to={`/user/${u.role}`}> {u.role} </Link>{" "}
          </li>
        ))}
      </ul>     </div>
  );
}
//משום מה לא עובד לי בלי הדיפולט
export default Users;