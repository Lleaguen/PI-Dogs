import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
export default function Card( { id, name, image, temperaments, weight_min, weight_max, breed_group, height_min, height_max} ) {

  
    return (
      
        <div className={styles.dogCard}>
          <Link to={`/dogs/${id}`} className={styles.Link}>
            <div className={styles.titleArea}>
              <h4 className={styles.dogName}> {name}</h4>
              <h6 className={styles.breed}>{breed_group}(breed group)</h6>
            </div>
            <div className={styles.infoArea}>
              <div className={styles.tempArea}>
              
                  <h5 className={styles.dogTemp}>Temperaments: </h5>
                  <h5 className={styles.dogTemp}>{typeof temperaments === "string" ? temperaments :  Array.isArray(temperaments) ? temperaments[0].name : "" }</h5>
             
              </div>
              
              <h5 className={styles.dogTemp2}>weight: {weight_min}Kg - {weight_max}Kg</h5> 
              <h5 className={styles.dogTemp2}>height: {height_min}cm - {height_max}cm</h5>
              <div className={styles.imageArea}>
                <img className={styles.dogImage} src={image} alt={`A dog wich is ` + { temperaments }} height="140px" />
              </div>
            </div>
          </Link>
        </div>
    );
  
}