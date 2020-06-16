
import * as action from './customer'
import { ICustomer, CUSTOMER_FETCH_SUCCESS, CUSTOMER_FETCH_FAILED } from './types/actionTypes';




const customer: ICustomer = {
  first_name: 'rac',
  last_name: 'seb',
  dob: '11/12/2013'
}


it('calls the clearSomethingInModal function', () => {

  const addMock = jest.spyOn(action, 'fetchCustomer');
  action.fetchCustomer();
  expect(addMock).toHaveBeenCalled();
})