import React from 'react';
import PropTypes from 'prop-types';
import {
  CardWrapper,
  CardImage,
  CardContent,
  CardImageWrapper,
  CardTitle,
  CardDescription,
} from "./styled";

const Card = ({ size, image, title, description }) => {
  return (
    <CardWrapper size={size}>
      <CardImageWrapper>
        <CardImage size={size} src={image} />
      </CardImageWrapper>
      <CardContent size={size}>
        <CardTitle size={size}>{title}</CardTitle>
        <CardDescription size={size}>{description}</CardDescription>
      </CardContent>
    </CardWrapper>
  );
};

Card.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;




