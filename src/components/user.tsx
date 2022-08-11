import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams, useNavigate, Link } from 'react-router-dom';
// import { useRecoilState, useSetRecoilState } from 'recoil';
import { getById, deleteById } from '../api/user';
import { Erole, user } from '../models/user.model';

const User = () => {
    const { userId } = useParams();
    let u:user={
        _id:"",
        role:Erole.admin,
        firstName:"",
        lastName:"",
        email:"",
        phone:""
    };
    const [user, setUser] = useState(u);

    const navigate = useNavigate();
    // const [name, setName] = useState(user?.name);
    useEffect(() =>{
       getById(String(userId)).then((u) =>{
        setUser(u);
       })
        if (!user) {
            console.log('no users');
            navigate('/user');  // דוגמא לניווט ע"י קוד
        }
    }, []);

    const Delete = async () =>{
      let result =  await deleteById(String(user._id));
        console.log(result);
        navigate('/user');
    };


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
        <Button variant="text" onClick={Delete}>to delete</Button>{" "}<br />
        </div>
    </form>:null;


}

export default User;

