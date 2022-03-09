export default function delayResponse(data, delay = 1000) {
  return new Promise((res) => {
    setTimeout(() => res(data), delay);
  });
}
