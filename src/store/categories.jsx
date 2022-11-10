import axios from 'react';

const initialState = {
  categories: [
    { name: 'electronics', displayName: 'Electronics' },
    { name: 'food', displayName: 'Food' },
    { name: 'clothing', displayName: 'Clothing' },
  ],
  activeCategory: ''
}

function categoryReducer(state = initialState, action){
  const {type, payload} = action;

  switch(type){
    case 'ACTIVE':
      return {
        ...state,
        activeCategory: payload
      }

    case 'GET_CATEGORIES':
      return{
        ...state,
        categories: payload,
      }
      
    default:
      return state;
  }
}

export const setActiveCategory = (category) => {
  return {
    type: 'ACTIVE',
    payload: category,
  }
}

export const getCategories = () => async (dispatch, getState) => {
  let response = await axios.get(`https://api-js401.herokuapp.com/api/v1/categories`);
  dispatch(setCategories(response.data.results));
};


export const setCategories = (data) => {
  return {
    type: 'GET_CATEGORIES',
    payload: data,
  }
}



export default categoryReducer;