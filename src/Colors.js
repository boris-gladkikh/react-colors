import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./Colors.css";

function Colors(){
  const [colors, setColors] = useState(["red","green"])
  return (
    <div>
      <header>
        <h1>Welcome To The Color Factory</h1>
        <h6>(Apologies if you are a dog)</h6>
        <Link to="/colors/new">Add a color</Link>
      </header>
      <div className="colorList">
        <ul>
  {colors.map(c => <li><Link to={`/colors/${c}`}>{c}</Link></li>)}
        </ul>
      </div>
    </div>
  )
}

export default Colors