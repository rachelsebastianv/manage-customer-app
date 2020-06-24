import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { rootReducer }    from './reducers';
import { rootSaga } from './sagas';

const composeEnhancers =
  process.env.NODE_ENV === "development"
  // @ts-ignore
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
    : null || compose;

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);