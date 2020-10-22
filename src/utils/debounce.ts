const functions = new Map<string, NodeJS.Timeout | undefined>();

export const debounce = (title: string, callback: () => void) => {
  const timer = functions.get(title);
  if (timer) {
    clearTimeout(timer);
  }
  functions.set(title, setTimeout(callback, 500));
};
