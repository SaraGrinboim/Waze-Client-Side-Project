import React, { useContext, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import { Button, Col, Container, Form, Navbar, Row } from "react-bootstrap";
import { AuthContext } from "./context/AuthContext";



function App() {
  // const emailRef = useRef<HTMLInputElement>(null);
  // const passwordRef = useRef<HTMLInputElement>(null);


  return (
    <Login/>
  )
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
