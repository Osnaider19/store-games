export function esbrRating(rating) {
    if (rating === "everyone") {
        return "+10"
    }
    if (rating === "teen") {
        return "+13"
    }
    if (rating === "mature") {
        return "+17"
    }
    if (rating === "adults") {
        return "+18"
    }
}
