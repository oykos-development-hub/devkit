import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Pagination } from "./index";
import { PaginationProps } from "./types";
import { Theme } from "../../shared/theme";

const paginationData = [
  { name: "Albania", code: "AL" },
  { name: "Algeria", code: "DZ" },
  { name: "American Samoa", code: "AS" },
  { name: "AndorrA", code: "AD" },
  { name: "Angola", code: "AO" },
  { name: "Anguilla", code: "AI" },
  { name: "Antarctica", code: "AQ" },
  { name: "Antigua and Barbuda", code: "AG" },
  { name: "Argentina", code: "AR" },
  { name: "Armenia", code: "AM" },
  { name: "Aruba", code: "AW" },
  { name: "Australia", code: "AU" },
  { name: "Austria", code: "AT" },
  { name: "Azerbaijan", code: "AZ" },
  { name: "Bahamas", code: "BS" },
  { name: "Bahrain", code: "BH" },
  { name: "Bangladesh", code: "BD" },
  { name: "Barbados", code: "BB" },
  { name: "Belarus", code: "BY" },
  { name: "Belgium", code: "BE" },
  { name: "Belize", code: "BZ" },
  { name: "Benin", code: "BJ" },
  { name: "Bermuda", code: "BM" },
  { name: "Bhutan", code: "BT" },
  { name: "Bolivia", code: "BO" },
  { name: "Bosnia and Herzegovina", code: "BA" },
  { name: "Botswana", code: "BW" },
  { name: "Bouvet Island", code: "BV" },
  { name: "Brazil", code: "BR" },
  { name: "British Indian Ocean Territory", code: "IO" },
  { name: "Brunei Darussalam", code: "BN" },
  { name: "Bulgaria", code: "BG" },
  { name: "Burkina Faso", code: "BF" },
  { name: "Burundi", code: "BI" },
  { name: "Cambodia", code: "KH" },
  { name: "Cameroon", code: "CM" },
  { name: "Canada", code: "CA" },
];

const leftIcon = (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.8334 7H1.16675M1.16675 7L7.00008 12.8333M1.16675 7L7.00008 1.16667"
      stroke="#616161"
      strokeWidth="1.67"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const rightIcon = (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1.16666 7H12.8333M12.8333 7L7 1.16667M12.8333 7L7 12.8333"
      stroke="#616161"
      strokeWidth="1.67"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default {
  component: Pagination,
  title: "Components/Pagination",
  argTypes: {
    variant: {
      control: {
        type: "radio",
        options: ["filled", "outlined", "underlined", "dotted"],
      },
    },
    theme: {
      control: {
        type: "object",
      },
      defaultValue: Theme,
    },
  },
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = ({ renderContent, ...args }: PaginationProps) => {
  const contentToShow = (data: any) => (
    <div>
      {data.map((country: any) => (
        <p key={country} style={{ textAlign: "center" }}>
          <strong>{country.name}</strong>
        </p>
      ))}
    </div>
  );

  return (
    <StoryWrapper>
      <div style={{ width: "70%" }}>
        <Pagination {...args} renderContent={contentToShow} />
      </div>
    </StoryWrapper>
  );
};

export const VariantFilled = Template.bind({});

const paginationArgs = {
  data: paginationData,
  itemsPerPage: 4,
  previousLabel: (
    <p style={{ display: "flex", alignItems: "center", gap: "0.5em", margin: 0 }}>
      {leftIcon}
      Previous
    </p>
  ),
  nextLabel: (
    <p style={{ display: "flex", alignItems: "center", gap: "0.5em", margin: 0 }}>
      Next
      {rightIcon}
    </p>
  ),
  pageRangeDisplayed: 3,
};

VariantFilled.args = {
  ...paginationArgs,
  variant: "filled",
};

//

export const VariantOutlined = Template.bind({});

VariantOutlined.args = {
  ...paginationArgs,
  variant: "outlined",
  fullWidth: false,
};

//

export const VariantUnderlined = Template.bind({});

VariantUnderlined.args = {
  ...paginationArgs,
  variant: "underlined",
};

//

export const OnlyWithArrows = Template.bind({});

OnlyWithArrows.args = {
  ...paginationArgs,
  displayPages: false,
  previousLabel: <span style={{ display: "flex", alignItems: "center" }}>{leftIcon}</span>,
  nextLabel: <span style={{ display: "flex", alignItems: "center" }}>{rightIcon}</span>,
};

//

export const WithPaginationText = Template.bind({});

WithPaginationText.args = {
  ...paginationArgs,
  renderPaginationText: (selected, total) => `Page ${selected} of ${total}`,
  previousLabel: <span style={{ display: "flex", alignItems: "center" }}>{leftIcon}</span>,
  nextLabel: <span style={{ display: "flex", alignItems: "center" }}>{rightIcon}</span>,
};

//

export const VariantDotted = Template.bind({});

VariantDotted.args = {
  ...paginationArgs,
  itemsPerPage: 7,
  variant: "dotted",
  previousLabel: "",
  nextLabel: "",
};
