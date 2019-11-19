import {
    LOAD_PRODUCT_SUCCESS,
    LOAD_PRODUCT_FAILURE,

    ADD_DATA,
    ADD_DATA_SUCCESS,
    ADD_DATA_FAILURE,

    LOAD_DETAIL_FAILURE,
    LOAD_DETAIL_SUCCESS,


    ADD_VOTE,
    ADD_VOTE_SUCCESS,
    ADD_VOTE_FAILURE,

    ADD_RATE,
    ADD_RATE_SUCCESS,
    ADD_RATE_FAILURE,

    ADD_VOTE,
    ADD_VOTE_SUCCESS,
    ADD_VOTE_FAILURE,

} from "../constants/actiontype"

import axios from 'axios'
import Swal from "sweetalert2";

const API_URL = 'http://localhost:3001/api/'

const request = axios.create({
    baseURL: API_URL,
    timeout: 1000
});

// START LOAD ALL PRODUCTS
const loadProductSuccess = (products) => {
    return { type: LOAD_PRODUCT_SUCCESS, products }
}

const loadProductFailure = () => {
    return { type: LOAD_PRODUCT_FAILURE }
}

export const loadProduct = (fetch) => {
    return dispatch => {
        return request.get(`products/${fetch}`)
            .then(function (response) {
                if (response.data.status === 'SUCCESS')
                    dispatch(loadProductSuccess(response.data.productData));
                else {
                    dispatch(loadProductFailure());
                    Swal.fire({
                        icon: 'error',
                        title: 'Connection Lost',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            .catch(function (error) {
                console.log(error);
                dispatch(loadProductFailure());
                Swal.fire({
                    icon: 'error',
                    title: 'Connection Lost',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }
}

// START LOAD DETAIL
const loadProductDetailSuccess = (product) => {
    return { type: LOAD_DETAIL_SUCCESS, product }
}

const loadProductDetailFailure = () => {
    return { type: LOAD_DETAIL_FAILURE }
}

export const loadProductDetail = (id) => {
    return dispatch => {
        return request.get(`products/detail/${id}`)
            .then(function (response) {
                if (response.data.status === 'SUCCESS')
                    dispatch(loadProductDetailSuccess(response.data.productData));
                else {
                    dispatch(loadProductDetailFailure());
                    Swal.fire({
                        icon: 'error',
                        title: 'Connection Lost',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            .catch(function (error) {
                console.log(error);
                dispatch(loadProductDetailFailure());
                Swal.fire({
                    icon: 'error',
                    title: 'Connection Lost',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }
}

// START ADD VOTE
const voteProductRedux = (id, lastVoteSum) => {
    return { type: ADD_VOTE, id, vote: lastVoteSum }
}

const voteProductSuccess = () => {
    return { type: ADD_VOTE_SUCCESS }
}

const voteProductFailure = () => {
    return { type: ADD_VOTE_FAILURE }
}

export const voteProduct = (id, lastVoteSum) => {
    return dispatch => {
        dispatch(voteProductRedux(id, lastVoteSum));
        return request.put(`products/${id}`)
            .then(function (response) {
                if (response.data.status === 'SUCCESS')
                    dispatch(voteProductSuccess(id, lastVoteSum));
                else
                    dispatch(voteProductFailure());
                Swal.fire({
                    icon: 'error',
                    title: 'Connection Lost',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(function (error) {
                console.log(error);
                dispatch(voteProductFailure());
                Swal.fire({
                    icon: 'error',
                    title: 'Connection Lost',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }
}

// START ADD RATE
const rateProductRedux = (id, lastRate, newTestimonial) => {
    return { type: ADD_RATE, id, rate: lastRate, testimonials: newTestimonial }
}

const rateProductSuccess = () => {
    return { type: ADD_RATE_SUCCESS };
}

const rateProductFailure = () => {
    return { type: ADD_RATE_FAILURE };
}

export const rateProduct = (id, lastRate, newTestimonial) => {
    return dispatch => {
        dispatch(rateProductRedux(id, lastRate, newTestimonial));
        return request.put(`products/${id}`)
            .then(function (response) {
                if (response.data.status === 'SUCCESS')
                    dispatch(rateProductSuccess());
                else {
                    dispatch(rateProductFailure());
                    Swal.fire({
                        icon: 'error',
                        title: 'Connection Lost',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            .catch(function (error) {
                console.log(error);
                dispatch(rateProductFailure());
                Swal.fire({
                    icon: 'error',
                    title: 'Connection Lost',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }
}

// START ADD PRODUCT
export const addDataSuccess = () => ({
    type: ADD_DATA_SUCCESS
})

export const addDataFailure = (id) => ({
    type: ADD_DATA_FAILURE,
    id
})

const addDataRedux = (id, title, description, brand, price, detail, colors, capacities, file) => ({
    type: ADD_DATA,
    id,
    title,
    description,
    brand,
    price,
    detail,
    ...(colors instanceof Array && { colors: JSON.stringify(colors) }),
    ...(capacities instanceof Array && { capacities: JSON.stringify(capacities) }),
    // file:
    // colors: JSON.stringify(colors),
    // capacities: JSON.stringify(capacities)
})

export const addData = (title, description, brand, price, detail, colors, capacities, file) => {
    let id = Date.now();
    return dispatch => {
        dispatch(addDataRedux(id, title, description, brand, price, detail, colors, capacities, file))
        return request.post('products', { id, title, description, brand, price, detail, colors, capacities, file }).then(response => {
            dispatch(addDataSuccess(response.data.itemAdded))
        }).catch(error => {
            dispatch(addDataFailure(id))
        })
    }
}


