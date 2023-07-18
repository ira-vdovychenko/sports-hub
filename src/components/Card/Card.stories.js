import Card from "./Card";

export default {
    title: 'Card',
    component: Card,
  }

const Template = (args) => <Card {...args} />;

export const MediumCard = Template.bind({});
MediumCard.args = {
  size: 'medium',
  image: 'https://blog.wazza.com.ua/wp-content/uploads/2019/02/9861_pustoe-pole.jpg',
  title: 'Medium Card',
  description: 'This is a small card.',
};

export const LargeCard = Template.bind({});
LargeCard.args = {
  size: 'large',
  image: 'https://blog.wazza.com.ua/wp-content/uploads/2019/02/9861_pustoe-pole.jpg',
  title: 'Large Card',
  description: 'This is a large card.',
};