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
        <div className={Style.tittle}>
         <span  className={Style.boton_neon}>T</span><span className={Style.neon}>he</span> <span  className={Style.boton_neon}>D</span><span className={Style.neon}>ogs</span> <span  className={Style.boton_neon}>API</span>
        </div>
        <div>
          <BarSearch />
        </div>
  
        </div>
        
        <div className={Style.span}></div>
    </Fragment>
  );
}
