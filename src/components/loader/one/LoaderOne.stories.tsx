import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Loader } from './index';

export default {
  title: 'Example/Loader One',
  component: Loader,
  argTypes: {
    className: {
      control: {
        type: 'text',
      },
    },
    fullComponent: {
      control: {
        type: 'boolean',
      },
    },
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => (
  <div
    className="w-12 h-12 position-absolute top-0 left-0 d-flex align-center justify-center"
  >
    <Loader {...args} />
  </div>
);

export const LoaderOne = Template.bind({});
LoaderOne.args = {
  className: 'loader',
};
