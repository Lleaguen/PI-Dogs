
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
  orderByWeight,
  getBreeds,
  //FilterByBreeds
} from "../../redux/Actions/index";
import styles from '../Filter/Filter.module.css';
import DarkMode from "../darkMode";



export default function Filter() {
    const dispatch = useDispatch();
    
    const maldito =useSelector((state) =>  state.temperaments);
    const allDogs = useSelector((state) => state.allDogs);
  //  const brds = useSelector((state) => state.breeds);
  
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
    dispatch(getBreeds());
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
  };/*-
  function handleFilteredByBreed(e) {
    e.preventDefault();
    dispatch(FilterByBreeds(e.target.value));
  };---*/

  
   
  return (
    <>
    
    <div className={styles.side} id="light">
        <div className={styles.sideBarHeader}>
          <h4 className={styles.header}>Change Theme</h4>
            
        <DarkMode/>
        </div>
        <hr className={styles.barra}/>
        <div className={styles.filterSection}>
          <h5 className={styles.filterHeader}>Order by name</h5>
          <select style={{ fontFamily: 'fantasy'}}
            onChange={(e) => {
              handleClickOrder(e);
            }} className={styles.boton_filter}
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
            }} className={styles.boton_filter}
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
                }} className={styles.boton_filter}
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

          
          <select style={{ fontFamily: 'fantasy'}} className={styles.boton_filter} onChange={handleFilteredByTemp}>
            <option hidden>Temperament</option>
            <option  style={{ fontFamily: 'fantasy'}} key={1+'e'} value='All'>All</option>
                    {
                        maldito.map(e => (
                            <option style={{ fontFamily: 'fantasy'}} value={e.name} key={e.id}> {e.name} </option>
                        ))
                    }
          </select>
        </div>
       
        <div className={styles.filterSection}>
          <h5 className={styles.filterHeader}>Filter by max weight</h5>
          <select style={{ fontFamily: 'fantasy'}} className={styles.boton_filter} onChange={(e) => handleFilteredMAXWeight(e)}>
            <option style={{ fontFamily: 'fantasy'}} defaultValue>All Weights</option>
            {allDogsMaxWeights.map((maxWeight) => {
              return maxWeight ? (
                <option style={{ fontFamily: 'fantasy'}} value={maxWeight} key={maxWeight}>
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
          <select  style={{ fontFamily: 'fantasy'}} className={styles.boton_filter} onChange={(e) => handleFilteredMINWeight(e)}>
            <option  style={{ fontFamily: 'fantasy'}} value="all">All Weights</option>
            {allDogsMinWeights.map((minWeight) => {
              return minWeight ? (
                <option style={{ fontFamily: 'fantasy'}} value={minWeight} key={minWeight}>
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
/*

<div className={styles.filterSection}>
<h5 className={styles.filterHeader}>Filter by breed</h5>
<select style={{ fontFamily: 'fantasy'}} onChange={handleFilteredByBreed} className={styles.boton_filter}>
<option hidden>Breeds</option>

<option  style={{ fontFamily: 'fantasy'}} key={1+'e'} value='All'>All</option>
{
              brds.map(e => (
                  <option style={{ fontFamily: 'fantasy'}}  value={e} > {e} </option>
              ))
          }
</select>
</div>
*/