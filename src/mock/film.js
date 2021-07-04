import dayjs from 'dayjs';
import { commentsList } from './comment';
const generes = ['Drama','Comedy','Cartoon','Musical','Western', 'Film-Noir', 'Mystery'];
const moviesTitle = ['Побег из Шоушенка','Крёстный отец','Тёмный рыцарь',
    '12 разгневанных мужчин','Список Шиндлера', 'Криминальное чтиво',
    'Хороший, плохой, злой','Бойцовский клуб','Форрест Гамп',
    'Начало','Властелин колец','Паразиты'];
const posters = ['./images/posters/santa-claus-conquers-the-martians.jpg',
            './images/posters/made-for-each-other.png',
            './images/posters/popeye-meets-sinbad.png',
            './images/posters/sagebrush-trail.jpg',
            './images/posters/the-dance-of-life.jpg',
            './images/posters/the-great-flamarion.jpg',
            './images/posters/the-man-with-the-golden-arm.jpg'];
const namesUser = ['Anne Wigton', 'Heinz Herald', 'Richard Weil',	'Dan Duryea'];
const nameActor = ['Erich von Stroheim', 'Mary Beth Hughes', 'Ivan Ivanov', 'Peter Petrov'];
const listLine = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis.',
  'Aliquam erat volutpat.',
  'Nunc fermentum tortor ac porta dapibus.',
  'In rutrum ac purus sit amet tempus'];
const age = ['3+','12+','16+','18+'];
const countrys = ['USA','Russia', 'Belarus', 'Australia'];

const createRandom = (min, max) => Math.floor(Math.random()*(max + 1 - min) +min);
const createRandomRating = (min, max) => (Math.random()*(max + 1 - min) +min).toFixed(1);
const getRandomElement = (list) => list[createRandom(0,list.length - 1)];
const getDescription = (list) => {
const newListLine = list.map((item,index,array) => array[createRandom(0,array.length-1)]);
newListLine.length = 5;
let stringLine = Array.from(new Set(newListLine)).join(' ');
return stringLine;
};
const getRandomList = list => Array.from(new Set(list
            .map((item,i,arr)=>arr[createRandom(0,arr.length - 1)])));
const getTime = (hour) =>{
  if(hour > 60){
    const minute = hour % 60;
    const time = Math.floor(hour/60);
    return `${time}h ${minute}m`;
  }
  return `${hour}m`;
}
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
