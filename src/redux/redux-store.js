import { createStore } from "redux";

const GET_ITEMS = 'GET_ITEMS';
const GET_GAZERS = 'GET_GAZERS';
const GET_WATCHERS = 'GET_WATCHERS';
const GET_NAME = 'GET_NAME';


let initialState = {
  items: [],
  name: '',
  starGazersCount: 0,
  watchersCount: 0,
}

const itemsReducer  = (state = initialState, action) => {
  switch(action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: [...action.items]
      }

    case GET_NAME: 
      return {
        ...state,
        name: action.items.name
      }  

    case GET_GAZERS: 
      return {
        ...state,
        starGazersCount: action.items.stargazers_count
      } 
    
    case GET_WATCHERS:
      return {
        ...state,
        watchersCount: action.items.watchers_count
      }

    default:
      return state;
  }
}

export const getItems = (items) => {
  return {type: GET_ITEMS, items}
}

export const getName = (name) => {
  return {type: GET_NAME, name}
}

export const getGazers = (gazers) => {
  return {type: GET_GAZERS, gazers}
}

export const getWatchers = (watchers) => {
  return {type: GET_WATCHERS, watchers}
}

let store = createStore(itemsReducer)

window.store = store;

export default store;