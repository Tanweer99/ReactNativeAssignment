import * as actionTypes from './actionTypes';

export function addNewBudget(payload) {
  return {
    type: actionTypes.ADD_NEW_BUDGET,
    payload
  }
}