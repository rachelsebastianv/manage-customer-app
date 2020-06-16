import { ICustomers, CUSTOMER_FETCH, CUSTOMER_FETCH_SUCCESS, CUSTOMER_FETCH_FAILED, CustomerActionTypes } from "../actions/types/actionTypes";


export const initialState: ICustomers = {
    results: [],
    loading: false
}

export const customerReducer = (state = initialState, action: CustomerActionTypes) => {
    switch (action.type) {

        case CUSTOMER_FETCH:
            return {
                ...state,
                loading: true
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


        default:
            return { ...state };
    }
}