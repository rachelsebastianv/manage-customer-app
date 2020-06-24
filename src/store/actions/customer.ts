import { CUSTOMER_FETCH, CustomerActionTypes, CUSTOMER_DELETE } from './types/actionTypes';

// export function fetchCustomer(): CustomerActionTypes {
//   return {
//     type: CUSTOMER_FETCH
//   }
// }



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
