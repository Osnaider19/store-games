import { API_KEY, URL } from "../config/config";

export async function getHome() {
  const [ResGames, ResGenres] = await Promise.all([
    fetch(`${URL}/games?key=${API_KEY}`, {
      method: "GET",
    }),
    fetch(`${URL}/genres?key=${API_KEY}`, {
      method: "GET",
    }),
  ]);

  if (!ResGames.ok || !ResGenres.ok) {
    throw {
      err: true,
      status: res.status,
      statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
    };
  }
  const games = await ResGames.json();
  const genres = await ResGenres.json();

  return {
    games,
    genres,
  };
}
