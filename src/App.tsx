
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import { Route, Routes } from 'react-router-dom';
import Users from './components/users';
import CreateSystem from "./components/createSystem";
import CreateUser from './components/createUser';
import ShowSystem from "./components/showSystem";
import User from './components/user';
import Systems from './components/system';
import { link } from 'fs';

function App() {
  return (
    <div className="App">

      <div>

        <Routes>
          {/* <Route path="" element={<Login />} /> */}
          <Route path="add" element={<CreateSystem />} />


          <Route path="user" element={<Users />} />
          {/* <Route  path="systems" element={<Systems />} >
            <Route  path=":id" element={<ShowSystem />} />
          </Route> */}
          <Route  path="systems" element={<Systems />} />
          <Route  path="systems/:id" element={<ShowSystem />} />
          {/* <Route path="systemDetails/:urlName" element={<ShowSystem/>}/> */}
          <Route path=":urlName" element={<ShowSystem />} />
          <Route path="*" element={<h1> A mistake </h1>} />
        </Routes>
      </div>
    </div >
  );
}
export default App;