import dayjs from 'dayjs';
import { commentsList } from './comment';
import {createRandom, getRandomElement,createRandomRating, getDescription, getRandomList, getTime} from '../utils.js';
import {generes, moviesTitle, posters, namesUser, nameActor, listLine, age, countrys } from '../const.js';
const getReleaseDate = (year) =>{
return dayjs(`${year}-${createRandom(1,12)}-${createRandom(1,31)}`).format('D MMM YYYY');
}
const getcommentID = (arr) =>{
  return getRandomList(arr).map((item)=>item.id);
}

export const createFilm = () => {
  const year = createRandom(1970,2020);
  const runTime = createRandom(10,250);
  const description = getDescription(listLine);
  const genre = getRandomElement(generes);
  const generesList = getRandomList(generes);

  return {
    commentID: getcommentID(commentsList),
    movieTitle: getRandomElement(moviesTitle),
    poster: getRandomElement(posters),
    year,
    runTime,
    time: getTime(runTime),
    genre,
    ageEnter: getRandomElement(age),
    mainDescription : description.length > 140 ?  `${description.slice(0,140)}...`: description,
    description,
    isWatchlist: Boolean(createRandom(0, 1)),
    isWatched : Boolean(createRandom(0, 1)),
    isFavorites: Boolean(createRandom(0, 1)),
    rating: createRandomRating(7,9),
    director: getRandomElement(namesUser),
    writers: getRandomList(namesUser),
    actor: getRandomList(nameActor),
    releaseDate: getReleaseDate(year),
    country: getRandomElement(countrys),
    generesPopup: generesList.includes(genre) ?  generesList : generesList.push(genre) && generesList,
  }
}
