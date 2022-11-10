import React , {  useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getDetails, deleteDetails } from "../../redux/Actions/index";
import { useParams /*Link */} from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar"

import styles from "../DogDetail/DogDetail.module.css";


export default function DogDetail() {
    const dispatch = useDispatch();
    let { id } = useParams();
    const dog = useSelector((state) => state.details);
    console.log(dog);
    useEffect(() => {
      dispatch(getDetails(id));
      return () => {
        dispatch(deleteDetails());
      }
    }, [dispatch, id]);
    return(
      <>
        <NavBar />
        <div className={styles.container}>
          <div className={styles.contaimain}>
        <div className={styles.background}>
          
          {dog.length > 0 ? 
        <div className={styles.general}>   
                <img  className={styles.image} src={dog[0].image} alt="woof" width="400" height="400" />
                
        <div className={styles.dogdetail}>
        
        <h1 className={styles.consigna}> Name :</h1>
        <h2 className={styles.consigna}> Life Temp :</h2>
        <h2 className={styles.consigna}>Temperaments :</h2>
        <h2 className={styles.consigna}> Weight : KG</h2>
        <h2 className={styles.consigna}> Height : CM</h2>
        <h2 className={styles.consigna}> Breed Group : </h2>
        
        <div className={styles.contain}> 
        <h2 className={styles.data}>{dog[0].name ? dog[0].name : <span className={styles.barra}>----</span> } </h2> 
        <h2 className={styles.data}> {dog[0].life_span ? dog[0].life_span : <span className={styles.barra}>----</span>  } </h2>
         <h2 className={styles.data}>{typeof dog[0].temperaments === "string" ? dog[0].temperaments :  Array.isArray(dog[0].temperaments) ? dog[0].temperaments[0] :  <span className={styles.barra}>----</span>  }</h2> 
        <h2 className={styles.data}> {dog[0].weight_min ? dog[0].weight_min : <span className={styles.barra}>----</span> } - {dog[0].weight_max ? dog[0].weight_max : <span className={styles.barra}>----</span> }</h2>
        <h2 className={styles.data}> {dog[0].height_min ? dog[0].height_min : <span className={styles.barra}>----</span> } - {dog[0].height_max ? dog[0].height_max : <span className={styles.barra}>----</span> } - </h2>
         <h2 className={styles.data}>{dog[0].breed_group ? dog[0].breed_group : <span className={styles.barra}>----</span>}</h2> 
        </div>
        </div>
          </div>
    
        : <div> <h1 className={styles.consigna2}>LOADING...</h1> </div> }
        
        </div>
        </div>
        <Footer/>
        </div>
        </>
        )
}