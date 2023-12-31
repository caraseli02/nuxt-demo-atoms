import type { Meta, StoryObj } from '@storybook/vue3';

import MyButton from './AppButton.vue';

const meta: Meta<typeof MyButton> = {
  title: 'Example/Button',
  component: MyButton,
  tags: ['autodocs'],
  argTypes: {
    onClick: {},
    btnSize: {
      control: {
        type: 'select',
      },
      options: ['S', 'M', 'L', 'XL'],
    },
  },
}

export default meta;
type Story = StoryObj<typeof MyButton>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: (args) => ({
    components: { MyButton },
    setup() {
      return { args };
    },
    template: '<MyButton v-bind="args" />',
  }),
  args: {
    label: 'Button',
  },
};
export const WithIcon: Story = {
  render: (args) => ({
    components: { MyButton },
    setup() {
      return { args };
    },
    template: `<MyButton v-bind="args">
      <template #icon>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256">
        <path fill="currentColor"
          d="M128 174a46.06 46.06 0 0 0 46-46V64a46 46 0 0 0-92 0v64a46.06 46.06 0 0 0 46 46ZM94 64a34 34 0 0 1 68 0v64a34 34 0 0 1-68 0Zm40 141.75V232a6 6 0 0 1-12 0v-26.25A78.09 78.09 0 0 1 50 128a6 6 0 0 1 12 0a66 66 0 0 0 132 0a6 6 0 0 1 12 0a78.09 78.09 0 0 1-72 77.75Z" />
        </svg>
      </template>
    </MyButton>`,
  }),
  args: {
    ...Default.args
  },
};
export const WithTypes: Story = {
  render: (args) => ({
    components: { MyButton },
    setup() {
      return { args };
    },
    template: '<MyButton v-bind="args" />',
  }),
  args: {
    ...Default.args,
    btnType: 'economia',
  },
};
export const WithSize: Story = {
  render: (args) => ({
    components: { MyButton },
    setup() {
      return { args };
    },
    template: '<MyButton v-bind="args" /> <MyButton v-bind="args" btnSize="S" />',
  }),
  args: {
    ...Default.args,
    btnSize: 'XL', 
  },
};
