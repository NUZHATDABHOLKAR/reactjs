import  ReactDOM  from "react-dom/client";
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Heading from './Heading';
//var  a=prompt("enter your name")
//alert("welcome to our restaurant "+ a)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>
);