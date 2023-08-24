import type { Meta, StoryObj } from '@storybook/vue3';

import AppAvatar from './AppAvatar.vue';

const meta: Meta<typeof AppAvatar> = {
  title: 'Example/AppAvatar',
  component: AppAvatar,
  tags: ['autodocs'],
  argTypes: {
    onClick: {},
  },
}

export default meta;
type Story = StoryObj<typeof AppAvatar>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: (args) => ({
    components: { AppAvatar },
    setup() {
      return { args };
    },
    template: '<AppAvatar v-bind="args" />',
  }),
  args: {
    title: 'Di Luca Cereda',
    subtitle: '13 Luglio 2022 ',
  },
};
export const Small: Story = {
  render: (args) => ({
    components: { AppAvatar },
    setup() {
      return { args };
    },
    template: '<AppAvatar v-bind="args" />',
  }),
  args: {
    ...Default.args,
    size: 'sm'
  },
};
export const Big: Story = {
  render: (args) => ({
    components: { AppAvatar },
    setup() {
      return { args };
    },
    template: '<AppAvatar v-bind="args" />',
  }),
  args: {
    ...Default.args,
    size: 'xl'
  },
};
export const RowDirection: Story = {
  render: (args) => ({
    components: { AppAvatar },
    setup() {
      return { args };
    },
    template: '<AppAvatar v-bind="args" />',
  }),
  args: {
    ...Default.args,
    size: 'sm',
    direction: 'row',
  },
};
