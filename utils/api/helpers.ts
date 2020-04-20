import { ImageSizes } from 'types';

export const getImageUrl = (hash: string, size: ImageSizes) => {
  return `https://images.igdb.com/igdb/image/upload/t_${size}/${hash}.jpg`;
};
