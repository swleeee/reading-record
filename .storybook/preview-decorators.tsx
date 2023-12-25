import React from 'react';
import { RecoilRoot } from 'recoil';
import { Decorator } from '@storybook/react';

import GlobalStyles from '../src/styles/GlobalStyles';

const previewDecorator: Decorator = (Story, context) => {
  return (
    <RecoilRoot>
      <GlobalStyles />
      <Story {...context} />
    </RecoilRoot>
  );
};

export default [previewDecorator];
