export const createRandom = (min, max) => Math.floor(Math.random()*(max + 1 - min) +min);
export const getRandomElement = (list) => list[createRandom(0,list.length - 1)];
export const createRandomRating = (min, max) => (Math.random()*(max + 1 - min) +min).toFixed(1);
export const getDescription = (list) => {
const newListLine = list.map((item,index,array) => array[createRandom(0,array.length-1)]);
newListLine.length = 5;
let stringLine = Array.from(new Set(newListLine)).join(' ');
return stringLine;
};
export const getRandomList = list => Array.from(new Set(list
            .map((item,i,arr)=>arr[createRandom(0,arr.length - 1)])));
export const getTime = (hour) =>{
  if(hour > 60){
    const minute = hour % 60;
    const time = Math.floor(hour/60);
    return `${time}h ${minute}m`;
  }
  return `${hour}m`;
};
export const createUserStatus = (num) => {
 return num === 0 ?  null:
  num >= 1 && num <= 10 ? 'novice':
  num >= 11 && num <= 20 ? 'fan': 'movie buff';
}
export const getFavoriteGenere = (list)=>{
  const arr = [];
  list.forEach((item) => {
    if(item.isWatched){
      return arr.push(item.genre);
    }
  });
  let  counts = {}, max = 0, res;
  for (let v in arr) {
  counts[arr[v]] = (counts[arr[v]] || 0) + 1;
  if (counts[arr[v]] > max) {
    max = counts[arr[v]];
    res = arr[v];
  }
}
return res;
}
