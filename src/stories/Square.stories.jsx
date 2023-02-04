import React from 'react';
import { Square } from '../App';

export default {
  title: 'Square',
  component: Square,
};

const Template = (args) => <Square {...args} />;

export const O = Template.bind({});
O.args = {
  onClick: () => console.log('You clicked Square!'),
  value: 'O',
};

export const X = Template.bind({});
X.args = {
  onClick: () => console.log('You clicked Square!'),
  value: 'X',
};

export const Triangle = Template.bind({});
Triangle.args = {
  onClick: () => console.log('You clicked Square!'),
  value: '△',
};