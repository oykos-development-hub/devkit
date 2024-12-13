import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { SSSModal } from "./";
import { SSSModalProps } from "./types";
import { SSSTypography } from "../typography";
import { SSSButton } from "../button";
import { SSSDatepicker } from "../date-picker";

export default {
  component: SSSModal,
  title: "Components/Modal",
  argTypes: {
    theme: {
      control: {
        type: "object",
      },
    },
    size: {
      control: {
        type: "radio",
        options: ["sm", "md", "lg"],
      },
    },
  },
} as ComponentMeta<typeof SSSModal>;

const Template: ComponentStory<typeof SSSModal> = (args: SSSModalProps) => {
  const [modalOpen, setModalOpen] = useState(true);
  const [date, setDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const onChange = (date: Date | [Date, Date] | null) => {
    console.log(typeof date);
    if (date instanceof Date) {
      setDate(date);
    } else {
      setDate(date && date[0]);
      setEndDate(date && date[1]);
    }
  };

  return (
    <StoryWrapper>
      {!modalOpen && <SSSButton content="Open Modal" onClick={() => setModalOpen(true)} />}
      <SSSModal
        {...args}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        outsideClickClose={false}
        buttonLoading={true}
        content={
          <>
            <SSSDatepicker selected={date} startDate={date} endDate={endDate} onChange={onChange} />
          </>
        }
      />
    </StoryWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {
  theme: Theme,
  title: "Headline",
  content: (
    <SSSTypography
      content="Modal contentLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
      variant="bodyMedium"
    />
  ),
  open: true,
  footerText: "Footer text row for additional information",
  leftButtonText: "Zatvori",
  rightButtonText: "Sačuvaj",
  width: 640,
};
