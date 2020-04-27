const promiseTimeout = (time) => (result) =>
  new Promise((resolve) => setTimeout(resolve, time, result));

export default promiseTimeout;
