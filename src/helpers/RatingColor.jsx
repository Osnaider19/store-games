export function RatingColor(rating) {
  if (rating === "exceptional") {
    return "bg-green-400";
  }
  if (rating === "recommended") {
    return "bg-blue-400";
  }
  if (rating === "meh") {
    return "bg-yellow-400";
  }
  if (rating === "skip") {
    return "bg-red-400";
  } else {
    return;
  }
}
