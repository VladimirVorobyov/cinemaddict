export const createFilmCard = (card) => {
  const {movieTitle,rating, year, time, genre,commentID, poster, mainDescription,isWatchlist,isWatched,isFavorites} = card;
  const getClass = (a) => a ? 'film-card__controls-item--active':'';
return `
        <article class="film-card">
          <h3 class="film-card__title">${movieTitle}</h3>
          <p class="film-card__rating">${rating}</p>
          <p class="film-card__info">
            <span class="film-card__year">${year}</span>
            <span class="film-card__duration">${time}</span>
            <span class="film-card__genre">${genre}</span>
          </p>
          <img src="${poster}" alt="" class="film-card__poster">
          <p class="film-card__description">${mainDescription}</p>
          <a class="film-card__comments">${commentID.length} comments</a>
          <div class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${getClass(isWatchlist)}" type="button">Add to watchlist</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${getClass(isWatched)}" type="button">Mark as watched</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite ${getClass(isFavorites)}" type="button">Mark as favorite</button>
          </div>
        </article>
      `
}


