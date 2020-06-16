import { CUSTOMER_FETCH, CustomerActionTypes } from './types/actionTypes';

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
