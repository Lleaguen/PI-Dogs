import React from "react";
import { Fragment } from "react";
import Filter from "../Filter/Filter";
import Dogs from "../Dogs/Dogs";
import NavBar from "../NavBar/NavBar.jsx";
import Footer from "../Footer/Footer";
import styles from './Home.module.css'
import {  useSelector } from "react-redux";

export default function Home() {
  const alldogs = useSelector((state) => state.allDogs);
  




  return (
    <Fragment>
      <NavBar />
      <div className={styles.mainContainer}>
        <Filter />
        <div>
        {
          alldogs.length > 0 ? 
        <div>
       
        <Dogs /></div> 
        : <div className={styles.contain}> <h1 className={styles.consigna2}>LOADING...</h1></div> }</div>
        <Footer />
      </div>
    </Fragment>
  );
}

//        <Filter />
/*-<Filter />
        <Dogs />*/