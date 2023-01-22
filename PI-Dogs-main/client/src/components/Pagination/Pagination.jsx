import styles from './Pagination.module.css'
import React from 'react';
export default function Pagination({dogsPerPage, allDogs, pagination, currentPage, setCurrentPage}) {
    const pageNumbers = []

    
    for (let i = 1; i <= Math.ceil(allDogs/dogsPerPage); i++) {
        pageNumbers.push(i)
    } 
    const nextHandler = () => {
        if (currentPage === 22) {
          setCurrentPage((currentPage = 1));
        } else {
          setCurrentPage(currentPage + 1);
        }
      };
      const prevHandler = () => {
        if (currentPage === 1) {
          setCurrentPage((currentPage = 22));
        } else {
          setCurrentPage(currentPage - 1);
        }
      }
    return(
        <nav>
            <ul className={styles.crumbs}>
            <button className={styles.crumb} onClick={prevHandler}> prev </button>
                {
                    pageNumbers&&
                    pageNumbers.map(number => (
                        <li className={styles.number} key={number}>
                            <div className={currentPage === number ? styles.crumb__active : styles.crumb} onClick={()=> pagination(number)}>{number}</div>
                        </li>
                    )).slice(currentPage, currentPage)
                }
                   <button className={styles.crumb} onClick={nextHandler}> next </button>
            </ul>
        </nav>
    )
};