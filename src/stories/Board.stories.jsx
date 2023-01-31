import { Board } from '../index';
import React from 'react';

export default {
  title: 'Board',
  component: Board,
};

const Template = (args) => <Board {...args} />;

export const allX = Template.bind({});
allX.args = {
  squares: Array(9).fill('X'),
};

export const allO = Template.bind({});
allO.args = {
  squares: Array(9).fill('O'),
};

export const allTriangle = Template.bind({});
allTriangle.args = {
  squares: Array(9).fill('△'),
};
