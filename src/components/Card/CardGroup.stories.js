import CardGroup from "./CardGroup";

export default {
    title: 'CardGroup',
    component: CardGroup,
  }
  
const Template = (args) => <CardGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
cards: [
    {
    size: 'small',
    image: 'https://blog.wazza.com.ua/wp-content/uploads/2019/02/9861_pustoe-pole.jpg',
    title: 'Card 1',
    description: 'Description 1',
    },
    {
    size: 'small',
    image: 'https://blog.wazza.com.ua/wp-content/uploads/2019/02/9861_pustoe-pole.jpg',
    title: 'Card 2',
    description: 'Description 2',
    },
    {
    size: 'small',
    image: 'https://blog.wazza.com.ua/wp-content/uploads/2019/02/9861_pustoe-pole.jpg',
    title: 'Card 3',
    description: 'Description 3',
    },
],
};