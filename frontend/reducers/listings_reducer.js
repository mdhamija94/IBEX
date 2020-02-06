import { RECEIVE_SNEAKER } from '../actions/sneaker_actions';

const ListingsReducer = (state = {}, action ) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SNEAKER:
      return action.listings;
    default:
      return state;
  }
};

export default ListingsReducer;