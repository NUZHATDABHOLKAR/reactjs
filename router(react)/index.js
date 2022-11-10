import React from "react";
import  ReactDOM  from "react-dom/client";
import {BrowserRouter} from "react-router-dom"
import Navbar from "./Navbar";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode> <BrowserRouter>
    <div className="a3">
    <Navbar/>
    <App/>
    </div>   
    
    </BrowserRouter> </React.StrictMode>

);
