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

export default categoryReducer;