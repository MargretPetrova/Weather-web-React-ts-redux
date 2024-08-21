import { Meta } from "@storybook/react/*";

import Main from "./Main";
import { Provider } from "react-redux";
import store from "../../states";

const meta: Meta<typeof Main> = {
  component: Main,
  title: "Pages/Main/Main",
  parameters: {
    reduxState: {
      suggestions: [],
    },
  },
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
};

export default meta;

export const Default = () => <Main />;
