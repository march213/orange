import React, { FC, useEffect, useState } from 'react';
import { StarFilledIcon, StarIcon } from '@radix-ui/react-icons';
import { styled } from 'stitches.config';

import { RatingProps } from './Rating.props';

export const Rating: FC<RatingProps> = ({
  isEditable = false,
  rating,
  setRating,
}) => {
  const [currentRating, setCurrentRating] = useState<number>(rating);

  useEffect(() => {
    setCurrentRating(rating);
  }, [rating]);

  return (
    <Container>
      {Array.from({ length: 5 }).map((_, index) => {
        const isActive = index < currentRating;

        return (
          <div
            role="button"
            key={index}
            onMouseEnter={() => {
              if (index + 1 !== rating) {
                setCurrentRating(index + 1);
              }
            }}
            onMouseLeave={() => {
              if (currentRating !== rating) {
                setCurrentRating(rating);
              }
            }}
            onClick={() => {
              if (!isEditable) return;
              setRating(index + 1);
            }}
          >
            {isActive ? <StarFilledIcon /> : <StarIcon />}
          </div>
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
