import React, {useEffect, useState, Fragment} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {postDog, getTemperaments } from "../../redux/Actions/index";
import style from './DogCreate.module.css'
import NavBar from "../NavBar/NavBar.jsx";
import Footer from "../Footer/Footer"




export default function CreateDog () {





const validate = (input) => {
    let errors = {}
    if(!input.name){
        errors.name = 'Must be a name'
    }

    
  
    if(input.name && !/^[a-zA-Z]*$/.test(input.name)){
        errors.name = 'The name can not contain numbers or special caracters'
    }

    if(!input.height_min || input.height_min <= 0){
        errors.height_min = 'The min height must be bigger'
    }
    if(!input.height_max || input.height_max <= 0){
        errors.height_max = 'The max height must be bigger'
    }

    if(parseInt(input.height_min) >= parseInt(input.height_max)){
        errors.especial1 = 'The height min can not be bigger or equal than the max height'
    }

    if(parseInt(input.weight_min) >= parseInt(input.weight_max)){
        errors.especial2 = 'The weight min can not be bigger or equal than the max weight'
    }


    if(input.height){
        if (!/^[0-9]*$/){
            errors.height = 'It must be only numbers'
        }
    }
    if (!input.weight_min || input.weight_min <= 0){
        errors.weight_min = 'The min weight must be bigger'
    }

    if(input.weight_min){
        if(input.weight_max){
            if (!/^[0-9]*$/) {
                errors.weight_min = 'It must be only numbers'
            }
        }
    }
    
    if (!input.weight_max || input.weight_max <= 0){
        errors.weight_max = 'The max weight must be bigger'
    }
    if(input.weight_max){
        if (!/^[0-9]*$/) {
            errors.weight_max = 'It must be only numbers'
        }
    }

    if (!input.life_span || input.life_span <= 0){
        errors.life_span = 'The life span must be grather'
    }
    if(input.life_span){
        if (!/^[0-9]*$/) {
            errors.life_span = 'It must be only numbers'
        }
    }
    if(!input.image){
        errors.image = 'Must be a image'
    }

    return errors

}
    const dispatch = useDispatch();

    const history = useHistory();

    const allTemperaments = useSelector((state) => state.temperaments);
    
    const allDogs = useSelector((state)=> state.allDogs);

    const [errors , setErrors] = useState({});

    const [input, setInput] = useState({
        name : "",
        height_min:0,
        height_max:0,
        weight_min:0,
        weight_max:0,
        life_span:0,
        image : "",
        temperament:[]
    })

    const handleChange = (e) =>{
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
        
        setErrors(validate({
            ...input,
            [e.target.name] : e.target.value
        }))
    }

    useEffect(() => {
        dispatch(getTemperaments()) 
    },[dispatch])

    const handleSelect = (e) => {
            if(!input.temperament.includes(e.target.value)){
                setInput({
                    ...input,
                    temperament : [...input.temperament, e.target.value]
                })
            }
    }


    const handleSubmit = (e) =>{
        e.preventDefault()
        if(input.name === allDogs){
            errors.name = 'This name already exist'
        }  else{
        dispatch(postDog(input))

        setInput({
            name: "",
            height_min: 0,
            height_max: 0,
            weight_min: 0,
            weight_max: 0,
            life_span: 0,
            image:"",
            temperament: []
        })
        history.push('/home')
        
    }
}
    const handleErase = (e) => {
        setInput({
            ...input,
            temperament : input.temperament.filter(d => d !== e)
        })
    }

    return(
      <>
      <NavBar />
      <div className={style.box}>
        <div className={style.background}>
            
            <div className={style.titulo}>
                <h2 className={style.fontsTittle}>
                    CREATE DOG
                </h2>
            </div>

        <div className= {style.contenedor}>
                    
            <form className= {style.formStyle} onSubmit={e => handleSubmit(e)} >

        <div className = {style.items}>
            <h3 className={style.fonts}>NAME:</h3>
            <input required className={style.numInput} type='text' value={input.name} name="name"  onChange={e => handleChange(e)} />
            <h2 className={style.errorStyle}>
             {errors.name && (<p> {errors.name} </p>)}
            </h2>
        </div>

        <div className = {style.items}>
            <h3 className={style.fonts}>MIN HEIGHT:</h3>
            <input min='0'  className={style.numInput} type='number' value={input.height_min} name='height_min' onChange = { e => handleChange(e)}  />
            <h2 className= {style.errorStyle}>
            {errors.height_min && (<p> {errors.height_min} </p>)}
            </h2>
        </div>

        <div className = {style.items}>
            <h3 className={style.fonts}>MAX HEIGHT:</h3>
            <input  min='0' className={style.numInput} type='number' value={input.height_max} name='height_max' onChange = { e => handleChange(e)}  />
            <h2 className= {style.errorStyle}>
            {errors.height_max && (<p> {errors.height_max} </p>)}
            </h2>

        </div>

        <div className = {style.items}>
        <h3 className={style.fonts}>MIN WEIGHT: </h3>
        <input  min='0' className={style.numInput} type='number' value={input.weight_min} name="weight_min" onChange={e => handleChange(e)} />
               
            <h2 className= {style.errorStyle}>
            {errors.weight_min && (<p> {errors.weight_min} </p>)}
            </h2>

        </div>

        <div className = {style.items}>
        <h3 className={style.fonts} >MAX WEIGHT: </h3>
        <input min='0' className={style.numInput} type='number' value={input.weight_max} name="weight_max" onChange={e => handleChange(e)} />
        <h2 className= {style.errorStyle}>
            {errors.weight_max && (<p> {errors.weight_max} </p>)}
            </h2>
            
        </div>
        <div className={style.items}>
              <label className={style.fonts}>Image URL:</label>
              <input className={style.numInput} type="url" value={input.image} name="image" placeholder="http://myimageontheweb.com" onChange={(e) => handleChange(e)} />
              <h2 className= {style.errorStyle}>
            {errors.image && (<p> {errors.image} </p>)}
            </h2>
        </div>
        <div className = {style.items}>
            <h3 className={style.fonts}>LIFE SPAN:</h3>
            <input min='0' className={style.numInput} type='number' value={input.life_span} name="life_span" onChange={e => handleChange(e)} />
              
            <h2 className= {style.errorStyle}>
            {errors.life_span && (<p> {errors.life_span} </p>)}
            </h2>

        </div>
        <div>

        </div>
            <div className = {style.items}>
                <h3 className={style.fonts}>TEMPERAMENTS</h3>
                <select  className={style.numInput} onChange={handleSelect} >
                    <option value='All'  selected defaultValue>Temperament</option>
                    {
                        allTemperaments.map(e => {
                            return (
                                <option value={e.name} key={e.id}>{e.name}</option>
                                )
                            })
                        }
                </select>
                <h2 className= {style.errorStyle}>
                {errors.temperament && (<p> {errors.temperament} </p>)}
                </h2>

            </div>

                {errors && 
                (errors.name ||
                errors.height_min ||
                errors.height_max ||
                errors.weight_min||
                errors.weight_max ||
                errors.life_span ||
                errors.especial1 ||
                errors.especial2 ||
                errors.image ||
                !input.name.length ||
                input.height_min <= 0||
                input.height_max <= 0||
                input.weight_min <= 0 ||
                input.weight_max <= 0 ||
                input.life_span <= 0 ||
                input.height_min >= input.height_max ||
                input.weight_min >= input.weight_max ||
                !input.image ||
                !input.temperament.length)
                ?
                <div></div>
                :
                <button className={style.numInput} type='submit'>CREATE</button>
                
             } 
                </form>
         
                  <div className= {style.moodDiv} >
                        {input.temperament.map((d , i) => {
                            return (
                                <div key={i++}>
                            <div className={style.numInput}> {d} </div>
                            <button className= {style.numInput} onClick={() => handleErase(d)}>X</button>
                            </div>
                                )
                            })
                        }
                        </div>
                 {!input.name ? <h1> </h1>:       
                <div className= {style.errorStyle}>
                <h2 className={style.fontErr}>ERRORS :</h2>
                <div>
                <div className= {style.errorStyle}> 

                    <h2 className= {style.errorStyle}>
                    {errors.especial1 && (<p> {errors.especial1} </p>)}
                    </h2>

                    <h2 className= {style.errorStyle}>
                    {errors.especial2 && (<p> {errors.especial2} </p>)}
                    </h2>

                </div>
                </div>
                </div>}
                </div>
            </div>
            <Footer/>
            </div>
            </>
    )
}