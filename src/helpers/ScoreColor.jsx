export const ScoreColor = (score) => {
  if (score > 10 && score <= 50) {
    console.log(score);
    return "red";
  }
  if (score > 50 && score <= 85) {
    console.log(score);
    return "yellow";
  }
  if (score >= 85) {
    console.log(score);
    return "#10e210";
  } else {
    return;
  }
};
