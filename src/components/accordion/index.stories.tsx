import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Accordion } from "./index";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { AccordionProps } from "./types";
import { Theme } from "../../shared/theme";

export default {
  title: "Components/Accordion",
  component: Accordion,
  argTypes: {},
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args: AccordionProps) => (
  <StoryWrapper>
    <Accordion {...args} />
  </StoryWrapper>
);

export const StandardDefault = Template.bind({});

StandardDefault.args = {
  title: "Accordion",
  variant: "standard",
  width: "300px",
  iconRight: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
      />
    </svg>
  ),
  contentText:
    "Below, you can see some colors close to #d3d3d3. Having a set of related colors can be useful if you need an inspirational alternative to your original color choice.",
};

export const StandardTheme = Template.bind({});

StandardTheme.args = {
  title: "Accordion",
  variant: "standard",
  width: "300px",
  iconRight: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
      />
    </svg>
  ),
  contentText:
    "Below, you can see some colors close to #d3d3d3. Having a set of related colors can be useful if you need an inspirational alternative to your original color choice.",
  theme: Theme,
};

export const FilledDefault = Template.bind({});

FilledDefault.args = {
  title: "Accordion",
  variant: "filled",
  width: "300px",
  iconRight: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
      />
    </svg>
  ),
  contentText:
    "Below, you can see some colors close to #d3d3d3. Having a set of related colors can be useful if you need an inspirational alternative to your original color choice.",
};

export const FilledThemed = Template.bind({});

FilledThemed.args = {
  title: "Accordion",
  variant: "filled",
  width: "300px",
  iconRight: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
      />
    </svg>
  ),
  contentText:
    "Below, you can see some colors close to #d3d3d3. Having a set of related colors can be useful if you need an inspirational alternative to your original color choice.",
  theme: Theme,
};

export const WithContentElement = Template.bind({});

WithContentElement.args = {
  title: "Accordion",
  variant: "filled",
  width: "300px",
  iconRight: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
      />
    </svg>
  ),
  contentElement: (
    <div>
      <h3>Hello</h3>
      <p>World!</p>
    </div>
  ),
};

export const WithIconLeft = Template.bind({});

WithIconLeft.args = {
  title: "Accordion",
  variant: "standard",
  width: "300px",
  iconRight: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
      />
    </svg>
  ),
  iconLeft: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.4418 1.3335L11.5085 10.5418C11.2585 12.1918 9.80016 13.4335 8.11683 13.4335H1.3335V14.6668H8.1085C10.4335 14.6668 12.3835 13.0085 12.7502 10.7085L14.6668 1.3335H13.4418ZM3.12518 11.7168H9.05851C9.84184 11.7168 10.5085 11.1752 10.6752 10.4168L12.0002 3.63351C12.0502 3.39184 12.0002 3.00013 11.6669 2.66676C11.0002 2.00012 9.98351 1.45017 9.01684 3.63351C9.01684 3.63351 8.10851 5.15851 9.01684 8.35851C9.01684 8.35851 9.47518 10.0502 7.07518 9.61684C7.07518 9.61684 3.43351 8.13351 2.86684 11.4168C2.84184 11.5752 2.96684 11.7168 3.12518 11.7168ZM4.14183 12.1835H8.72516C8.84022 12.1835 8.93349 12.2768 8.93349 12.3918V12.8085C8.93349 12.9236 8.84022 13.0168 8.72516 13.0168H4.14183C4.02677 13.0168 3.93349 12.9236 3.93349 12.8085V12.3918C3.93349 12.2768 4.02677 12.1835 4.14183 12.1835Z"
        fill="grey"
      />
    </svg>
  ),
  contentText:
    "Below, you can see some colors close to #d3d3d3. Having a set of related colors can be useful if you need an inspirational alternative to your original color choice.",
};
