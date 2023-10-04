import { API_KEY, URL } from "../config/config";
export async function getGenres(pageParam , genres , date , ordering) {
  try {
    const res = await fetch(
      `${URL}/games?key=${API_KEY}&genres=${genres}&page=${pageParam}&dates=${date}&ordering=${ordering}`
    );
    if (!res.ok) {
      throw {
        err: true,
        status: res.status,
        statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
      };
    }
    const data = await res.json();
    const games = data.results;
    const nextCursor = data.next
      ? parseInt(data.next.match(/page=(\d+)/)[1])
      : null;
    console.log(nextCursor);
    return {
      games,
      nextCursor,
    };
  } catch (error) {
    console.log(error);
  }
}
