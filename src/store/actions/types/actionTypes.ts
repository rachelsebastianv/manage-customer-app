export const CUSTOMER_FETCH = 'CUSTOMER_FETCH';
export const CUSTOMER_FETCH_SUCCESS = 'CUSTOMER_FETCH_SUCCESS';
export const CUSTOMER_FETCH_FAILED = 'CUSTOMER_FETCH_FAILED';
export const CUSTOMER_CREATE = 'CUSTOMER_CREATE';
export const CUSTOMER_CREATE_SUCCESS = 'CUSTOMER_CREATE_SUCCESS';
export const CUSTOMER_CREATE_FAILED = 'CUSTOMER_CREATE_FAILED';
export const CUSTOMER_DELETE = 'CUSTOMER_DELETE';
export const CUSTOMER_DELETE_SUCCESS = 'CUSTOMER_DELETE_SUCCESS';
export const CUSTOMER_ADD = 'CUSTOMER_ADD';
export const CUSTOMER_ADD_SUCCESS = 'CUSTOMER_ADD_SUCCESS';
export const CUSTOMER_EDIT = 'CUSTOMER_EDIT';
export const CUSTOMER_EDIT_SUCCESS = 'CUSTOMER_EDIT_SUCCESS';

export interface Customer {
    id: string,
    first_name: string,
    last_name: string,
    dob: string
}

export interface State {
    results: Customer[],
    loading: boolean
}

export interface FetchCustomerAction {
    type: typeof CUSTOMER_FETCH,
    payload?: any
}

export interface DeleteCustomerAction {
    type: string,
    payload: any
}

export interface AddCustomerAction {
    type: string,
    payload: Customer
}

export type CustomerActionTypes = FetchCustomerAction | DeleteCustomerAction | AddCustomerAction;