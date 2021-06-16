import { createStore } from "redux";

const SET_ITEMS = 'SET_ITEMS';


let initialState = {
  items: []
}

const itemsReducer  = (state = initialState, action) => {
  
  switch(action.type) {
    case SET_ITEMS:
      return {
        ...state,
        items: action.items
      }

    default:
      return state;
  }
  
}

export const setItems = (items) => {
  return {type: SET_ITEMS, items}
}

let store = createStore(itemsReducer);

export default store;