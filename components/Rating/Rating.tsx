import React, { FC, useEffect, useState, KeyboardEvent } from 'react';
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
            tabIndex={isEditable ? 0 : -1}
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
            onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => {
              if (!isEditable) return;
              if (e.code !== 'Space') return;
              setRating(index + 1);
            }}
          >
            {isActive ? (
              <StarFilledIcon style={{ marginRight: '4px' }} />
            ) : (
              <StarIcon style={{ marginRight: '4px' }} />
            )}
          </div>
        );
      })}
    </Container>
  );
};

const Container = styled('div', {
  display: 'flex',
  color: '$purple10',
});
