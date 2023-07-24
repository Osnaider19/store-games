
export const createRating = ({
  rating,
  total,
  starIcon = "*" , starEmpty = "o",
}) => {
  const stars = starIcon.repeat(total);
  const empty = starEmpty.repeat(total);
  return `${stars} ${empty}`.slice(total - rating, total * 2 - rating);
};
