import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App nombre={"Silvano"} text={"CURSOS"} edad={42}/>
  </React.StrictMode>
);
