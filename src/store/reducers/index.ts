import { combineReducers } from 'redux';
import { customerReducer } from './customer'



export const allReducers = {
  customerReducer
};

export const rootReducer = combineReducers(allReducers);
// export { rootReducer };
// export default rootReducer;