import {
    LOAD_DETAIL_FAILURE,
    LOAD_DETAIL_SUCCESS,

    ADD_RATE,
    ADD_RATE_SUCCESS,
    ADD_RATE_FAILURE,

    ADD_VOTE,
    ADD_VOTE_SUCCESS,
    ADD_VOTE_FAILURE,

} from "../constants/actiontype"

const details = (state = {}, action) => {

    switch (action.type) {
        case LOAD_DETAIL_SUCCESS:
            return {
                ...state,
                product: action.product
            }

        case ADD_RATE:
            return {
                ...state,
                rate: ((state.product.rate * state.product.testimonials.length + action.rate) / [...state.product.testimonials, action.testimonials].length),
                testimonials: ([...state.product.testimonials, action.testimonials])
            }

        // case ADD_RATE_FAILURE:
        //     return {
        //         ...state,
        //         rate: ((state.product.rate * state.product.testimonials.length ))
        //     }

        case ADD_VOTE:
            return {
                ...state,
                vote: state.product.vote + 1
            }

        case ADD_VOTE_FAILURE:
            return {
                ...state,
                vote: state.product.vote - 1
            }

        case ADD_VOTE_SUCCESS:
        case ADD_RATE_SUCCESS:
        case LOAD_DETAIL_FAILURE:
        default:
            return state
    }
}   