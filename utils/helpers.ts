export const colorByProgress = (p: number) => {
  let r, g, b = 0;
  if(p < 50) {
    r = 255;
    g = Math.round(5.1 * p);
  }
  else {
    g = 255;
    r = Math.round(510 - 5.10 * p);
  }
  const h = r * 0x10000 + g * 0x100 + b * 0x1;
  return '#' + ('000000' + h.toString(16)).slice(-6);
};

export const getRandomInteger = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const toCamel = (str: string) => {
  return str.replace(/([-_][a-z])/ig, ($1) => {
    return $1.toUpperCase()
      .replace('-', '')
      .replace('_', '');
  });
};

const isObject = function (o: object) {
  return o === Object(o) && !Array.isArray(o) && typeof o !== 'function';
};

export const keysToCamel = function (o: object) : any {
  if (isObject(o)) {
    const n = {};

    Object.keys(o)
      .forEach((k) => {
        n[toCamel(k)] = keysToCamel(o[k]);
      });

    return n;
  } else if (Array.isArray(o)) {
    return o.map((i) => {
      return keysToCamel(i);
    });
  }
  return o;
};
