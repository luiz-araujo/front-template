
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export const parameters = {
  layout: 'centered',
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'white',
        value: '#FFFFFF',
      },
      {
        name: 'grey',
        value: '#4D4D4D',
      },
      {
        name: 'black',
        value: '#1A1A1A',
      },
    ],
  },
  viewport: {
    viewports: {
      mobile: {
        ...INITIAL_VIEWPORTS.galaxys5,
        name: 'Mobile',
      },
      tablet: {
        ...INITIAL_VIEWPORTS.ipad,
        name: 'Tablet',
      },
      desktop: {
        name: 'Desktop',
        styles: {
          height: '768px',
          width: '1024px',
        },
        type: 'desktop',
      },
      desktopLarge: {
        name: 'Desktop Large',
        styles: {
          height: '768px',
          width: '1920px',
        },
        type: 'desktop',
      },
    },
  },
};