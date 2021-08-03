import Abstract from "./abstract"

const createNavigation = (cards) => {
const {Watchlist, History, Favorites} = cards
return `<nav class="main-navigation">
    <div class="main-navigation__items">
      <a href="#all" class="disabledA main-navigation__item main-navigation__item--active">All movies</a>
      <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${Watchlist}</span></a>
      <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">${History}</span></a>
      <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${Favorites}</span></a>
    </div>
    <a href="#stats" class="main-navigation__additional" >Stats</a>
  </nav>
`
}

export default class NavigationArr extends Abstract{
  constructor(cards){
    super();
    this._cards = cards;
  }
  getTemplate(){
    return createNavigation(this._cards)
  }
}
