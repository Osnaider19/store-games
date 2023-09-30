import { API_KEY, URL } from "../config/config";
export async function getDevelopers(pageParam , name) {
  try {
    const res = await fetch(
      `${URL}/games?key=${API_KEY}&developers=${name}&page=${pageParam}`
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
