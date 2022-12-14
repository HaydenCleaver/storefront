import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import categoryReducer from './categories';
import productsReducer from './products';
import cartReducer from './cart';
import thunk from './middleware/thunk';

let reducers = combineReducers({

  categories: categoryReducer,
  products: productsReducer,
  cart: cartReducer,
    
});

export default function store(){
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}