import { createStore } from "redux";

const GET_ITEMS = 'GET_ITEMS';


let initialState = {
  items: []
}

const itemsReducer  = (state = initialState, action) => {
  
  switch(action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.items
      }

    default:
      return state;
  }
  
}

export const getItems = (items) => {
  return {type: GET_ITEMS, items}
}

let store = createStore(itemsReducer)

window.store = store;

export default store;