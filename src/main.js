import { createProfile } from "./view/profile-rating";
import { createNavigation } from "./view/main-navigation";
import { createSort } from "./view/sort";
import { createFilmsContainer } from './view/films-container';
import { createFilmCard } from './view/film.js';
import { createFooter } from './view/footer.js';
import { createStatistic } from './view/statistic.js';
import { createFilmDetails } from './view/popup.js';
import { createContainerComment } from './view/popup-comment.js';
import { createComment } from './view/comment.js';
import { createFilm } from './mock/film.js';
import { commentsList } from './mock/comment.js';
import { createNavigationFilter } from './mock/filter.js';
import { createButton } from './view/show.js';

const NUM_CARD = 20;
const STEP_CARD = 5;
const films = new Array(NUM_CARD).fill().map(createFilm);
const topRating = films.slice().sort((a,b)=> b.rating - a.rating);
const topComment = films.slice().sort((a,b)=> b.commentID.length - a.commentID.length);
const navigationFilter = createNavigationFilter(films);

const render = (container, template, position = 'beforeend') => {
  container.insertAdjacentHTML(position,template,'afterend');
}

const header = document.querySelector('.header');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');
render(header,createProfile(films));
render(footer, createFooter());

const createMain  = () => {
  main.innerHTML ='';
  render(main,createNavigation(navigationFilter));
  render(main, createSort())
  render(main, createFilmsContainer());
  const filmsList = document.querySelector('.films-list');
  const mostCommented = document.querySelector('.most-commented');
  const topRated = document.querySelector('.top-rated');
  const filmsListContainer = document.querySelector('.films-list__container');

  for(let i = 0; i<Math.min(films.length,STEP_CARD) ; i++){
    render(filmsListContainer, createFilmCard(films[i]));
    if(i<2){
      render(mostCommented, createFilmCard(topComment[i]));
      render(topRated, createFilmCard(topRating[i]));
    }
  }

  if(films.length>STEP_CARD){
    let count = STEP_CARD;
    render(filmsList, createButton());
    const buttonShow = filmsList.querySelector('.films-list__show-more');
    buttonShow.addEventListener('click',(evt)=>{
      evt.preventDefault();
      films.slice(count, count + STEP_CARD)
           .forEach((item)=> render(filmsListContainer, createFilmCard(item)));
    count += STEP_CARD;

    if (count >= films.length) {
      buttonShow.remove();
    }
    })
  }

}
createMain();

const createPopup = () => {
  render(footer,createFilmDetails(films[0]));

  const filmDetailsInner = document.querySelector('.film-details__inner');
  render(filmDetailsInner, createContainerComment(films[0]));
  const filmDetailsCommentsList = document.querySelector('.film-details__comments-list');
  for(let i = 0; i<films[0].commentID.length; i++){
    render(filmDetailsCommentsList,createComment(commentsList,films[0].commentID[i]));
  }
}
createPopup();

const createStat = () => {
  main.innerHTML ='';
  render(main,createNavigation(navigationFilter));
  document.querySelector('.main-navigation__additional')
  .classList.add('main-navigation__additional--active');
  render(main,createStatistic(navigationFilter));
  document.querySelector('.main-navigation__item')
  .classList.remove('main-navigation__item--active');
}

document.querySelector('.main-navigation__additional')
.addEventListener('click', createStat);
const closeBtn = document.querySelector('.film-details__close-btn');
  const filmsDetails = document.querySelector('.film-details');

  closeBtn.addEventListener('click', () => {
    filmsDetails.style.display = 'none';
  });




