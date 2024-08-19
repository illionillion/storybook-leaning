import { Meta, StoryFn } from "@storybook/react"
import { Card } from "./Card"

type Story = StoryFn<typeof Card>

const meta: Meta<typeof Card> = {
  title: "Example/Card",
  component: Card,
  tags: ['autodocs'],
}

export default meta

export const normal: Story = () => {
    return (
      <Card imgSrc="https://picsum.photos/400" imgAltText="カードの画像">
        <div>Hello</div>
      </Card>
    )
  }

export const withoutImage: Story = () => {
    return (
      <Card>
        <div>Hello</div>
      </Card>
    )
  }
  