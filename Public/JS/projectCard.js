////////////////////////////////////////////////
// IMPORTED VALUES
import { Card, cardShell, childElement } from './Card.js';

export ///////////////////////////////////////////////
// PROJECT CLASS -- CARD CHILD
class Project extends Card {
  constructor(options) {
    const superOpts = { ...options };
    super(superOpts);
    this.backgroundColor = options.backgroundColor;
    this.textColor = options.textColor;
    this.description = options.description;
    this.link = options.link;
    this.repository = options.repository;
  }

  _selectProjectColors(element, projectBGColor, projectTextColor) {
    element.style.backgroundColor = projectBGColor;
    element.style.color = projectTextColor;
    return element, this;
  }
  _createProjectLinkContainer(parentingElement, projectLink1, projectLink2) {
    this._createCardElement('div', 'project-card-content-link-container')._attachElement(parentingElement, childElement, 'beforeend');
    let childEl = childElement;
    this._createCardElement('a', 'project-card-content-link-container--link')
      ._insertHTML(childElement, 'beforeend', 'View Code', projectLink2)
      ._attachElement(childEl, childElement, 'beforeend')
      ._createCardElement('a', 'project-card-content-link-container--link')
      ._insertHTML(childElement, 'beforeend', `Go To Site`, projectLink1)
      ._attachElement(childEl, childElement, 'beforeend');
    return this;
  }
  _createProjectContent(parentElement, projectDescription, projectLink1, projectLink2) {
    this._createCardElement('div', 'project-card-content');
    let childEl = childElement;
    this._attachElement(parentElement, childEl, 'beforeend')
      ._createCardElement('div', 'project-card-content-description-container')
      ._attachElement(childEl, childElement, 'beforeend')
      ._insertHTML(childElement, 'beforeend', projectDescription)
      ._createProjectLinkContainer(childEl, projectLink1, projectLink2);
    return this;
  }
  _createProjectCover(parentElement, projectImage, projectTitle, projectBGColor, projectTextColor, domContainer) {
    cardShell.classList.add(`column_1-1`, `row_1-1`);
    this._createCardElement('div', 'project-card-cover')._attachElement(parentElement, childElement, `beforeend`);
    let childEl = childElement;
    this._createCardElement('div', 'project-card-cover-image-container')
      ._attachElement(childEl, childElement, 'beforeend')
      ._insertHTML(childElement, 'beforeend', projectImage)
      ._createCardElement('div', 'project-card-cover-title-container')
      ._insertHTML(childElement, 'beforeend', projectTitle)
      ._selectProjectColors(childElement, projectBGColor, projectTextColor)
      ._attachElement(childEl, childElement, 'beforeend')
      ._attachToDom(domContainer, parentElement, 'beforeend');
    return parentElement, childElement, this;
  }
  _getProjectCount(index, cardType) {
    let projectCount = document.getElementsByClassName('project-count')[0];
    projectCount.textContent = `${index + 1} / ${cardType.length}`;
  }
  _produceProjectCard(projectImage, projectTitle, projectBGColor, projectTextColor, projectDescription, projectLink1, projectLink2, domContainer) {
    this._createCardOuterShell('div', 'project-card')
      ._createProjectCover(cardShell, projectImage, projectTitle, projectBGColor, projectTextColor, domContainer)
      ._createProjectContent(cardShell, projectDescription, projectLink1, projectLink2);
  }
}
