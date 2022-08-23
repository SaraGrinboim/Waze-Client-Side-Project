
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Users from './components/users';
import CreateSystem from "./components/createSystem";
import ShowSystem from "./components/showSystem";
import Systems from './components/system';
import SearchPage from './components/searchPage';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';

function App() {

  return (
    <div className="App">
      <Box sx={{ flexGrow: 1}}>
        <AppBar position="static" sx={{ flexGrow: 1, backgroundColor: 'black'}}>
          <Toolbar>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              logo project
            </Typography>

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      <>
        <Routes>
          {/* <Route path="" element={<Login />} /> */}
          <Route path="add" element={<CreateSystem />} />

          <Route path="searchPage" element={<SearchPage />} />
          <Route path="user" element={<Users />} />
          {/* <Route  path="systems" element={<Systems />} >
            <Route  path=":id" element={<ShowSystem />} />
          </Route> */}
          <Route path="systems" element={<Systems />} />
          <Route path="systems/:id" element={<ShowSystem />} />
          {/* <Route path="systemDetails/:urlName" element={<ShowSystem/>}/> */}
          <Route path=":urlName" element={<ShowSystem />} />
          
          <Route path="*" element={<h1> A mistake </h1>} />
        </Routes>
      </>
    </div >
  );
}
export default App;