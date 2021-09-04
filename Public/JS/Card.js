let cardShell, childElement;
///////////////////////////////////////////////
// CARD CLASS
class Card {
  constructor(options) {
    this.title = options.title;
    this.image = options.image;
    this.domElement = options.domElement;
  }
  _attachToDom(domElement, containingElement, elementLocation) {
    if (typeof containingElement === `Element` || typeof containingElement === `object`) domElement.insertAdjacentElement(elementLocation, containingElement);
    if (typeof containingElement === `String` || typeof containingElement === `html`) domElement.insertAdjacentHTML(elementLocation, containingElement);
    return this;
  }

  _insertHTML(containingElement, contentLocale, content, containingElementLink) {
    containingElement.insertAdjacentHTML(contentLocale, content);
    containingElement.tagName === `A` ? (containingElement.href = containingElementLink) : (containingElement.href = '');
    return containingElement, this;
  }
  _attachElement(containingElement, attachmentElement, elementLocation) {
    containingElement.insertAdjacentElement(elementLocation, attachmentElement);
    return containingElement, attachmentElement, this;
  }
  _createCardElement(element, elementClass) {
    childElement = document.createElement(element);
    childElement.classList.add(elementClass);
    return childElement, this;
  }
  _createCardOuterShell(element, elementClass) {
    cardShell = document.createElement(element);
    cardShell.classList.add(elementClass);
    return cardShell, this;
  }
}
///////////////////////////////////////////////
// EXPORTED VALUES
export { Card, cardShell, childElement };
