import Button from './Button';

export default {
  title: 'Button',
  component: Button,
}

const Template = args => <Button {...args} />

export const SmallVote = Template.bind({})
SmallVote.args = {
    size: 'small',
    state: 'regular',
    variant: 'vote',
    children: 'Vote to see result',
}
export const SmallSubmit = Template.bind({})
SmallSubmit.args = {
    size: 'small',
    state: 'regular',
    variant: 'submit',
    children: 'Submit',
}
export const Large = Template.bind({})
Large.args = {
    size: 'large',
    state: 'regular',
    children: 'More',
}
export const Long = Template.bind({})
Long.args = {
    size: 'long',
    state: 'regular',
    children: 'Apply',
}