export function handleIncrement(step, limit) {
  return {
    type: 'increment',
    step: step,
    limit: limit,
  };
}
export function handleDecrement(step, limit) {
  return {
    type: 'decrement',
    step: step,
    limit: limit,
  };
}
export function reset() {
  return {
    type: 'reset',
  };
}