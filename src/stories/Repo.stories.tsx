import { StoryFn, Meta } from "@storybook/react";
import  Repo from "../components/Repo";
import { RepoProps } from "../types/repos";


export default {
  title: "Repo",
  component: Repo,
} as Meta<typeof Repo>;

const Template: StoryFn<typeof Repo> = (args) => (
  <Repo {...args} />
);

const data: RepoProps = {
  name: "The Dough Factory",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  language: "Typescript",
  forks_count: 96,
  stargazers_count: 7,
  watchers_count: 12,
}

export const Default = Template.bind({});
Default.args = {
  data
};
