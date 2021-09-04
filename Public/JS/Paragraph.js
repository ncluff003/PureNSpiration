////////////////////////////////////////////////
// IMPORTED VALUES
import { Story } from './Story.js';

///////////////////////////////////////////////
// PARAGRAPH CLASS -- STORY CHILD
export class Paragraph extends Story {
  constructor(options) {
    const superOpts = { ...options };
    super(superOpts);
  }
  _startErasing() {
    this.interval = setInterval(() => {
      this._erase(this.container, this.story, this.cursor);
    }, 50);
  }
  _startTyping() {
    this.interval = setInterval(() => {
      this._type(this.container, this.story, this.cursor);
    }, 100);
  }
}
