import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogsByName } from "../../redux/Actions/index";
import Style from "./SearchBar.module.css";

export default function BarSearch(){
  const [dogState, setDogsState] = useState("");
  const dispatch = useDispatch();

  function handleClick(e){
    e.preventDefault();
  



  if(dogState.length === 0){
    return alert("Please input a name to start the search :3");
  }else{
    dispatch(getDogsByName(dogState));
    setDogsState("");
  }
}
  return(
    <div>
      <input type="text" className={Style.Search} style={{ fontFamily:'fantasy'}} placeholder="Search a dog..." value={dogState} onChange={(e) => setDogsState(e.target.value)} />
      <button type="submit" className={Style.button} onClick={handleClick} > 
      <span className={Style.molestia}></span>
      </button>
    </div>
  )
}
