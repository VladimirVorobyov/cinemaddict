import { createUserStatus } from '../utils.js';
import Abstract from "./abstract";

const createProfile = (cards) => {
  const listHistory = cards.filter((item)=> item.isWatched);
  if(listHistory.length > 0){
    return `<section class="header__profile profile">
        <p class="profile__rating">${createUserStatus(listHistory.length)}</p>
        <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
      </section>`
    }
  return '';
}

export default class Profile extends Abstract {
  constructor (cards){
    super();
    this._cards = cards;
  }
  getTemplate(){
    return createProfile(this._cards)
  }
}
