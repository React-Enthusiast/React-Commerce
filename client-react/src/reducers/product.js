import {
    LOAD_PRODUCT_SUCCESS,
    LOAD_PRODUCT_FAILURE,

    ADD_DATA,
    ADD_DATA_SUCCESS,
    ADD_DATA_FAILURE,

} from "../constants/actiontype"

const products = (state = [], action) => {

    switch (action.type) {
        case LOAD_PRODUCT_SUCCESS:
            return action.products

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
        case LOAD_PRODUCT_FAILURE:
        default:
            return state
    }

}

export default products