import { React, useEffect } from "react";
import { useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import {
  getDogs,
  getTemperamentsList,
 // filterDogsByTemperament,
  orderByName,
  filterCreated,
  filterDogsByMAXWeight,
  filterDogsByMINWeight,
  orderByWeight
} from "../../redux/Actions/index";
import styles from '../Filter/Filter.module.css';

export default function Filter() {
    const dispatch = useDispatch();
 
    useEffect(() => {
      dispatch(getDogs());
      dispatch(getTemperamentsList());
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
      dispatch(filterCreated(e.target.value));
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
            }}
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
            }} 
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
                }}
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
          <select style={{ fontFamily: 'fantasy'}} onChange="" /*{(e) => handleFilteredByTemp(e)}*/>
            <option  style={{ fontFamily: 'fantasy'}} value="all">All Temperaments</option>
           
            
          </select>
        </div>
       
        <div className={styles.filterSection}>
          <h5 className={styles.filterHeader}>Filter by max weight</h5>
          <select style={{ fontFamily: 'fantasy'}} onChange={(e) => handleFilteredMAXWeight(e)}>
            <option style={{ fontFamily: 'fantasy'}} value="all">All Weights</option>
              


          </select>
        </div>
        <div className={styles.filterSection}>
          <h5 className={styles.filterHeader}>Filter by min weight</h5>
          <select  style={{ fontFamily: 'fantasy'}} onChange={(e) => handleFilteredMINWeight(e)}>
            <option  style={{ fontFamily: 'fantasy'}} value="all">All Weights</option>
           

          </select>
        </div>
        
        <hr className={styles.barra}/>
        <div className={styles.filterSection}>
          
          <h5 className={styles.filterHeader}>Add a Woof</h5>
          <div className={styles.addDog}>
            <Link to="/newDog/" className={styles.tooltip}>
              <span className={styles.tooltiptext}>🐕🐕 Add your Woof 🐕🐕</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}