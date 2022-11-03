import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import style from "./LandingPage.module.css";
import video from './assets/perros.mp4';
import './Landing.css';
import Musica from './assets/music2.mp3';


export default function LandingPage(){
    return(
        <Fragment>
                <div className={style.vid}>
                    
                <div className={style.overlay}></div>
                    <video src={video} autoPlay muted loop />
                    <audio src={Musica} autoPlay loop/>
                </div>
                
            <div className={style.landing}>
                <p className={style.tittle}>WHO LET THE DOGS OUT?</p>
                <Link to='/home' className="button">
                    <span className="span1"></span>
                    <span className="span2"></span> 
                    <span className="span3"></span>    
                    <span className="span4"></span>     
                    Wuff Wuff Wuff
                </Link>
            </div>
        </Fragment>
    )
}

