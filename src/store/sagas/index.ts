import { all } from 'redux-saga/effects';
import { customerWatcherSaga } from './customer'

/**
 * Redux Saga Middleware used in this framework for Managing Side Effects or Unpredicatble Behaviors
 * eg Async Calls
 */
export function* rootSaga() {
  yield all([
    customerWatcherSaga()
  ]);
}