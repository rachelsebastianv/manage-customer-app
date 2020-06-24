import { CUSTOMER_FETCH, CustomerActionTypes, CUSTOMER_DELETE, CUSTOMER_ADD, CUSTOMER_EDIT, Customer } from './types/actionTypes';

export const fetchCustomer = (): CustomerActionTypes => {
  return {
    type: CUSTOMER_FETCH
  }
}

export const deleteCustomer = (id: number): CustomerActionTypes => {
  return {
    type: CUSTOMER_DELETE,
    payload: id
  }
}

export const addCustomer = (customer: Customer): CustomerActionTypes => {
  return {
    type: CUSTOMER_ADD,
    payload: customer
  }
}

export const editCustomer = (customer: Customer): CustomerActionTypes => {
  return {
    type: CUSTOMER_EDIT,
    payload: customer
  }
}
