import { RecoilRoot } from 'recoil';
import type { Preview } from '@storybook/react';

import previewDecorator from './preview-decorators';

const preview: Preview = {
  decorators: previewDecorator,
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
