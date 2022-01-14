import { Meta, Story } from '@storybook/react';
import Button from '.';

export default {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'padded',
  },
} as Meta;

export const Default: Story = () => <Button label="Front Template" />;
