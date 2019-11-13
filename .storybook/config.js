import React from 'react'
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'theme'

const Decorator = (storyFn) => (
  <ThemeProvider>
    {storyFn()}
  </ThemeProvider>
)

addDecorator(Decorator)

configure(require.context('../src', true, /\.stories\.tsx$/), module);



