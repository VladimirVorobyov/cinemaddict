import Abstract from "./abstract";
const createButton = () => {
  return '<button class="films-list__show-more">Show more</button>';
}

export default class Button extends Abstract {
  constructor (){
    super();
    this._clickHandler = this._clickHandler.bind(this);
  }
  getTemplate() {
    return createButton();
  }
   _clickHandler(evt) {
    evt.preventDefault();
    this._callback.click();
  }

  setClickHandler(callback) {
    this._callback.click = callback;
    this.getElement().addEventListener(`click`, this._clickHandler);
  }
}
