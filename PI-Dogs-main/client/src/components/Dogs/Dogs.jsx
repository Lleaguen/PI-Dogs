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
       
        <div className={styles.pagination}></div>
        {
          
          currentDogs.map((el) => { 
            return  (
          <Card
            key={el.id}
            id={el.id}
            name={el.name}
            image={el.image}
            temperament={el.temperament}
            temperaments={el.temperaments}
          />

        )})
        }
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