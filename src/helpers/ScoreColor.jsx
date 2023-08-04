export const ScoreColor = (score) => {
  if (score > 10 && score <= 50) {
    return "red-600";
  }
  if (score > 50 && score <= 85) {
    return "yellow-400";
  }
  if (score > 80) {
    return "green-600";
  }
  console.log(score)
};
