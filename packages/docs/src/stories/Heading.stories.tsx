import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,

  args: {
    children: 'Custom title',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'Heading H1',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão p heading sempre será um `h2` mas podemos alterar isso com a propriedade `as`.',
      },
    },
  },
}
