const initialState = {
  items: [],
  count: 0,
}

function cartReducer(state = initialState, action){
  const {type, payload} = action;

  switch(type){
    case 'ADD':
      return{
        ...state,
        items: payload,
        count: state.count + 1
      }

    // case 'REMOVE':
    //   return{
    //     ...state,
    //     items: state.items.splice()
    //   }

    default:
      return state;
  }
}

export const addToCart = (item) => {
  return {
    type: 'ADD',
    payload: item,
  }
}

export default cartReducer;