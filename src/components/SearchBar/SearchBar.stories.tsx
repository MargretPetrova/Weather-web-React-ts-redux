import { Meta } from "@storybook/react/*";

import SearchBar from "./SearchBar";
import { Provider } from "react-redux";
import store from "../../states";

const meta: Meta<typeof SearchBar> = {
  component: SearchBar,
  title: "Pages/Main/components/SearchBar",
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
};

export default meta;

export const Default = () => <SearchBar />;
