import { API_KEY, URL } from "../config/config";

export async function getGames({ pageParam = 1 }) {
    try {
      const res = await fetch(`${URL}/games?key=${API_KEY}&page=${pageParam}`);
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
      return {
        games,
        nextCursor,
      };
    } catch (error) {
      throw {
        err: true,
        status: res.status,
        statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
      };
    }
}