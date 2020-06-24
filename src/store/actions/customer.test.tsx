
import * as action from './customerActions'
import { Customer, CUSTOMER_FETCH_SUCCESS, CUSTOMER_FETCH_FAILED } from './types/actionTypes';

const customer: Customer = {
  id: '1',
  first_name: 'rac',
  last_name: 'seb',
  dob: '11/12/2013'
}


it('calls the clearSomethingInModal function', () => {

  const addMock = jest.spyOn(action, 'fetchCustomer');
  action.fetchCustomer();
  expect(addMock).toHaveBeenCalled();
})