import { ImageSizes } from 'types';

export const getImageUrl = (hash?: string, size?: ImageSizes) => {
  if (!hash) return '';
  return `https://images.igdb.com/igdb/image/upload/t_${size}/${hash}.jpg`;
};
