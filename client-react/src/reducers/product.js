import {
    LOAD_PRODUCT_SUCCESS,
    LOAD_PRODUCT_FAILURE,

    ADD_DATA,
    ADD_DATA_SUCCESS,
    ADD_DATA_FAILURE
} from "../constants/actiontype"

const products = (state = [], action) => {

    switch(action.type) {
        case ADD_DATA:
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    description: action.description,
                    brand: action.brand,
                    price: action.price,
                    detail: action.detail,
                    vote: action.vote,
                    testimonials: action.testimonials,
                    rate: action.rate,
                    colors: action.colors,
                    capacities: action.capacities
                }
            ]
        default:
            return state
    }

}

export default products