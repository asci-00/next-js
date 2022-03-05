export default function delayResponse(data, delay = 1000) {
    return new Promise((res, rej) => {
        setTimeout(() => res(data), delay);
    });
}
