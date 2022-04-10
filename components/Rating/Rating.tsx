import React, { FC } from 'react';
import { StarFilledIcon, StarIcon } from '@radix-ui/react-icons';
import { styled } from 'stitches.config';

import { RatingProps } from './Rating.props';

export const Rating: FC<RatingProps> = ({ isEditable, rating, setRating }) => {
  return (
    <Container>
      {Array.from({ length: 5 }).map((_, index) => {
        const isActive = rating !== index && index < rating;

        return (
          <div key={index}>{isActive ? <StarFilledIcon /> : <StarIcon />}</div>
        );
      })}
    </Container>
  );
};

const Container = styled('div', {
  display: 'flex',
  gridGap: '$1',
  color: '$purple10',
});
