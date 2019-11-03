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

const todos = (state = [], action) => {

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

export default todos