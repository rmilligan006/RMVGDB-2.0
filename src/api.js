const base_url = "https://api.rawg.io/api/";

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;
const lastTenYears = `${currentYear - 10}-${currentMonth}-${currentDay}`;

const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=12&key=b66955b2fa2c4890b69604cb42f82f7f`;

const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=12&key=b66955b2fa2c4890b69604cb42f82f7f`;

const top_rated = `games?dates=${lastTenYears},${currentDate}&page_size=12&metacritic=90,100&key=b66955b2fa2c4890b69604cb42f82f7f`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const topRatedGamesURL = () => `${base_url}${top_rated}`;

export const gameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}?&key=b66955b2fa2c4890b69604cb42f82f7f`;

export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?&key=b66955b2fa2c4890b69604cb42f82f7f`;

export const gameMovieURL = (game_id) =>
  `${base_url}games/${game_id}/movies?&key=b66955b2fa2c4890b69604cb42f82f7f`;

export const searchGameURL = (game_name) =>
  `${base_url}games?search=${game_name}&page_size=12&key=b66955b2fa2c4890b69604cb42f82f7f`;
