import { ICustomers, CUSTOMER_FETCH, CUSTOMER_FETCH_SUCCESS,
     CUSTOMER_FETCH_FAILED, CustomerActionTypes, CUSTOMER_DELETE, ICustomer, CUSTOMER_DELETE_SUCCESS } from "../actions/types/actionTypes";


export const initialState: ICustomers = {
    results: [],
    loading: false
}

export const customerReducer = (state = initialState, action: CustomerActionTypes): ICustomers => {
    switch (action.type) {

        case CUSTOMER_DELETE:
        case CUSTOMER_FETCH:
            return {
                ...state,
                loading: true
            }

        case CUSTOMER_DELETE_SUCCESS: {
            // const otherCustomers = state.results.filter(
            //     // action.value = the id of the customer
            //     (customer: ICustomer) => customer.id !== action.payload
            // );
            // Remove customer from the list
            return {
                ...state,
                results: state.results.filter(
                    // action.value = the id of the customer
                    (customer: ICustomer) => customer.id !== action.payload
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

        default:
            return { ...state };
    }
}