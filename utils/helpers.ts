export const getColorByProgress = (value: number) => {
  //value from 0 to 1
  const hue = ((1-value)*120).toString(10);
  return ["hsl(",hue,",100%,50%)"].join("");
};

export const getRandomInteger = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
