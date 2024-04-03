import { Meta, StoryFn } from "@storybook/react"
import { Card } from "./Card"

type Story = StoryFn<typeof Card>

const meta: Meta<typeof Card> = {
  title: "Example/Card",
  component: Card,
}

export default meta

export const normal: Story = () => {
    return (
      <Card>
        <div>Hello</div>
      </Card>
    )
  }
  