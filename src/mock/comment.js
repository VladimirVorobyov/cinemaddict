import dayjs from 'dayjs';
import {nanoid} from 'nanoid';
import {createRandom, getRandomElement} from '../utils.js';
import {titleList,namesUserCommit,emotions} from '../const.js';
const getReleaseDate = () =>{
return dayjs(`${createRandom(2019,2021)}-${createRandom(1,12)}-${createRandom(1,31)}-${createRandom(0,23)}`)
      .format('YYYY/MM/D hh:mm');
}

const createCommentMock = () => {
  return {
    id:nanoid(),
    title:getRandomElement(titleList),
    autor:getRandomElement(namesUserCommit),
    dateComment:getReleaseDate(),
    emotion: getRandomElement(emotions),
  }
}

export const commentsList = new Array(10).fill().map(createCommentMock);

