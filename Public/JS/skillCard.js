////////////////////////////////////////////////
// IMPORTED VALUES
import { Card, cardShell, childElement } from './Card.js';

///////////////////////////////////////////////
// SKILL CLASS -- CARD CHILD
export class Skill extends Card {
  constructor(options) {
    const superOpts = { ...options };
    super(superOpts);
  }
  _produceSkillCard(skillImage, skillTitle, domContainer) {
    this._createCardOuterShell('div', 'skill-card'); // Create The Card.
    cardShell.classList.add(`column_1-1`, `row_1-1`);
    this._createCardElement('div', 'skill-image-container') // Create Create The Image Container
      ._insertHTML(childElement, 'beforeend', skillImage) // Insert Image Into Image Container.
      ._attachElement(cardShell, childElement, 'beforeend') // Attach Image Container To The Card.
      ._createCardElement('div', 'skill-title-container') // Create The Title Container
      ._insertHTML(childElement, 'beforeend', skillTitle) // Insert The Title Into Its Container
      ._attachElement(cardShell, childElement, 'beforeend') // Attach Title Container To The Card
      ._attachToDom(domContainer, cardShell, 'beforeend'); // Attach The Card To The DOM Element.
  }
}
