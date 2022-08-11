import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import { Route, Routes } from 'react-router-dom';
import Users from './components/users';
import CreateSystem from "./components/createSystem";
import CreateUser from './components/createUser';
import User from './components/user';
import Systems from './components/system';
import { link } from 'fs';
function App() {
  return (
    <div className="App">
      <Login />
      <div>
        <Routes>
          <Route path="" element={<h1>Hello :hand:</h1>} />
          <Route path="/add" element={<CreateSystem />} />
          <Route path="/addUser" element={<CreateUser />} />
          <Route path=":userId" element={<User />} />
          <Route path="/user" element={<Users />} />
          <Route path="/systems" element={<Systems />} />
          <Route path="*" element={<h1> A mistake </h1>} />
        </Routes>
      </div>
    </div >
  );
}
export default App;