import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
// import { useRecoilState, useSetRecoilState } from 'recoil';
import { get, update, getById } from '../api/user';
import { Erole, User } from '../models/user.model';

const ShowUser = () => {
    const { userId } = useParams();
    let u:User={
        _id:"",
        role:Erole.admin,
        firstName:"",
        lastName:"",
        email:"",
        phone:""
    };
    const [user, setUser] = useState(u);

    let id:string;
    id = String(userId);
    const navigate = useNavigate();
    // const [name, setName] = useState(user?.name);
    useEffect(() =>{
       getById(id).then((u) =>{
        setUser(u);
       })
        if (!user) {
            console.log('no users');
            navigate('/user');  // דוגמא לניווט ע"י קוד
        }
    }, []);


    return user?
    <form className='auth-inner'  
    //   component="form"
    //   sx={{
    //     '& > :not(style)': { m: 1, width: '25ch' },
    //   }}
    //   noValidate
    //   autoComplete="off"
    >
        <h3>user {user._id}</h3>
        {/* <TextField id="outlined-basic" label="topic" variant="outlined"  className="mb-3"/>
  <TextField id="outlined-basic" label="objectName" variant="outlined" className="mb-3" /> */}
        {/* <TextField id="filled-basic" label="Filled" variant="filled" />
  <TextField id="standard-basic" label="Standard" variant="standard" /> */}
        <div className="mb-3">
            <label>role:  </label>
            {user.role}
        </div>
        <div className="mb-3">
            <label>first name:  </label>
            {user.firstName}
        </div>
        <div className="mb-3">
            <label>last name:  </label>
            {user.lastName}
        </div>
        <div className="mb-3">
            <label>email:  </label>
            {user.email}
        </div>
        <div className="mb-3">
            <label>phone:  </label>
            {user.phone}
        </div>
        <div className="d-grid">
        <Link to={`/update/${user._id}`}>to update</Link>
            <button>to delete</button>
        </div>
    </form>:null;


}

export default User;

