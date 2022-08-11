import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
// import { useRecoilState, useSetRecoilState } from 'recoil';
import { get } from '../api/user';
import { user } from "../models/user.model";

const Users: React.FC = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    get()?.then((users) =>
      setUsers(users))
  }, [])

  return (
    <div>
      <ul>
        {users.map((u: user) => (
          <li key={u.role}>
            {" "}
            <Link to={`/${u._id}`}> {u.firstName + '' + u.lastName}</Link>{" "}<br />
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
