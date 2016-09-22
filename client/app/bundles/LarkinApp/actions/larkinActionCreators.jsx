import actionTypes from '../constants/larkinConstants';

export function updateName(name) {
  return {
    type: actionTypes.LARKIN_NAME_UPDATE,
    name,
  };
}
