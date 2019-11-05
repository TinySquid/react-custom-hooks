import React, { useReducer } from 'react';

import { reducer } from './reducer/reducer';
import { useMyReducer } from './hooks/useMyReducer';

import './App.css';

const initialState = { count: 0 }

function App() {
  const [state, dispatch] = useMyReducer(reducer, initialState);
  // const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <p>Count: {state.count}</p>
    </div>
  );
}

export default App;
