import React from "react";
import styles from './Footer.module.css'

export default function Footer(){

   // onclick="location.href='https://github.com/Lleaguen'" target="_blank" 
    return(
        <>
        <div className={styles.contain}>
            <div className={styles.span}></div>
                <div className={styles.left}>
                    <p className={styles.neondetail2}>I hope you like it</p>
                    <p className={styles.neondetail2}>This page makes a lot of effort..</p>
                    <p className={styles.neondetail2}>It is a project made with :</p>
                    <p className={styles.neondetail2}> react, redux, express, sequelize,</p>
                    <p className={styles.neondetail2}>etc...</p> 
                    <p className={styles.neondetail2}> With a dog theme </p>

                </div>
                
                <div className={styles.rigth}>
                    
                    <h5 className={styles.neondetail}>P.I by Franco Romero</h5>
                    <h5 className={styles.neondetail}>Student of Henry!</h5>
                    <h5 className={styles.neondetail}>E-mail: lleaguen99@gmail.com</h5>


                    <div className={styles.main}> 
                    <h6 className={styles.blocks}><p className={styles.neon}>Contact me: </p> </h6>
                        <a href="https://www.linkedin.com/in/franco-romero-945b66226/"  target="_blank" rel="noopener noreferrer" className={styles.blocks}><button  className={styles.linked}></button></a> 
                        <a href="https://github.com/Lleaguen"  target="_blank" rel="noopener noreferrer" className={styles.blocks} ><button  className={styles.git}></button></a> 
                        <a href="https://www.facebook.com/L.Lawliert"  target="_blank" rel="noopener noreferrer" className={styles.blocks}><button  className={styles.face}></button></a>
                        <a href="https://wa.me/5491173614274"  target="_blank" rel="noopener noreferrer" className={styles.blocks}><button  className={styles.wp}></button></a>
                    </div>
                </div>
        </div>
        </>
    );
}