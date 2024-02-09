import React from 'react';
import { MemoryRouter } from 'react-router';
import { RecoilRoot } from 'recoil';
import { Decorator } from '@storybook/react';

import GlobalStyles from '../src/styles/GlobalStyles';

const previewDecorator: Decorator = (Story, context) => {
  return (
    <RecoilRoot>
      <GlobalStyles />
      <MemoryRouter>
        <Story {...context} />
      </MemoryRouter>
    </RecoilRoot>
  );
};

export default [previewDecorator];
