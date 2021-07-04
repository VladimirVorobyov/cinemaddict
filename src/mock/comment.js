import dayjs from 'dayjs';
import {nanoid} from 'nanoid';
const createRandom = (min, max) => Math.floor(Math.random()*(max + 1 - min) +min);
const getRandomElement = (list) => list[createRandom(0,list.length - 1)];
const titleList = ['good','beeeeee','Interesting','cool'];
const namesUser = ['Tim Macoveev', 'John Doe', 'Dan Duryea'];
const emotions = [
    './images/emoji/angry.png',
    './images/emoji/puke.png',
    './images/emoji/sleeping.png',
    './images/emoji/smile.png',
];
const getReleaseDate = () =>{
return dayjs(`${createRandom(2019,2021)}-${createRandom(1,12)}-${createRandom(1,31)}-${createRandom(0,23)}`)
      .format('YYYY/MM/D hh:mm');
}

const createCommentMock = () => {
  return {
    id:nanoid(),
    title:getRandomElement(titleList),
    autor:getRandomElement(namesUser),
    dateComment:getReleaseDate(),
    emotion: getRandomElement(emotions),
  }
}

export const commentsList = new Array(10).fill().map(createCommentMock);

