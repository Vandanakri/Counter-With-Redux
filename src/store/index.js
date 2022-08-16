import { createStore } from 'redux';

function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'increment':
      return {
        value:
          action.limit > state.value ? state.value + action.step : state.value,
      };
    case 'decrement':
      return {
        value:
          action.limit > state.value ? state.value - action.step : state.value,
      };
    case 'reset':
      return { value: 0 };
    default:
      return state;
  }
}

export let store = createStore(counterReducer);