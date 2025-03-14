import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { SSSSidebar } from ".";
import { data2, settingsData, sidebarData } from "./constants";
import AppLayout from "./appLayout";

const user = { name: "Dino", unit: "Oykos" };

export default {
  component: SSSSidebar,
  title: "Components/Sidebar",
  argTypes: {
    data: {
      control: {
        type: "object",
      },
      defaultValue: sidebarData,
    },
    user: {
      control: {
        type: "object",
      },
      defaultValue: user,
    },
  },
} as ComponentMeta<typeof SSSSidebar>;

const Template: ComponentStory<typeof SSSSidebar> = () => {
  const [clickedItem, setClickedItem] = useState<string>("");
  return (
    <div style={{ height: "700px" }}>
      <StoryWrapper>
        <AppLayout>
          <SSSSidebar
            data={data2}
            settingsData={settingsData}
            user={user}
            onClick={(item) => setClickedItem(item.title)}
            onSettingsClick={(item) => setClickedItem(item.title)}
          />
        </AppLayout>
      </StoryWrapper>
    </div>
  );
};

export const CustomSidebar = Template.bind({});
