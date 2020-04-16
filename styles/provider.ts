import { createGlobalStyle } from 'styled-components';

enum Color {
    RED = 'red'
}

export default {
    color: Color,
    hexToRgba(hex: string, alpha = 1) {
        let c: any;
        if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
            c = hex.substring(1).split('');
            if (c.length == 3) {
                c = [c[0], c[0], c[1], c[1], c[2], c[2]];
            }
            c = '0x' + c.join('');
            return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + `,${alpha})`;
        }
        return null;
    },
    overflow: createGlobalStyle`
        body {
          top: 0;
          left: 0;
          overflow: hidden;
          width: 100%;
          height: 100vh;
        }
      `
};
