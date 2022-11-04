import React, { Fragment } from "react";
import Logo from "./assets/perro1.png";
import Style from "./NavBar.module.css";
import { Link } from "react-router-dom";
import BarSearch from "../SearchBar/SearchBar";

export default function NavBar() {
  
  return (
    <Fragment>
     
      <div className={Style.NavBar}>
        <div>
          <Link to="/home" >
            <img id="logoFranco" src={Logo} className={Style.Logo} alt=''/>
          </Link>
        </div>
        <div className={Style.title}>
         <span  className={Style.boton_neon}>T</span>he <span  className={Style.boton_neon}>D</span>ogs <span  className={Style.boton_neon}>API</span>
        </div>
        <div>
          <BarSearch />
        </div>
  
        </div>
        
        <div className={Style.span}></div>
    </Fragment>
  );
}
