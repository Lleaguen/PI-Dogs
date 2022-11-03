import axios from "axios";
export const GET_ALL_TEMPERAMENTS = 'GET_ALL_TEMPERAMENTS';
export const FILTER_BY_TEMPERAMENTS = 'FILTER_BY_TEMPERAMENTS';
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

export function filterDogsByMINWeight(payload) {
    return {
        type: 'FILTER_BY_MIN_WEIGHT',
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
        type: 'FILTER_BY_TEMPERAMENTS',
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
        try {
            var json = await axios.get(`http://localhost:3001/dogs/:${id}`)
            return dispatch({
                type: 'GET_DETAILS',
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}


export function deleteDetails() {
    return async function (dispatch){
    return dispatch({
        type: 'DELETE_DETAILS'
    })
}
}

export function clearDetail ()  {
    return {
        type : CLEAR_DETAIL
    }
}