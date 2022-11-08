import axios from "axios";
export const GET_ALL_TEMPERAMENTS = 'GET_ALL_TEMPERAMENTS';
export const FILTER_BY_TEMPERAMENTS = 'FILTER_BY_TEMPERAMENTS';
export const FILTER_BY_BREEDS = 'FILTER_BY_BREEDS';
export const CLEAR_DETAIL = 'CLEAR_DETAIL';
export const FILTER_CREATED_DOG = 'FILTER_CREATED_DOG';


export function orderByName(payload) {
    return {
        type: 'ORDER_BY_NAME',
        payload
    }
}

export function orderByWeight(payload) {
    return {
        type: 'ORDER_BY_WEIGHT',
        payload
    }
}

export function getDogs() {
    return async function (dispatch) {
        var json = await axios.get('http://localhost:3001/dogs')
        return dispatch({
            type: 'GET_DOGS',
            payload: json.data
        })
    }
}

export function filterDogsByMAXWeight(payload) {
    return {
        type: 'FILTER_BY_MAX_WEIGHT',
        payload
    }
}
export function filterDogsByMAXHeight(payload) {
    return {
        type: 'FILTER_BY_MAX_HEIGHT',
        payload
    }
}

export function filterDogsByMINWeight(payload) {
    return {
        type: 'FILTER_BY_MIN_WEIGHT',
        payload
    }
}


export function filterDogsByMINHeight(payload) {
    return {
        type: 'FILTER_BY_MIN_HEIGHT',
        payload
    }
}
export function getDogsByName(name) {
    return async function (dispatch) {
        const { data } = await axios.get(`http://localhost:3001/dogs?name=${name}`);
        return dispatch({
            type: "GET_DOGS_BY_NAME",
            payload: data
        });
    };
}


export function getTemperaments() {
    return async function (dispatch) {
        var json = await axios.get('http://localhost:3001/temperaments')
        return dispatch({
            type: 'GET_ALL_TEMPERAMENTS',
            payload: json.data
        })
    }
}

export function postDog (payload){
 
    return async function (dispatch) {
        const response = await axios.post('http://localhost:3001/dogs', payload);
        return response;
    }
}


export function FilterByTemperament(payload) {
    return{
        type: FILTER_BY_TEMPERAMENTS,
        payload
    }
}

export function filterCreatedDog (payload) {
    return {
    type: FILTER_CREATED_DOG,
    payload
}
}
export function getDetails(id) {
    return async function (dispatch) {
        /* async await
            var json = await axios.get(`http://localhost:3001/dogs/${id}`)
            return dispatch({
                type: 'GET_DETAILS',
                payload: json.data
            })*/
        return fetch(`http://localhost:3001/dogs/${id}`)
        .then(res => res.json())
        .then(data => {
            dispatch({type: 'GET_DETAILS', payload:data})
        })
    }
}


export function getBreeds() {
    return async function (dispatch) {
        var json = await axios.get(`http://localhost:3001/breedGroups`);
        return dispatch({
            type: 'GET_BREEDS',
            payload: json.data
        });
    }
}
export function FilterByBreeds(payload) {
    return async function (dispatch) {
        try {
            var json = await axios.get(`http://localhost:3001/breedGroup?breedGroup=${payload}`);
            return dispatch({
                type: 'FILTER_BY_BREEDS',
                payload: json.data
            })
        } catch (error) {
            console.log(error, "Error on the filters in actions file")
        }
    }
}


export function resetDogs() {
    return{ 
     type: 'RESET_DOGS'
 }

}  


export function deleteDetails() {
       return{ 
        type: 'DELETE_DETAILS'
    }

}  

export function deleteDog(id){
    return async function (dispatch){
        try{
           await axios.delete(`/dogs/${id}`);
            return dispatch({
                type: 'DELETE_DOG',
                payload: id
            })
        } catch(error){
            alert('no se pudo borrar el perro')
        }
    }
}


export function clearDetail ()  {
    return {
        type : CLEAR_DETAIL
    }
}