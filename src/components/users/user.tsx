import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
// import { useRecoilState, useSetRecoilState } from 'recoil';
import { eRole, User } from '../../models/user.model';
import UserStore from '../../api/user';
import Button from '@mui/material/Button';
import { observer } from 'mobx-react';

const ShowUser = () => {
    const { userId } = useParams();
    let u:User={
        _id:"",
        role:eRole.admin,
        firstName:"",
        lastName:"",
        email:"",
        phone:""
    };
    const [user, setUser] = useState(u);

    const navigate = useNavigate();
    // const [name, setName] = useState(user?.name);
    useEffect(() =>{
       UserStore.getById(String(userId)).then((u) =>{
        setUser(u);
       })
        if (!user) {
            console.log('no users');
            navigate('/user');  // דוגמא לניווט ע"י קוד
        }
    }, []);

    const Delete = async () =>{
      let result =  await UserStore.deleteById(String(user._id));
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

export default observer(ShowUser);

