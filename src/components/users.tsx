import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
// import { useRecoilState, useSetRecoilState } from 'recoil';
import { get } from '../api/user';
import { User } from "../models/user.model";

const Users: React.FC = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    get()?.then((users) =>
      setUsers(users))
    console.log(users);
  }, [])

  return (
    <div>
      <ul>
        {users.map((u: User) => (
          <li key:String={u._id}>
            {" "}
            <Link to={`/user/${u._id}`}> {u.firstName + '' + u.lastName}</Link>{" "}<br />
            <Link to={`/add`}> to add system</Link>{" "}
            <Link to={`/addUser`}> to add user</Link>{" "}

          </li>
        ))}
      </ul>
    </div>
  );
}
//משום מה לא עובד לי בלי הדיפולט
export default Users;
