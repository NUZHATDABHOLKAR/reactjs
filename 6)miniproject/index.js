
import  ReactDOM  from "react-dom/client";
import './index.css'

let CurDate=new Date();
CurDate = CurDate.getHours();
let greeting="";
const CssStyle={};

if(CurDate >= 1 && CurDate < 12){
    greeting="Good Morning"
    CssStyle.color="green";
    
}else if (CurDate>=12 && CurDate<19){
    greeting="Good Afternoon"
    CssStyle.color="Orange";
}else {
    greeting="Good Night"
    CssStyle.color="grey";
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<h1>Hello sir/madam , <span style={CssStyle}>{greeting}</span></h1>);