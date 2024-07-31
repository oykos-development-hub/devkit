import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { SSSPaginationProps } from "./types";
import { Theme } from "../../shared/theme";
import { SSSPagination } from ".";

export default {
  component: SSSPagination,
  title: "Components/Pagination",
  argTypes: {
    variant: {
      control: {
        type: "radio",
        options: ["filled"],
      },
    },
    theme: {
      control: {
        type: "object",
      },
      defaultValue: Theme,
    },
    pageCount: {
      control: {
        type: "number",
      },
      defaultValue: 10,
    },
  },
} as ComponentMeta<typeof SSSPagination>;

const Template: ComponentStory<typeof SSSPagination> = ({ ...args }: SSSPaginationProps) => {
  return (
    <StoryWrapper>
      <div style={{ width: "70%" }}>
        <SSSPagination {...args} />
      </div>
    </StoryWrapper>
  );
};
export const Default = Template.bind({});

Default.args = {
  variant: "filled",
  itemsPerPage: 4,
  pageRangeDisplayed: 3,
  pageCount: 10,
  onChange: (page: number) => console.log("Pagination change callback -", page),
};
