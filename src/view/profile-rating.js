import { createUserStatus } from '../utils.js';

export const createProfile = (cards) => {
  const listHistory = cards.filter((item)=> item.isWatched);
  if(listHistory.length > 0){
    return `
      <section class="header__profile profile">
        <p class="profile__rating">${createUserStatus(listHistory.length)}</p>
        <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
      </section>
    ` }
  return '';
}

