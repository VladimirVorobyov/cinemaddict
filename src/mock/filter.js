import { createUserStatus, getFavoriteGenere } from '../utils.js';

export const createNavigationFilter = (cards) => {
  const historiList = cards.filter((item)=> item.isWatched)
  const totalDuration = historiList.reduce((start,item)=> start +=item.runTime, 0);
  return {
    Watchlist : cards.filter((item)=> item.isWatchlist).length,
    History : cards.filter((item)=> item.isWatched).length,
    Favorites : cards.filter((item)=> item.isFavorites).length,
    UserStatus : createUserStatus(historiList.length),
    generes :getFavoriteGenere(cards),
    hour : Math.floor(totalDuration / 60),
    minute : totalDuration % 60
  };
}
