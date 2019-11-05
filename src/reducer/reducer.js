/*
  Reducer is a pure function - It does not mutate outside it's environment.
  It must always copy the passed state and return a new state.
*/

export const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      console.log('No matching action type');
      return state;
  }
}