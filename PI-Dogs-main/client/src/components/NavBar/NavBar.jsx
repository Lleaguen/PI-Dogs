import React, { Fragment } from "react";
import Logo from "./assets/perro1.png";
import Style from "./NavBar.module.css";
import { Link } from "react-router-dom";
import BarSearch from "../SearchBar/SearchBar";
import {  resetDogs } from "../../redux/Actions";
import { useDispatch }  from "react-redux";

export default function NavBar() {
  
  const dispatch = useDispatch();
  
  function handleClick(e){
    e.preventDefault();
    dispatch(resetDogs());
  }



  return (
    <Fragment>
     
      <div className={Style.NavBar}>
        <div>
        <button onClick={handleClick} className={Style.reset}>
            <img id="logoFranco" src={Logo} className={Style.Logo} alt=''/>
            </button>
        </div> 
        <Link to="/home" >
        <div className={Style.tittle}>
         <span  className={Style.boton_neon}>T</span><span className={Style.neon}>he</span> <span  className={Style.boton_neon}>D</span><span className={Style.neon}>ogs</span> <span  className={Style.boton_neon}>API</span>
        </div>  
        </Link>
        <div>
          <BarSearch />
        </div>
  
        </div>
        
        <div className={Style.span}></div>
    </Fragment>
  );
}
