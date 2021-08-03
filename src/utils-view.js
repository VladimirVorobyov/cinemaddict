import Abstract from "./view/abstract";

export const renderElement = (container, element, place = 'beforeend') => {
    if (container instanceof Abstract) {
    container = container.getElement();
  }

  if (element instanceof Abstract) {
    element = element.getElement();
  }

  switch (place) {
    case 'afterbegin':
      container.prepend(element);
      break;
    case 'beforeend':
      container.append(element);
      break;
  }
};
export const createElement = (template) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;
  return newElement.firstChild;
};

export const replace = (oldChild, element) => {

  if (oldChild instanceof Abstract) {
    oldChild = oldChild.getElement();
  }

  if (element === null || oldChild === null ) {
    throw new Error('Can\'t replace unexisting elements');
  }

  element.appendChild(oldChild);
};

export const remove = (oldChild, element) => {

  if (oldChild instanceof Abstract) {
    oldChild = oldChild.getElement();
  }

  if (element === null || oldChild === null ) {
    throw new Error('Can\'t replace unexisting elements');
  }

  element.removeChild(oldChild);
};

export const coppy = (newChild, oldChild) => {
  if (oldChild instanceof Abstract) {
    oldChild = oldChild.getElement();
  }

  if (newChild instanceof Abstract) {
    newChild = newChild.getElement();
  }

  const parent = oldChild.parentElement;

  if (parent === null || oldChild === null || newChild === null) {
    throw new Error('Can\'t replace unexisting elements');
  }

  parent.replaceChild(newChild, oldChild);
};

export const removeButton = (component) => {
  if (!(component instanceof Abstract)) {
    throw new Error('Can remove only components');
  }

  component.getElement().remove();
  component.removeElement();
};
