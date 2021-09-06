///////////////////////////////////////////////
// STORY CLASS
export class Story {
  constructor(options) {
    this.story = options.story;
    this.container = options.container;
    this.currentStatement = options.currentStatement;
    this.currentCharacter = options.currentCharacter;
    this.cursor = options.cursor;
    this.interval = options.interval;
  }
  _eraseCharacter(currentSentence) {
    let text = currentSentence.substring(0, this.currentCharacter);
    return text;
  }
  _addCharacter(currentSentence) {
    let text = currentSentence.substring(0, this.currentCharacter + 1);
    return text;
  }
  _erase(textContainer, textTyped, cursor) {
    cursor.style.display = `block`;
    textContainer.textContent = `${this._eraseCharacter(textTyped[this.currentStatement])}`;

    if (textContainer.textContent !== '') this.currentCharacter--;
    if (textContainer.textContent === '') {
      this.currentStatement === textTyped.length - 1 ? (this.currentStatement = 0) : this.currentStatement++;
      clearInterval(this.interval);
      this.timeout = setTimeout(() => {
        this.interval = setInterval(() => {
          this._type(textContainer, textTyped, this.cursor);
        }, 100);
      }, 200);
    }
  }
  _type(textContainer, textTyped, cursor) {
    textContainer.textContent = `${this._addCharacter(textTyped[this.currentStatement])}`;
    if (textContainer.textContent !== textTyped[this.currentStatement]) {
      this.currentCharacter++;
      textContainer.textContent = `${this._addCharacter(textTyped[this.currentStatement])}`;
    }
    if (textContainer.textContent === textTyped[this.currentStatement]) {
      if (this.currentCharacter > textTyped[this.currentStatement].length) {
        this.currentCharacter = textTyped[this.currentStatement].length;
      }
      cursor.style.display = 'none';
      clearInterval(this.interval);
      this.timeout = setTimeout(() => {
        this.interval = setInterval(() => {
          this._erase(this.container, this.story, this.cursor);
        }, 50);
      }, 1500);
    }
    return this.currentStatement, this.currentCharacter;
  }
}
