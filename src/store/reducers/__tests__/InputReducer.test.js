// Local import
import InputReducer, {
  ON_CHANGE,
  RESET_INPUT,
  onChange,
  resetInput,
} from 'src/store/reducers/InputReducer';

describe('BookReducer', () => {
  const initialState = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  it('reducer should return initial state', () => {
    expect(InputReducer(undefined, {})).toEqual(initialState);
  });
  it('action onChange return good object', () => {
    const expectAction = { type: ON_CHANGE, nameField: 'nameField', value: 'value' };
    expect(onChange('nameField', 'value')).toEqual(expectAction);
  });
  it('action resetInput return good object', () => {
    const expectAction = { type: RESET_INPUT };
    expect(resetInput()).toEqual(expectAction);
  });
  it('reducer should return new state onChange', () => {
    const expectState = {
      username: 'name',
      email: '',
      password: '',
      confirmPassword: '',
    };
    expect(InputReducer(initialState, onChange('username', 'name'))).toEqual(expectState);
  });
  it('reducer should return reset state', () => {
    const state = {
      username: 'name',
      email: '',
      password: '',
      confirmPassword: '',
    };
    expect(InputReducer(state, resetInput())).toEqual(initialState);
  });
});
