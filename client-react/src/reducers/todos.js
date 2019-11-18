import {
    LOAD_DATA_SUCCESS,
    LOAD_DATA_FAILURE,
    ADD_DATA,
    ADD_DATA_SUCCESS,
    ADD_DATA_FAILURE,
    DELETE_DATA,
    DELETE_DATA_SUCCESS,
    DELETE_DATA_FAILURE,
    ADD_RATE_FAILURE
} from "../constants/actiontype"

const todos = (state = [], action) => {

    switch (action.type) {
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
                    colors: action.colors,
                    capacities: action.capacities
                }
            ]

        case ADD_DATA_SUCCESS:
            return state.map(data => {
                return data
            })

        case ADD_DATA_FAILURE:
        default:
            return state
    }

}

export default todos