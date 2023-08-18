export const ScoreColor = (score) => {
  if (score > 10 && score <= 50) {
    return "red";
  }
  if (score > 50 && score <= 85) {
    return "yellow";
  }
  if (score >= 85) {
    return "#10e210";
  } else {
    return;
  }
};
