// eslint-disable-next-line @typescript-eslint/ban-types
export const debounce = <A>(callback: Function, wait: number = 0) => {
  let timeoutId: string | number | null = null;

  return (...args: A[]) => {
    window.clearTimeout(timeoutId || undefined);
    timeoutId = window.setTimeout(() => {
      callback(...args);
    }, wait);
  };
};
