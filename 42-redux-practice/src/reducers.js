import { combineReducers } from 'redux';
import { FETCH_PAINTINGS, SELECT_ACTIVE_PAINTING, DELETE_PAINTING, UPDATE_FILTER } from './actions/types';

const paintingsReducer = (state = [], action) => {
  console.log('paintingsReducer triggered:', action)
  switch (action.type) {
    case FETCH_PAINTINGS:
      return [...state, ...action.payload];
    case DELETE_PAINTING:
      return state.filter(painting => painting.id !== action.activeID);
    default:
      return state;
  }
};

const activePaintingIdReducer = (state = null, action) => {
  console.log('activePaintingIdReducer triggered:', action)
  switch (action.type) {
    case SELECT_ACTIVE_PAINTING:
      return action.id;
    case FETCH_PAINTINGS:
      return action.payload.length > 0 ? action.payload[0].id : state
    default:
      return state;
  }
};

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case UPDATE_FILTER:
      return action.filter;
    default:
      return state
  }
}

const rootReducer = combineReducers({
  paintings: paintingsReducer,
  activePaintingId: activePaintingIdReducer,
  filter: filterReducer
});

// {
//   paintings: [],
//   activePaintingId: null
// }


// NOTE:
// the keys in the object passed to combineReducers
// will become the top level keys of redux store state
// i.e. store.getState() would return =>
// {
//   paintings: {
//     /* state returned ftom paintingsReducer */
//   },
//   activePainting: {
//     /* state returned from activePaintingReducer */
//   }
// }

export default rootReducer;
