import { call, put, takeLatest } from 'redux-saga/effects';

import axios from 'axios';
import { CUSTOMER_FETCH, CUSTOMER_FETCH_SUCCESS, CUSTOMER_FETCH_FAILED, CUSTOMER_DELETE, CustomerActionTypes, CUSTOMER_DELETE_SUCCESS } from '../actions/types/actionTypes';

export function* customerWatcherSaga() {
    yield takeLatest(CUSTOMER_FETCH, customerWorkerSaga);
    yield takeLatest(CUSTOMER_DELETE, customerDeleteSaga);
}


export function* customerWorkerSaga() {
    try {
        const response = yield call(fetchCustomerData);
        const payload = response.data;
        yield put({ type: CUSTOMER_FETCH_SUCCESS, payload });

    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put({ type: CUSTOMER_FETCH_FAILED, error });
    }
}

export function* customerDeleteSaga(action: CustomerActionTypes) {
    try {
        yield call(deleteCustomer, action.payload);
        const payload = action.payload;
        yield put({ type: CUSTOMER_DELETE_SUCCESS, payload });

    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put({ type: CUSTOMER_FETCH_FAILED, error });
    }
}
/**
 * Using Axios
 */
export function fetchCustomerData() {
    return axios({
        method: "get",
        url: " http://localhost:3004/customers"
    });
}
export function deleteCustomer(id: any) {
    return axios.delete(`http://localhost:3004/customers/${id}`)
}
