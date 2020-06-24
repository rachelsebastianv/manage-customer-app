
import { customerReducer, initialState } from './customerReducer';
import { fetchCustomer } from '../actions/customerActions'
import { Customer,CUSTOMER_FETCH, CUSTOMER_FETCH_SUCCESS, CUSTOMER_FETCH_FAILED } from '../actions/types/actionTypes';




const customer: Customer = {
  id: '1',
  first_name: 'rac',
  last_name: 'seb',
  dob: '11/12/2013'
}
it('should return the initial state', () => {
  expect(customerReducer(initialState, { type: '' })).toEqual({results: [],
    loading: false});
});



it('should return the addProperty on saved list', () => {
  expect(customerReducer(initialState,fetchCustomer())).toEqual({results: [],
    loading: true});
});
