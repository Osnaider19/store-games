export const ScoreColor = (score) => {
  if (score > 10 && score <= 50) {
    return "red-500";
  }
  if (score > 50 && score <= 85) {
    return "yellow-500";
  }
  if (score > 80) {
    return "green-500";
  } else {
    return;
  }
};
