
import React,{ useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";
import {
  getDogs,
  getTemperaments,
  FilterByTemperament,
  orderByName,
  filterCreatedDog,
  filterDogsByMAXWeight,
  filterDogsByMINWeight,
  orderByWeight
} from "../../redux/Actions/index";
import styles from '../Filter/Filter.module.css';

export default function Filter() {
    const dispatch = useDispatch();
    
    const temperaments =useSelector((state) =>  state.temperaments);
    const allDogs = useSelector((state) => state.allDogs);
  
  const minWeights = allDogs
    .map((el) => el.weight_min)
    .sort(function (a, b) {
      return a - b;
    });
  const allDogsMinWeights = [...new Set(minWeights)];
  
  const maxWeights = allDogs
    .map((el) => el.weight_max)
    .sort(function (a, b) {
      return a - b;
    });
  const allDogsMaxWeights = [...new Set(maxWeights)];

  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemperaments());
  }, [dispatch]);
  
  function handleClickOrder(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
  }
  function handleClickOrderWeight(e) {
    e.preventDefault();
    dispatch(orderByWeight(e.target.value));
  }
  function handleFilterCreated(e) {
    dispatch(filterCreatedDog(e.target.value));
  }
  function handleFilteredByTemp(e) {
    e.preventDefault();
        dispatch(FilterByTemperament(e.target.value))
  }
  function handleFilteredMAXWeight(e) {
    e.preventDefault();
    dispatch(filterDogsByMAXWeight(e.target.value));
  }
  function handleFilteredMINWeight(e) {
    e.preventDefault();
    dispatch(filterDogsByMINWeight(e.target.value));
  }
  return (
    <>
      <div className={styles.side}>
        <div className={styles.sideBarHeader}>
          <h4 className={styles.header}>Find by Filter</h4>
            <span className={styles.header}>🐕🐕🐕🐕</span>
         
        </div>
        <hr className={styles.barra}/>
        <div className={styles.filterSection}>
          <h5 className={styles.filterHeader}>Order by name</h5>
          <select style={{ fontFamily: 'fantasy'}}
            onChange={(e) => {
              handleClickOrder(e);
            }} className={styles.boton_neon}
          >
            <option defaultValue value="all" hidden>
              Order
            </option>
            <option  style={{ fontFamily: 'fantasy'}} value="asc">A - Z</option>
            <option  style={{ fontFamily: 'fantasy'}} value="desc">Z - A</option>
          </select>
        </div>
        
        <div className={styles.filterSection}>
          <h5 className={styles.filterHeader}>Order by weight</h5>
          <select style={{ fontFamily: 'fantasy'}}
            onChange={(e) => {
              handleClickOrderWeight(e);
            }} className={styles.boton_neon}
          >
            <option defaultValue value="all" hidden>
              Order
            </option>
            <option  style={{ fontFamily: 'fantasy'}} value="asc">Heaviest 1º</option>
            <option style={{ fontFamily: 'fantasy'}} value="desc">Lightest 1º</option>
          </select>
        </div>
        <div className={styles.filterSection}>
          <h5 className={styles.filterHeader}>Filter by source</h5>
          <select style={{ fontFamily: 'fantasy'}}
            onChange={(e) => {
                  handleFilterCreated(e);
                }} className={styles.boton_neon}
              >
            <option  style={{ fontFamily: 'fantasy'}} defaultValue value="all">
              All Sources 🐶
            </option>
            <option style={{ fontFamily: 'fantasy'}} value="created">Yours 🐶</option>
            <option style={{ fontFamily: 'fantasy'}} value="inApi">Oth 🐶</option>
          </select>
        </div>
        <div className={styles.filterSection}>
          <h5 className={styles.filterHeader}>Filter by temperament</h5>

          
          <select style={{ fontFamily: 'fantasy'}} className={styles.boton_neon} onChange={(e) => handleFilteredByTemp(e)}>
           
            <option  style={{ fontFamily: 'fantasy'}} key={1+'el'} value='All'>All</option>
                    {
                        temperaments.map(temp => (
                            <option value={temp.name} key={temp.id}> {temp.name} </option>
                        ))
                    }
          </select>
        </div>
       
        <div className={styles.filterSection}>
          <h5 className={styles.filterHeader}>Filter by max weight</h5>
          <select style={{ fontFamily: 'fantasy'}} className={styles.boton_neon} onChange={(e) => handleFilteredMAXWeight(e)}>
            <option style={{ fontFamily: 'fantasy'}} defaultValue>All Weights</option>
            {allDogsMaxWeights.map((maxWeight) => {
              return maxWeight ? (
                <option value={maxWeight} key={maxWeight}>
                  {maxWeight} kg
                </option>
              ) : (
                ""
              );
            })}


          </select>
        </div>
        <div className={styles.filterSection}>
          <h5 className={styles.filterHeader}>Filter by min weight</h5>
          <select  style={{ fontFamily: 'fantasy'}} className={styles.boton_neon} onChange={(e) => handleFilteredMINWeight(e)}>
            <option  style={{ fontFamily: 'fantasy'}} value="all">All Weights</option>
            {allDogsMinWeights.map((minWeight) => {
              return minWeight ? (
                <option value={minWeight} key={minWeight}>
                  {minWeight} kg
                </option>
              ) : (
                ""
              );
            })}

          </select>
        </div>
        
        <hr className={styles.barra}/>
        <div className={styles.filterSection}>
          
          <h5 className={styles.filterHeader}>Add a Woof</h5>
          <div className={styles.addDog}>
            <Link to="/create/" className={styles.tooltip}>
            <button type="button" className={styles.boton_neon}>
        
        <span>Create a Dog</span>
</button>
            </Link>
          </div>
        </div>
        
      </div>
      
      <div className={styles.span}></div>
    </>
  );
}