import React, { useContext, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login';

import { Button, Col, Container, Form, Navbar, Row } from "react-bootstrap";
import { AuthContext } from "./context/AuthContext";
import { Route, Routes } from 'react-router-dom';
import Users from './components/users';
import CreateSystem from "./components/createSystem";
import CreateUser from './components/createUser';
import User from './components/user';
import Systems from './components/system';
import ShowSystem from './components/showSystem';

function App() {
  // const emailRef = useRef<HTMLInputElement>(null);
  // const passwordRef = useRef<HTMLInputElement>(null);

  return (

    <div className="App">
      <Login />
      <div>
        <Routes>
          <Route path="" element={<h1>Hello ✋</h1>} />
          <Route path="/add" element={<CreateSystem />} />
          <Route path="/addUser" element={<CreateUser />} />
          <Route path="/system" element={<Systems />} />
          <Route path="/system/:urlName" element={<ShowSystem />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/user" element={<Users />}>
            {/* <Route path="/systems" element={<Systems />} /> */}
            {/* <Route path="/add" element={<CreateUser />} /> */}
            {/* <Route path=":userId" element={<User />} /> */}
            {/* <Route path=":id" element={< UpdateUser />} /> */}
          </Route>
          {/* <Route path="/system" element={<Users />}>
          <Route path="/:id" element={<CreateSystem/>}/>*
          </Route> */}
          
          <Route path="*" element={<h1> A mistake </h1>} />
        </Routes>
      </div>
    </div >
  );

}
//   return (
//     // <div className="App">
//     //  {/* <Login/> */}
//     //  <h1>Firebase Auth Tutorial</h1>
//     // </div>
//     <>
//     <Login/>
    
//       {/* <Navbar className="justify-content-between" bg="dark" variant="dark">
//         <Navbar.Brand>Firebase Authentication</Navbar.Brand>
//       </Navbar>
//       <Container style={{ maxWidth: "500px" }} fluid>
//         <Form className="mt-4">
//           <Form.Group controlId="formEmail">
//             <Form.Label>Email</Form.Label>
//             <Form.Control ref={emailRef} type="email" placeholder="email" />
//           </Form.Group>
//           <Form.Group controlId="formPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control ref={passwordRef} type="password" placeholder="password" />
//           </Form.Group>
//           {/* form.Row */}
//           {/* <Row>
//             <Col xs={6}> */}
//               {/* block */}
//               {/* <Button type="button" >
//                 Sign Up
//               </Button>
//             </Col>
//             <Col xs={6}>
//               <Button type="button" variant="secondary" >
//                 Sign In
//               </Button>
//             </Col>
//           </Row>
//         </Form>
//       </Container> */} */}
//     {/* </Log> */}
//   );
// }

export default App;
