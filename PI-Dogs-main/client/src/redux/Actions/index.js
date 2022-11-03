import axios from "axios";

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

export function getTemperamentsList() {
    return async function (dispatch) {
        var json = await axios.get('http://localhost:3001/temperament');
        var listOfTemperaments = json.data.map(el => el.name)
        return dispatch({
            type: 'GET_TEMPERAMENTS_LIST',
            payload: listOfTemperaments
        });
    }
}

export function postDog(data) {
    
        return async function () {
            const posted = await axios.post('/dogs', data);
            return posted
    
}}



export function filterDogsByTemperament(payload) {
    return async function (dispatch) {
        try {
            var json = await axios.get(`http://localhost:3001/dog/?temperament=${payload}`);
            return dispatch({
                type: 'GET_DOGS_BY_TEMP',
                payload: json.data
            })
        } catch (error) {
            console.log(error, "Error on the filters in actions file")
        }
    }
}

export function filterCreated(payload) {
    return {
        type: 'FILTER_CREATED',
        payload
    }
}

export function getDetails(id) {
    return async function (dispatch) {
        try {
            var json = await axios.get(`http://localhost:3001/dogs/${id}`)
            return dispatch({
                type: 'GET_DETAILS',
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}


/*export function deleteDetails() {
    return async function (dispatch){
    return dispatch({
        type: 'DELETE_DETAILS'
    })
}
}*/