import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getDetails , deleteDetails} from "../../redux/Actions/index";
import { Link } from "react-router-dom";
import styles from "../DogDetail/DogDetail.module.css";
import Logo from "../NavBar/assets/perro1.png";


export default function DogDetail(props) {
 /*   const dispatch = useDispatch();
    const dog = useSelector((state) => state.dogDetail)
   // const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        dispatch(getDogs(props.match.params.id));
        return dispatch(clearDetail())
    },[]);
*/  const dispatch = useDispatch();

useEffect(() => {
    dispatch(getDetails(props.params.id));
    return () => dispatch(deleteDetails());
  }, [dispatch, props.params.id]);

  const myDog = useSelector((state) => state.details);

    return(
       <>
       <div className={styles.NavBar}>
        <div>
          <Link to="/home" >
            <img id="logoFranco" src={Logo} className={styles.Logo} alt=''/>
          </Link>
        </div>
        <div >
        <span  className={styles.boton_neon}>The Dog Detail</span>
        </div>
        <div className={styles.title}>
         <span  className={styles.boton_neon}>The Dogs API</span>
        </div>
       
        </div>
        
        <div className={styles.span}></div>
        


        {myDog ? (
        <div key={myDog.id} className={styles.bodix}>
          <div className={styles.mainContainer}>
            <h2 className={styles.mainTitle}>{myDog.name}</h2>
            <img src={myDog.image} alt={myDog.name} className={styles.image} />
            <div className={styles.detailsContainer}>
              {myDog.breed_group ? (
                <div className={styles.breed_group}>
                  <div className={styles.imageSection}>
                    <img
                      src=""
                      alt="a tiny svg dog"
                      className={styles.detailsSVG}
                    />
                  </div>
                  <div className={styles.infoSection}>
                    <h3>Breed group: </h3>
                    <p>{myDog.breed_group}</p>
                  </div>
                </div>
              ) : (
                ""
              )}
              <div className={styles.life_span}>
                <div className={styles.imageSection}>
                  <img
                    src=""
                    alt="a tiny svg dog"
                    className={styles.detailsSVG}
                  />
                </div>
                <div className={styles.infoSection}>
                  <h3>Life span: </h3>
                  <p>{myDog.life_span}</p>
                </div>
              </div>
              <div className={styles.weights}>
                <div className={styles.imageSection}>
                  <img
                    src=""
                    alt="a tiny svg dog"
                    className={styles.detailsSVG}
                  />
                </div>
                <div className={styles.infoSection}>
                  <h3>Weight: </h3>
                  <p>Min: {myDog.weight_min}</p>
                  <p>Max: {myDog.weight_max}</p>
                </div>
              </div>
              <div className={styles.heights}>
                <div className={styles.imageSection}>
                  <img
                    src=""
                    alt="a tiny svg bone"
                    className={styles.detailsSVG}
                  />
                </div>
                <div className={styles.infoSection}>
                  <h3>Height: </h3>
                  <p>Min: {myDog.height_min}</p>
                  <p>Max: {myDog.height_max}</p>
                </div>
              </div>
              <br />
              <div className={styles.temperament}>
                <div className={styles.infoSection}>
                  {
                    <div>
                      <h3>Temperament: </h3>
                      <p>
                        {myDog.createdInDB
                          ? myDog.temperaments.map((el) => el.name).join(", ")
                          : myDog.temperament}
                      </p>
                    </div>
                  }
                </div>
              </div>
            </div>
            <Link to="/home">
              <button className={styles.button}>Back</button>
            </Link>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
}

/*  DESPUES DEL LINK  {Object.keys(dog).length ? -*/
/* antes del ultimo div---    : <div>  </div> }*/

/* {dog[0].name}
{dog[0].lifeTime}
{dog[0].weight_min} - {dog[0].weight_max}
 {dog[0].height}  
{dog[0].temperament}*/

/*{dog[0].image ? dog[0].image : dog[0].image =*/