function useDebounce(func, delay=2000) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func(...args), delay);
    };
}
export default useDebounce;