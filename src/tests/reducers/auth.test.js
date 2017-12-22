import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
  const action = {
    type: 'LOGIN',
    uid: 'user_uid_1234567890'
  };
  const state = authReducer({}, action);
  expect(state).toEqual({
    uid: action.uid
  });
});

test('should set clear uid for logout', () => {
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducer({ uid: 'anything123456789' }, action);
  expect(state).toEqual({});
});