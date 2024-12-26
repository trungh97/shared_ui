export const required = (message: string = 'This field is required') => {
  return (value: any) => (value ? undefined : message);
};

export const email = (message: string = 'Invalid email address') => {
  return (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? undefined : message;
};
