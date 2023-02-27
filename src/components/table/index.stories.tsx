import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Table } from "./index";
import { Theme } from "../../shared/theme";
import { CircleCheckIcon } from "../icon";

const tableHeadings = ["City", "Code", "Latitude", "Longitude"];

const tableData = [
  { city: "London", code: "UK", latitude: 51.5285578, longitude: -0.2420242 },
  { city: "Manchester", code: "UK", latitude: 53.4722249, longitude: -2.2936739 },
];

export default {
  title: "Components/Table",
  component: Table,
  argTypes: {
    theme: {
      control: {
        type: "object",
      },
      defaultValue: Theme,
    },
  },
} as ComponentMeta<typeof Table>;

const Default: ComponentStory<typeof Table> = (args) => (
  <StoryWrapper>
    <Table {...args} />
  </StoryWrapper>
);

export const DefaultTable = Default.bind({});

DefaultTable.args = {
  titleElement: (
    <div>
      <h3 style={{ margin: 0, marginBottom: "0.25em" }}>This is table title</h3>
      <p style={{ margin: 0 }}>Additional content...</p>
    </div>
  ),

  headerContent: (
    <tr>
      {tableHeadings.map((heading, index) => (
        <th key={index}>
          <div>
            <span>{heading}</span>
            <CircleCheckIcon size="1em" onClick={() => alert("Icon is clicked")} style={{ cursor: "pointer" }} />
          </div>
        </th>
      ))}
    </tr>
  ),

  bodyContent: tableData.map((data, index) => (
    <tr key={index}>
      <td>{data.city}</td>
      <td>{data.code}</td>
      <td>{data.latitude}</td>
      <td>{data.longitude}</td>
    </tr>
  )),
};

//

export const NoDataTable = Default.bind({});

NoDataTable.args = {
  headerContent: (
    <tr>
      {tableHeadings.map((heading, index) => (
        <th key={index}>
          <div>
            <span>{heading}</span>
            <CircleCheckIcon size="1em" onClick={() => alert("Icon is clicked")} style={{ cursor: "pointer" }} />
          </div>
        </th>
      ))}
    </tr>
  ),

  noDataMessage: "No data",
};
