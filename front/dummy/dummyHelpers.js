export function delayResponse(data, delay = 1000) {
  return new Promise((res) => {
    setTimeout(() => res(data), delay);
  });
}
export function delayRequest(data, delay = 1000) {
  return new Promise((res) => {
    setTimeout(() => {
      console.log(data);
      res({ status: 200 });
    }, delay);
  });
}
