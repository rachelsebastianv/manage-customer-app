import { call, put, takeLatest } from 'redux-saga/effects';

import axios from 'axios';
import { CUSTOMER_FETCH, CUSTOMER_FETCH_SUCCESS, CUSTOMER_FETCH_FAILED, CUSTOMER_DELETE, CUSTOMER_ADD, CUSTOMER_ADD_SUCCESS, CUSTOMER_EDIT, CustomerActionTypes, CUSTOMER_DELETE_SUCCESS, Customer, CUSTOMER_EDIT_SUCCESS } from '../actions/types/actionTypes';

export function* customerWatcherSaga() {
    yield takeLatest(CUSTOMER_FETCH, customerFetchSaga);
    yield takeLatest(CUSTOMER_DELETE, customerDeleteSaga);
    yield takeLatest(CUSTOMER_ADD, customerAddSaga);
    yield takeLatest(CUSTOMER_EDIT, customerEditSaga);
}


export function* customerFetchSaga() {
    try {
        const response = yield call(fetchCustomerData);
        const payload = response.data;
        yield put({ type: CUSTOMER_FETCH_SUCCESS, payload });

    } catch (error) {
        yield put({ type: CUSTOMER_FETCH_FAILED, error });
    }
}

export function* customerDeleteSaga(action: CustomerActionTypes) {
    try {
        yield call(deleteCustomerData, action.payload);
        const payload = action.payload;
        yield put({ type: CUSTOMER_DELETE_SUCCESS, payload });

    } catch (error) {
        yield put({ type: CUSTOMER_FETCH_FAILED, error });
    }
}

export function* customerAddSaga(action: CustomerActionTypes) {
    try {
        const response = yield call(addCustomerData, action.payload);
        const payload = response.payload;
        yield put({ type: CUSTOMER_ADD_SUCCESS, payload });

    } catch (error) {
        yield put({ type: CUSTOMER_FETCH_FAILED, error });
    }
}

export function* customerEditSaga(action: CustomerActionTypes) {
    try {
        const response = yield call(editCustomerData, action.payload);
        const payload = response.payload;
        yield put({ type: CUSTOMER_EDIT_SUCCESS, payload });

    } catch (error) {
        yield put({ type: CUSTOMER_FETCH_FAILED, error });
    }
}

export function fetchCustomerData() {
    return axios({
        method: "get",
        url: " http://localhost:3004/customers"
    });
}
export function deleteCustomerData(id: any) {
    return axios.delete(`http://localhost:3004/customers/${id}`)
}
export function addCustomerData (customer: Customer) {
    return axios.post(`http://localhost:3004/customers`, customer);
};
export function editCustomerData (customer: Customer) {
    return axios.patch(`http://localhost:3004/customers/${customer.id}`, customer);
};
