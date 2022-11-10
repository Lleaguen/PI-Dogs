import React from "react";
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Styles from '../404/NotFound.module.css';
import Filter from "../Filter/Filter";

export default function NotFound(){

    return(
        <>
        <div >
            <NavBar />
            
            <div className={Styles.main1}>
            <Filter />
            </div>
            <div className={Styles.notfound}>
                <h1 className={Styles.not}> 404 </h1>
                <h3 className={Styles.found}> NOT FOUND</h3>
            </div>
            
            <div className={Styles.main}>
                <Footer />
            </div>
        </div>
        </>
    )
}