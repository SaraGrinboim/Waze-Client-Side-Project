
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
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Map from './components/map';
function App() {

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ flexGrow: 1, backgroundColor: 'black' }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              project logo
            </Typography>
            {auth && (
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
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
          
          <Route path="map" element={<Map/>} />

          <Route path="*" element={<h1> A mistake </h1>} />
        </Routes>
      </>
    </div >
  );
}
export default App;