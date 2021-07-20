let cardShell, childElement;
///////////////////////////////////////////////
// CARD CLASS
class Card {
  constructor ( options ) {
    this.title = options.title;
    this.image = options.image;
  }
  _insertHTML (containingElement, contentLocale, content, containingElementLink) {
    containingElement.insertAdjacentHTML(contentLocale, content);
    containingElement.tagName === `A` ? containingElement.href = containingElementLink : containingElement.href = '';
    return containingElement, this;
  }
  _attachElement ( containingElement, attachmentElement, elementLocation ) {
    containingElement.insertAdjacentElement( elementLocation, attachmentElement );
    return containingElement, attachmentElement, this;
  }
  _createCardElement ( element, elementClass ) {
    childElement = document.createElement( element );
    childElement.classList.add( elementClass );
    return childElement, this;
  }
  _createCardOuterShell ( element, elementClass ) {
    cardShell = document.createElement( element );
    cardShell.classList.add( elementClass );
    return cardShell, this;
  } 
}
///////////////////////////////////////////////
// EXPORTED VALUES
export { Card, cardShell, childElement };