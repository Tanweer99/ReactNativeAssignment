import * as actionTypes from './actionTypes';

const initialState = {
  budgets: []
}

function reducer(state = initialState, action) {
  const {
    type,   // name of action
    payload // data to store
  } = action;

  switch(type) {
    
    case actionTypes.ADD_NEW_BUDGET:
      return {
        ...state,
        budgets: [ ...state.budgets, payload ]
      }

    default: 
      return state;
  }
}

export default reducer;