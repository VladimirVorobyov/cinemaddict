import ProfileView from "./view/profile-rating";
import NavigationArrView from "./view/main-navigation";
import FooterView from './view/footer.js';
import { commentsList } from './mock/comment.js';
import { createFilm } from './mock/film.js';
import { createNavigationFilter } from './mock/filter.js';
import {renderElement} from './utils-view.js';
import SortListView from "./view/sort";
import FilmsSectionView from './view/films-container';
import BoardPresenter from "./presenter/bord.js";

const NUM_CARD = 20;
const films = new Array(NUM_CARD).fill().map(createFilm);
const topRating = films.slice().sort((a,b)=> b.rating - a.rating);
const topComment = films.slice().sort((a,b)=> b.commentID.length - a.commentID.length);
const navigationFilter = createNavigationFilter(films);

const header = document.querySelector('.header');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');
const filmsSection = new FilmsSectionView();
const sortList = new SortListView();
renderElement(header, new ProfileView(films));
renderElement(footer, new FooterView());
renderElement(main, new NavigationArrView(navigationFilter));
renderElement(main, sortList);
renderElement(main, filmsSection);

const boardPres = new BoardPresenter(filmsSection.getElement(),navigationFilter,commentsList);
boardPres._renderBords(films,topRating,topComment);

const navButton = document.querySelector('.main-navigation__additional');
const allButton = document.querySelector('.main-navigation__item');

navButton.addEventListener('click', ()=> boardPres._createStat());
allButton.addEventListener('click', ()=> boardPres._createBord());
