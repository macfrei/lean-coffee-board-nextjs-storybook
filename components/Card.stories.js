import Card from "./Card";
import { action } from "@storybook/addon-actions";

export default {
  title: "Component/Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});

Default.args = {
  name: "",
  text: "Why Storybook?!",
  id: "1234abcd",
  onRemoveQuestion: action("Remove button was clicked"),
};

export const IsDone = Template.bind({});

IsDone.args = {
  name: "Lene",
  text: "Why Storybook?!",
  id: "1234abcd",
  onRemoveQuestion: action("Remove button was clicked"),
  isDone: true,
};
