import axios from 'axios';

let initialState = 
   [
    { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
    { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
    { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 },
    { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 },
    { name: 'Apples', category: 'food', price: .99, inStock: 500 },
    { name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
    { name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
  ]

function productsReducer(state = initialState, action){
  const {type, payload} = action;

  switch(type){
    case 'ACTIVE':
      return initialState.filter(product=> product.category === payload);

    default :
      return state;
  }

}

export const showProducts = (product) => {
  return {
    type: 'ACTIVE',
    payload: product,
  }
}

export const getProducts = () => async (dispatch, getState) => {
  let response = await axios.get(`https://api-js401.herokuapp.com/api/v1/products`);
  dispatch(setProducts(response.data.results));
};

export const setProducts = (data) => {
  return {
    type: 'GET_PRODUCTS',
    payload: data,
  }
}

export default productsReducer;