import {
    State, CUSTOMER_FETCH, CUSTOMER_FETCH_SUCCESS,
    CUSTOMER_FETCH_FAILED, CustomerActionTypes, CUSTOMER_DELETE, Customer, CUSTOMER_DELETE_SUCCESS, CUSTOMER_ADD,
    CUSTOMER_ADD_SUCCESS,
    CUSTOMER_EDIT,
    CUSTOMER_EDIT_SUCCESS
} from "../actions/types/actionTypes";


export const initialState: State = {
    results: [],
    loading: false
}

export const customerReducer = (state = initialState, action: CustomerActionTypes): State => {
    switch (action.type) {
        
        case CUSTOMER_ADD:
        case CUSTOMER_EDIT:
        case CUSTOMER_DELETE:
        case CUSTOMER_FETCH:
            return {
                ...state,
                loading: true
            }
        case CUSTOMER_DELETE_SUCCESS: {
            return {
                ...state,
                results: state.results.filter(
                    (customer: Customer) => customer.id !== action.payload
                ),
                loading: false
            }
        }
        case CUSTOMER_FETCH_SUCCESS:
            return {
                ...state,
                results: action.payload,
                loading: false
            }
        case CUSTOMER_FETCH_FAILED:
            return {
                ...state,
                results: [],
                loading: false
            }
        case CUSTOMER_ADD_SUCCESS:
        case CUSTOMER_EDIT_SUCCESS:
        default:
            return { ...state };
    }
}