export const isValidObjectField = (...args: string[]) => {
  return args.every(values => values.trim());
};
  
export const updateError = (error: string, stateUpdater: React.Dispatch<React.SetStateAction<string>>) => {
    stateUpdater(error);
};
  
export const containsOnlyNumbers = (str: string) => {
    return /^\d+$/.test(str);
};