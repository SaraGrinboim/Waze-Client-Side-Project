import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import { AuthProvider } from './provider/AuthProvider';
=======
import { BrowserRouter } from 'react-router-dom';
>>>>>>> 222931565b090f2fe12eed29fa85cfa107381843

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
<<<<<<< HEAD
       <AuthProvider>
      <App />
    </AuthProvider>
=======
    <BrowserRouter>
      <App />
    </BrowserRouter>
>>>>>>> 222931565b090f2fe12eed29fa85cfa107381843
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
