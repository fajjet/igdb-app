import { Genre } from 'types';

const requests = {
  genres: {
    request: async () => {
      const response = await fetch('/api/genres', {
        method: 'POST',
      });
  
      return await response.json();
    },
    resolve: (data: Array<Genre>) => {
      return data;
    },
    call: async function() {
      const data = await this.request();
      return this.resolve(data);
    }
  },
  feeds: {
    request: async () => {
      const response = await fetch('/api/feeds', {
        method: 'POST',
      });

      return await response.json();
    },
    call: async function() {
      return this.request();
    }
  }
};

export const api = {
  get: async (path: 'feeds' | 'genres') => {
    return await requests[path].call();
  }
};
