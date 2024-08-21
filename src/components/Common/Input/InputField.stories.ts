import { Meta, StoryObj } from "@storybook/react/*";

import InputField from "./InputField";

const meta: Meta<typeof InputField> = {
  component: InputField,
};

export default meta;

type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    type: "text",
    placeholder: "Enter a city...",
    inputClass: "input-group-text",
    id: "1",
    list: "list-suggestions",
    //   onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  }
};
