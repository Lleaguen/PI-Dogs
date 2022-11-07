import React from "react";
import { Fragment } from "react";
import Filter from "../Filter/Filter";
import Dogs from "../Dogs/Dogs";
import NavBar from "../NavBar/NavBar.jsx";
import Footer from "../Footer/Footer";
import styles from './Home.module.css'

export default function Home() {
  return (
    <Fragment>
      <NavBar />
      <div className={styles.mainContainer}>
        <Filter />
        <Dogs />
        <Footer />
      </div>
    </Fragment>
  );
}

//        <Filter />
/*-<Filter />
        <Dogs />*/