import { useState } from 'react';

export const useMyReducer = (reducer, initialState) => {
  const [state, setState] = useState(initialState);

  const dispatch = action => {
    setState(() => {
      return reducer(state, action);
    });
  }

  return [state, dispatch];
}