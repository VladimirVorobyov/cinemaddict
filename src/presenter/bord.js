import ButtonView from '../view/show'
import FilmCardView from '../view/film.js';
import FilmDetailsView from '../view/popup.js';
import ContainerCommentView from '../view/popup-comment.js';
import CommentArrView from '../view/comment.js';
import StatisticView from '../view/statistic.js'
import {renderElement, replace, remove, coppy, removeButton} from '../utils-view.js';

const STEP_CARD = 5;

export default class Board {
  constructor(boardContainer,navi,mock) {
    this._renderedTaskCount = STEP_CARD;
    this._navi = navi;
    this._boardContainer = boardContainer;
    this._buttonShow = new ButtonView();
    this._commentArr = mock;
    this._statictic = new StatisticView(this._navi);
    this._handleLoadMoreButtonClick = this._handleLoadMoreButtonClick.bind(this);
  }

  _renderFilm(position, item,) {
  const film = new FilmCardView(item);
  const popup = new FilmDetailsView(item);
  const replacePopup = () => {
    replace(popup, position);
    const filmDetailsInner = popup.getElement().querySelector('.film-details__inner');
    renderElement(filmDetailsInner, new ContainerCommentView(item));
    const filmDetailsCommentsList = popup.getElement().querySelector('.film-details__comments-list');
    for(let i = 0; i<item.commentID.length; i++){
      renderElement(filmDetailsCommentsList,new CommentArrView(this._commentArr,item.commentID[i]));
    }
    document.body.classList.add('hide-overflow');
  };
const replaceMain = () => {
    remove(popup, position);
    document.body.classList.remove('hide-overflow');
  };

  const onEscKeyDown = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      replaceMain();
      document.removeEventListener('keydown', onEscKeyDown);
    }
  };

film.setClickFilm(() => {
      replacePopup();
      document.addEventListener('keydown', onEscKeyDown);
});

popup.setClickDetali(() => {
      replaceMain();
      document.removeEventListener('keydown', onEscKeyDown);
  });

renderElement(position, film);

  }

  _renderBords(films,topF,commentF) {
    this._films = films.slice();
    const mostCommented = this._boardContainer.querySelector('.most-commented');
    const topRated = this._boardContainer.querySelector('.top-rated');
    const filmsListContainer = this._boardContainer.querySelector('.films-list__container');

for(let i = 0; i<Math.min(this._films.length,STEP_CARD) ; i++){
  this._renderFilm(filmsListContainer, this._films[i]);
  if(i<2){
    this._renderFilm(mostCommented, commentF[i]);
    this._renderFilm(topRated, topF[i]);
  }
}
if(this._films.length>STEP_CARD){
  this.__renderLoadMoreButton();
}
  }
 _createStat(navigation){
  const n = document.querySelector('.main-navigation__additional');
  const a = document.querySelector('.main-navigation__item');
  coppy(this._statictic, this._boardContainer);
  n.classList.add('main-navigation__additional--active');
  a.classList.remove('main-navigation__item--active');
  document.querySelector('.sort').style.display = 'none';
  n.classList.add('disabledA');
  a.classList.remove('disabledA');
}
_createBord(){
   const n = document.querySelector('.main-navigation__additional');
  const a = document.querySelector('.main-navigation__item');
    a.classList.add('disabledA');
    n.classList.remove('disabledA');
    coppy(this._boardContainer,this._statictic);
    document.querySelector('.sort').style.display = 'flex';
}
_renderTasks(from, to) {
  const filmsListContainer = this._boardContainer.querySelector('.films-list__container');
    this._films
      .slice(from, to)
      .forEach((item)=> this._renderFilm(filmsListContainer, item));
  }
__renderLoadMoreButton(){
  const filmsList = this._boardContainer.querySelector('.films-list');
  renderElement(filmsList, this._buttonShow);
  this._buttonShow.setClickHandler(this._handleLoadMoreButtonClick);
}
_handleLoadMoreButtonClick() {
  this._renderTasks(this._renderedTaskCount, this._renderedTaskCount + STEP_CARD);
  this._renderedTaskCount += STEP_CARD;
  if (this._renderedTaskCount >= this._films.length) {
      removeButton(this._buttonShow)
    }
}
}
