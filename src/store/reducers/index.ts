import { combineReducers } from 'redux';
import { customerReducer } from './customer'



// export const allReducers = customerReducer;

// export const rootReducer = combineReducers(allReducers);
export const rootReducer = customerReducer;
// export { rootReducer };
// export default rootReducer;