import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import { CardGroupWrapper } from './styled';

const CardGroup = ({ cards }) => {
    return (
      <CardGroupWrapper>
        {cards.map((card, index) => (
          <Card
            key={index}
            size={card.size}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </CardGroupWrapper>
    );
  };

  CardGroup.propTypes = {
    cards: PropTypes.arrayOf(
      PropTypes.shape({
        size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  export default CardGroup;