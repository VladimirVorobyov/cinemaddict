export const createGenres = (listGeneres) => {
  return listGeneres.map((elem) => `<span class="film-details__genre">${elem}</span>`).join('');
};

export const createFilmDetails = (card) => {
  const {movieTitle,rating, time, ageEnter, poster, description, isWatchlist, isWatched,
    isFavorites, director,releaseDate, writers,generesPopup, actor,country} = card;
  const getChecked = (item) => item ? 'checked' : '';
  const componentGeneres = createGenres(generesPopup);
  const getNameGenere = () => generesPopup.length <= 1 ? 'Genre' : 'Genres';

  return `
          <section class="film-details">
          <form class="film-details__inner" action="" method="get">
            <div class="film-details__top-container">
              <div class="film-details__close">
                <button class="film-details__close-btn" type="button">close</button>
              </div>
              <div class="film-details__info-wrap">
                <div class="film-details__poster">
                  <img class="film-details__poster-img" src="${poster}" alt="">

                  <p class="film-details__age">${ageEnter}</p>
                </div>

                <div class="film-details__info">
                  <div class="film-details__info-head">
                    <div class="film-details__title-wrap">
                      <h3 class="film-details__title">${movieTitle}</h3>
                      <p class="film-details__title-original">Original: ${movieTitle}</p>
                    </div>

                    <div class="film-details__rating">
                      <p class="film-details__total-rating">${rating}</p>
                    </div>
                  </div>

                  <table class="film-details__table">
                    <tr class="film-details__row">
                      <td class="film-details__term">Director</td>
                      <td class="film-details__cell">${director}</td>
                    </tr>
                    <tr class="film-details__row">
                      <td class="film-details__term">Writers</td>
                      <td class="film-details__cell">${writers}</td>
                    </tr>
                    <tr class="film-details__row">
                      <td class="film-details__term">Actors</td>
                      <td class="film-details__cell">${actor}</td>
                    </tr>
                    <tr class="film-details__row">
                      <td class="film-details__term">Release Date</td>
                      <td class="film-details__cell">${releaseDate}</td>
                    </tr>
                    <tr class="film-details__row">
                      <td class="film-details__term">Runtime</td>
                      <td class="film-details__cell">${time}</td>
                    </tr>
                    <tr class="film-details__row">
                      <td class="film-details__term">Country</td>
                      <td class="film-details__cell">${country}</td>
                    </tr>
                     <tr class="film-details__row" id="generes">
                      <td class="film-details__term">${getNameGenere()}</td>
                      <td class="film-details__cell">
                      ${componentGeneres}
                    </tr>
                  </table>

                  <p class="film-details__film-description">
                  ${description}
                  </p>
                </div>
              </div>

              <section class="film-details__controls">
                <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist" ${getChecked(isWatchlist)}>
                <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

                <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched" ${getChecked(isWatched)}>
                <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>

                <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite" ${getChecked(isFavorites)}>
                <label for="favorite" class="film-details__control-label film-details__control-label--favorite ">Add to favorites</label>
              </section>
            </div>


          </form>
        </section>
  `
}

