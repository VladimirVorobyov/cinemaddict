const createUserStatus = (num) => {
 return num === 0 ?  null:
  num >= 1 && num <= 10 ? 'novice':
  num >= 11 && num <= 20 ? 'fan': 'movie buff';
}

const getFavoriteGenere = (list)=>{
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

export const createStatistic = (cards) => {
const listHistory = cards.filter((item)=> item.isWatched);
const totalDuration = listHistory.reduce((start,item)=> start +=item.runTime, 0);
console.log(createUserStatus(listHistory.length));
  return `
  <section class="statistic">
    <p class="statistic__rank">
      Your rank
      <img class="statistic__img" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
      <span class="statistic__rank-label">${createUserStatus(listHistory.length)}</span>
    </p>

    <form action="https://echo.htmlacademy.ru/" method="get" class="statistic__filters">
      <p class="statistic__filters-description">Show stats:</p>

      <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-all-time" value="all-time" checked>
      <label for="statistic-all-time" class="statistic__filters-label">All time</label>

      <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-today" value="today">
      <label for="statistic-today" class="statistic__filters-label">Today</label>

      <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-week" value="week">
      <label for="statistic-week" class="statistic__filters-label">Week</label>

      <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-month" value="month">
      <label for="statistic-month" class="statistic__filters-label">Month</label>

      <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-year" value="year">
      <label for="statistic-year" class="statistic__filters-label">Year</label>
    </form>

    <ul class="statistic__text-list">
      <li class="statistic__text-item">
        <h4 class="statistic__item-title">You watched</h4>
        <p class="statistic__item-text">${listHistory.length}<span class="statistic__item-description">movies</span></p>
      </li>
      <li class="statistic__text-item">
        <h4 class="statistic__item-title">Total duration</h4>
        <p class="statistic__item-text">${Math.floor(totalDuration / 60)} <span class="statistic__item-description">h</span>${totalDuration % 60}<span class="statistic__item-description">m</span></p>
      </li>
      <li class="statistic__text-item">
        <h4 class="statistic__item-title">Top genre</h4>
        <p class="statistic__item-text">${getFavoriteGenere(cards)}</p>
      </li>
    </ul>

    <div class="statistic__chart-wrap">
      <canvas class="statistic__chart" width="1000"></canvas>
    </div>

  </section>
  `
}
