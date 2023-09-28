import { API_KEY, URL } from "../config/config";

export async function getGamesDetails(id) {
  try {
    const [ResDetails, ResStore, ResCreator, ResSeries, ResArchievements  , Resscreenshots] =
      await Promise.all([
        fetch(`${URL}/games/${id}?key=${API_KEY}`, {
          method: "GET",
        }),
        fetch(`${URL}/games/${id}/stores?key=${API_KEY}`, {
          method: "GET",
        }),
        fetch(`${URL}/games/${id}/development-team?key=${API_KEY}`, {
          method: "GET",
        }),
        fetch(`${URL}/games/${id}/game-series?key=${API_KEY}`, {
          method: "GET",
        }),
        fetch(`${URL}/games/${id}/achievements?key=${API_KEY}`, {
          method: "GET",
        }),
        fetch(`${URL}/games/${id}/screenshots?key=${API_KEY}&page_size=10`, {
          method: "GET",
        }),
      ]);

    if (
      !ResDetails.ok ||
      !ResStore.ok ||
      !ResCreator.ok ||
      !ResSeries.ok ||
      !ResArchievements.ok ||
      !Resscreenshots.ok
    ) {
      throw {
        err: true,
        status: res.status,
        statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
      };
    }
    const details = await ResDetails.json();
    const store = await ResStore.json();
    const creator = await ResCreator.json();
    const series = await ResSeries.json();
    const archievements = await ResArchievements.json();
    const screenshots = await Resscreenshots.json();
    return {
      details,
      store,
      creator,
      series,
      archievements,
      screenshots,
    };
  } catch (error) {
    console.log(error);
  }
}
