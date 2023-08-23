import type { Meta, StoryObj } from '@storybook/vue3';

import AppTabs from './AppTabs.vue';

const meta: Meta<typeof AppTabs> = {
  title: 'Example/Tabs',
  component: AppTabs,
  tags: ['autodocs'],
  argTypes: {
    onClick: {},
  },
}

export default meta;
type Story = StoryObj<typeof AppTabs>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: (args) => ({
    components: { AppTabs },
    setup() {
      return { args };
    },
    template: '<AppTabs v-bind="args" />',
  }),
  args: {
    tabs: ['Tutti i temi', 'ambiente', 'economia', 'mundo', 'non-profit', 'politica', 'societa', 'welfare']
  },
};
