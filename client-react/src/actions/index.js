import {
    LOAD_DATA_SUCCESS,
    LOAD_DATA_FAILURE,
    ADD_DATA,
    ADD_DATA_SUCCESS,
    ADD_DATA_FAILURE,
    DELETE_DATA,
    DELETE_DATA_SUCCESS,
    DELETE_DATA_FAILURE
} from "../constants/actiontype"

import axios from 'axios'

const API_URL = 'http://localhost:3001/api/'

const request = axios.create({
    baseURL: API_URL,
    timeout: 1000
});

export const addDataSuccess = () => ({
    type: ADD_DATA_SUCCESS
})

export const addDataFailure = (id) => ({
    type: ADD_DATA_FAILURE,
    id
})

export const addDataRedux = (id, title, description, brand, price, detail, vote, testimonial, rate, colors, capacities) => ({
    type: ADD_DATA,
    id,
    title,
    description,
    brand,
    price,
    detail,
    vote,
    testimonial,
    rate,
    colors,
    capacities
})

export const addData = (title, description, brand, price, detail, vote, testimonial, rate, colors, capacities) => {
    let id = Date.now();
    return dispatch => {
        dispatch(addDataRedux(id, title, description, brand, price, detail, vote, testimonial, rate, colors, capacities))
        return request.post('', { id, title, description, brand, price, detail, vote, testimonial, rate, colors, capacities })
        .then(response => {
            dispatch(addDataSuccess(response.data))
        }).catch(error => {
            dispatch(addDataFailure(id))
        })
    }
}
