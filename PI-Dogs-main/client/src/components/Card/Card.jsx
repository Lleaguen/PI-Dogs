import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
export default function Card( { id, name, image, temperament, weight_min, weight_max } ) {

  
    return (
      
        <div className={styles.dogCard}>
          <Link to={`/dogs/ ${id}`}>
            <div className={styles.titleArea}>
              <h4 className={styles.dogName}> {name}</h4>
            </div>
            <div className={styles.infoArea}>
              <div className={styles.tempArea}>
              
                  <h5 className={styles.dogTemp}>{temperament}</h5>
             
              </div>
              
              <h4 className={styles.dogTemp2}>min. weight: {weight_min} Kg / max. weight {weight_max} Kg</h4>
              <div className={styles.imageArea}>
                <img className={styles.dogImage} src={image} alt={`A dog wich is ` + { temperament }} height="140px" />
              </div>
            </div>
          </Link>
        </div>
    );
  
}