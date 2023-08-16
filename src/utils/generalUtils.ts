export const isValidObjectField = (...args: string[]) => {
  return args.every(values => values.trim());
};
  
export const updateError = (error: string, stateUpdater: React.Dispatch<React.SetStateAction<string>>) => {
    stateUpdater(error);
};
  
export const containsOnlyNumbers = (str: string) => {
    return /^\d+$/.test(str);
};

export const getRandomPage = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.random() * (max - min) + min
}