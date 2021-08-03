import Abstract from "./abstract";

const createComment = (list,item) => {
  const elem = list.find((a) => a.id === item);
  const { title, autor, dateComment, emotion } = elem
  return `<li class="film-details__comment">
            <span class="film-details__comment-emoji">
              <img src="${emotion}" width="55" height="55" alt="emoji-smile">
            </span>
            <div>
              <p class="film-details__comment-text">${title}</p>
              <p class="film-details__comment-info">
                <span class="film-details__comment-author">${autor}</span>
                <span class="film-details__comment-day">${dateComment}</span>
                <button class="film-details__comment-delete">Delete</button>
              </p>
            </div>
          </li>`
}

export default class CommentArr extends Abstract{
  constructor(list,item){
    super();
    this._list = list;
    this._item = item;
  }
  getTemplate(){
    return createComment(this._list,this._item)
  }
}

