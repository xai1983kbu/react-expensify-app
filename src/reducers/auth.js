// reducer - pure function
// if user log in - uid will be in state under auth key
// if user log out - {} will be in state under auth key

export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        uid: action.uid
      };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};