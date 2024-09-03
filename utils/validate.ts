export const validateString = (value: string, regex: RegExp) => {
  const isValid = regex.test(value);

  return isValid;
};
