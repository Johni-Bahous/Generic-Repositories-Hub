import { StoryFn, Meta } from "@storybook/react";
import Profile from "../components/Profile";
import ProfilePic from "../assets/profile-picture.svg";

export default {
  title: "Profile",
  component: Profile,
} as Meta<typeof Profile>;

const Template: StoryFn<typeof Profile> = (args) => (
  <Profile {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: "John Doe",
  login: "ThatJohnDoe",
  avatar_url: ProfilePic,
  email: "John.Doe@gmail.com",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  followers: "12",
  following: "7"
};
