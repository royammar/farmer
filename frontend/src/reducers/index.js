import { combineReducers } from 'redux';
import ProductReducer from './ProductReducer'
import UserReducer from './UserReducer'
import SystemReducer from './SystemReducer';

const rootReducer = combineReducers({
  system: SystemReducer,
  products: ProductReducer,
  user: UserReducer
})

export default rootReducer;