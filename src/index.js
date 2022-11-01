import  ReactDOM  from "react-dom/client";
import './style.css'
//import App from './app'
import Card from "./card";

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
root.render(
<div className="App">
    <h1 className="h1">WELCOME TO BEST TOURIST PLACE</h1>
    <div className="places">
    <Card name="ladakh" imgUrl="https://wallpapercave.com/wp/wp4527540.jpg" tname="Ladakh is famous for its scenic beauty, Buddhist monasteries, unique culture and exciting adventure spots. It is also known for its amazing trekking routes. Leh, Ladakh's administrative capital, is also popular among tourists because of its beautiful surroundings and monasteries" href="https://www.intermiles.com/blog/15-best-places-to-visit-leh-ladakh"/>
    <Card name="Kashmir" imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Yyjyx2gxdOn1oB2dpC2ytIcKj1CZJXFMZQ&usqp=CAU" tname="The 'Heaven on Earth' Kashmir is blessed with picturesque beauty. The verdant gardens in the valley are proof to its beauty. Visiting Mughal gardens built in charbagh style of architecture by various Mughal princes and courtiers definitely count as one of best places to visit in Kashmir Valley." href="https://www.tourmyindia.com/states/jammu-kashmir/kashmir.html"/>
    <Card name="Delhi" imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeyTdBZ0TZT0F-Tk-GsfF2tT8K7B4r-UZAKw&usqp=CAU" tname="Delhi is famous for its local silversmiths, who expertise in silver art, like silver tea set, silver jewelry and also showpieces. There are a variety of locations in Delhi where you can pick different designs at reasonable rates. Available in a variety of designs, it is a much sought after accessory." href=" https://www.holidify.com/places/delhi/sightseeing-and-things-to-do.html"/>
    <Card name="Kerla" imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ18dimTI1g_oLAIAgtBydQgDWB0nFog1Wtvw&usqp=CAU" tname="Though counted amongst the most amazing facts about Kerala, it is also a predictable one. The whole state of Kerala is dotted with tall trees of coconuts. You can also find a hint of coconut in every dish served here.."href="https://keralatourpackagesguide.com/tourist-places-in-kerala/"/>
    </div>
    <div className="places">
    <Card name="Delhi" imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeyTdBZ0TZT0F-Tk-GsfF2tT8K7B4r-UZAKw&usqp=CAU" tname="Delhi is famous for its local silversmiths, who expertise in silver art, like silver tea set, silver jewelry and also showpieces. There are a variety of locations in Delhi where you can pick different designs at reasonable rates. Available in a variety of designs, it is a much sought after accessory."href="https://www.holidify.com/places/delhi/sightseeing-and-things-to-do.html"/>
    <Card name="Delhi" imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeyTdBZ0TZT0F-Tk-GsfF2tT8K7B4r-UZAKw&usqp=CAU" tname="Delhi is famous for its local silversmiths, who expertise in silver art, like silver tea set, silver jewelry and also showpieces. There are a variety of locations in Delhi where you can pick different designs at reasonable rates. Available in a variety of designs, it is a much sought after accessory."href="https://www.holidify.com/places/delhi/sightseeing-and-things-to-do.html"/>
    <Card name="Delhi" imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeyTdBZ0TZT0F-Tk-GsfF2tT8K7B4r-UZAKw&usqp=CAU" tname="Delhi is famous for its local silversmiths, who expertise in silver art, like silver tea set, silver jewelry and also showpieces. There are a variety of locations in Delhi where you can pick different designs at reasonable rates. Available in a variety of designs, it is a much sought after accessory."href="https://www.holidify.com/places/delhi/sightseeing-and-things-to-do.html"/>
    <Card name="Delhi" imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeyTdBZ0TZT0F-Tk-GsfF2tT8K7B4r-UZAKw&usqp=CAU" tname="Delhi is famous for its local silversmiths, who expertise in silver art, like silver tea set, silver jewelry and also showpieces. There are a variety of locations in Delhi where you can pick different designs at reasonable rates. Available in a variety of designs, it is a much sought after accessory."href="https://www.holidify.com/places/delhi/sightseeing-and-things-to-do.html"/>
    </div>
    </div>);
