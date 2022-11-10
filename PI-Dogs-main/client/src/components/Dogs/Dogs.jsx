import React, { Fragment } from "react";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDogs } from "../../redux/Actions/index";
import styles from "./Dogs.module.css";

export default function Dogs() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.allDogs);
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage] = useState(8);
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);
  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  return (
    <Fragment>
     <div className={styles.dogsArea}>
       
        <div className={styles.showCards}></div>
        {
          
          currentDogs.map((el) => { 
            return  (
          <Card
            key={el.id}
            id={el.id}
            name={el.name}
            image={el.image}
            weight_min={el.weight_min}
            weight_max={el.weight_max}
            temperaments={el.temperaments}
            breed_group={el.breed_group}
            height_min={el.height_min}
            height_max={el.height_max}
          />

        )})
        }
       
      </div>
      <div className={styles.paginate}>
      <Pagination
          dogsPerPage={dogsPerPage}
          allDogs={allDogs.length}
          pagination={pagination}
          currentPage={currentPage}
        />
        </div>
    </Fragment>
  );
}