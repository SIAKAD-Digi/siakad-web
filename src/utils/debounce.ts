export function debounce<Args extends unknown[]>(
  func: (...args: Args) => void,
  delay = 300,
): (...args: Args) => void {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: Args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
}
