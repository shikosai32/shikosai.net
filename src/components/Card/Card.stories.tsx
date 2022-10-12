import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";

import Card from ".";

type Story = ComponentStoryObj<typeof Card>;

const meta: ComponentMeta<typeof Card> = {
  component: Card,
  argTypes: {
    className: {
      description: "スタイル上書き用。twMergeとか使ってないので場合によっては適用されない恐れあり。",
      control: { type: "text" },
    },
    children: {
      description: "このカードのコンテンツとなる子要素を指定できる。",
      control: { type: "text" },
    },
  },
};

export default meta;

export const Default: Story = {
  args: {
    children:
      "あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。",
  },
};

export const CustomContent: Story = {
  render: () => (
    <Card className="w-20 rounded-full shadow drop-shadow">
      <h1 className="font-branding text-3xl font-bold">Title</h1>
      <p>description</p>
    </Card>
  ),
};
