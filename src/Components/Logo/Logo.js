import React from "react";
import Tilt from "react-parallax-tilt";
import "./Logo.css"
import Luffy from "./Crountch-One-Piece-Jolly-Roger-Luffys-flag.ico"

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt className="Tilt br2 shadow-2" options={{max:25}} style={{height:150, width:150}}>
        <div className="Tilt-inner pa3 "><img style={{paddingTop: '5px'}} src={Luffy} alt="logo"/></div>
      </Tilt>
    </div>
  );
};

export default Logo;
