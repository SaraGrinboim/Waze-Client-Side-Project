import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import { Route, Routes } from 'react-router-dom';
import Users from './components/users';

function App() {
  return (
    <div className="App">
      <Login />
      <div>
        <Routes>
          <Route path="" element={<h1>my diary</h1>} />
          <Route path="/user" element={<Users />}>
            {/* <Route path=":getid" element={<User />} />
            <Route path=":id" element={< UpdateUser />} /> */}
          </Route>
          <Route path="*" element={<h1> A mistake </h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
