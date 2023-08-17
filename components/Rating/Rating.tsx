import { useState, useEffect, KeyboardEvent } from "react";
import { RatingProps } from "./Rating.props";
import styles from "./Rating.module.css";
import cn from "classnames";
import StarIcon from "./Star.svg";

export const Rating = ({
  isEditable = false,
  rating,
  children,
  setRating,
  ...props
}: RatingProps) => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, index: number) => {
      return (
        <span key={index}>
          <StarIcon
            className={cn(styles.star, {
              [styles.filled]: index < currentRating,
              [styles.editable]: isEditable,
            })}
            onMouseEnter={() => changeDisplay(index + 1)}
            onMouseLeave={() => changeDisplay(rating)}
            onClick={() => onClick(index + 1)}
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(event: KeyboardEvent<SVGElement>) =>
              isEditable && handleSpace(index + 1, event)
            }
          />
        </span>
      );
    });
    setRatingArray(updatedArray);
  };

  const handleSpace = (index: number, event: KeyboardEvent<SVGElement>) => {
    if (event.code != "Space" || !setRating) {
      return;
    }
    setRating(index);
  };

  const onClick = (index: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(index);
  };

  const changeDisplay = (index: number) => {
    if (!isEditable) {
      return;
    }
    constructRating(index);
  };

  return (
    <div {...props}>
      {ratingArray.map((rating, index) => {
        return <span key={index}>{rating}</span>;
      })}
    </div>
  );
};
