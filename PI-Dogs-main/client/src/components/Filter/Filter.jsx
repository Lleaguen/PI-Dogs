
import React,{ useEffect, useState } from "react";
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
  filterDogsByMAXHeight,
   filterDogsByMINHeight,
    FilterByBreeds
} from "../../redux/Actions/index";
import styles from '../Filter/Filter.module.css';
import DarkMode from "../darkMode";
import './Filter.css';


export default function Filter() {
    const dispatch = useDispatch();
    
    const maldito =useSelector((state) =>  state.temperaments);
    const allDogs = useSelector((state) => state.allDogs);
    const brds = useSelector((state) => state.breeds);
  
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
  };
  function handleFilteredMAXHeight(e) {
    e.preventDefault();
    dispatch(filterDogsByMAXHeight(e.target.value));
  }
  function handleFilteredMINHeight(e) {
    e.preventDefault();
    dispatch(filterDogsByMINHeight(e.target.value));
  };
  
  function handleFilteredByBreed(e) {
    e.preventDefault();
    dispatch(FilterByBreeds(e.target.value));
  };

   const [isOpen, setIsOpen] = useState(false);
   
  return (
    <>
    <div className={styles.navToggle}>
        <div className={`toggle ${isOpen && 'open'}`}  onClick={ () => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>  
        <div className={styles.filt}>
          <span>Filters and Theme</span>
        </div>
      </div>
      <div className={styles.side}>
    <div className={`side ${isOpen && 'open'}`} id={isOpen && 'open'} >
      
        <div className={styles.sideBarHeader}>
          <h4 className={styles.header}>Theme</h4>
            
        <DarkMode/>
        </div>
        <hr className={styles.barra}/>
        <div className={styles.filters}>
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
          <h5 className={styles.filterHeader}>by weight</h5>
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
          <h5 className={styles.filterHeader}>Filter by temp</h5>

          
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
          <h5 className={styles.filterHeader}>Filter by breed</h5>
          <select style={{ fontFamily: 'fantasy'}} onChange={handleFilteredByBreed} className={styles.boton_filter}>
          <option hidden>Breeds</option>

          <option  style={{ fontFamily: 'fantasy'}} key={1+'e'} value='All'>All</option>
          {
                        brds.map(e => (
                            <option style={{ fontFamily: 'fantasy'}}  value={e} key={e}> {e} </option>
                        ))
                    }
          </select>
          </div>

        
        <div className={styles.filterSection}>
          <h5 className={styles.filterHeader}>Max weight</h5>
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
          <h5 className={styles.filterHeader}>Min weight</h5>
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
        <div className={styles.filterSection}>
          <h5 className={styles.filterHeader}>Max height</h5>
          <select style={{ fontFamily: 'fantasy'}} className={styles.boton_filter} onChange={(e) => handleFilteredMAXHeight(e)}>
            <option style={{ fontFamily: 'fantasy'}} defaultValue>All heights</option>
            {allDogsMaxWeights.map((height_max) => {
              return height_max ? (
                <option style={{ fontFamily: 'fantasy'}} value={height_max} key={height_max}>
                  {height_max} cm
                </option>
              ) : (
                ""
              );
            })}


          </select>
        </div>
        <div className={styles.filterSection}>
          <h5 className={styles.filterHeader}>Min height</h5>
          <select  style={{ fontFamily: 'fantasy'}} className={styles.boton_filter} onChange={(e) => handleFilteredMINHeight(e)}>
            <option  style={{ fontFamily: 'fantasy'}} value="all">All Weights</option>
            {allDogsMinWeights.map((height_min) => {
              return height_min ? (
                <option style={{ fontFamily: 'fantasy'}} value={height_min} key={height_min}>
                  {height_min} cm
                </option>
              ) : (
                ""
              );
            })}

          </select>
        </div>
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
      </div>
      <div className={styles.span}></div>
    </>
  );
}