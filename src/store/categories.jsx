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
        categories: state.categories.map(category => {
          if(category.name === payload.category){
            return {activeCategory: payload.category}
          }
          return category;
        })
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