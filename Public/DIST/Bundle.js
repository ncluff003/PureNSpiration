/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Public/JS/Card.js":
/*!***************************!*\
  !*** ./Public/JS/Card.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Card": function() { return /* binding */ Card; },
/* harmony export */   "cardShell": function() { return /* binding */ cardShell; },
/* harmony export */   "childElement": function() { return /* binding */ childElement; }
/* harmony export */ });
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


/***/ }),

/***/ "./Public/JS/Story.js":
/*!****************************!*\
  !*** ./Public/JS/Story.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Story": function() { return /* binding */ Story; }
/* harmony export */ });
///////////////////////////////////////////////
// STORY CLASS
class Story {
  constructor ( options ) {
  this.story = options.story;
  this.container = options.container;
  this.currentStatement = options.currentStatement;
  this.currentCharacter = options.currentCharacter;
  this.cursor = options.cursor;
  this.interval = options.interval;
  }
  _eraseCharacter (currentSentence) {
    let text = currentSentence.substring( 0, this.currentCharacter);
    return text;
  }
  _addCharacter (currentSentence) {
    let text = currentSentence.substring( 0, this.currentCharacter + 1 );
    return text;
  }
  _erase (textContainer, textTyped, cursor) {
    cursor.style.display = `block`;
    textContainer.textContent = `${this._eraseCharacter( textTyped[this.currentStatement] )}`;

    if (textContainer.textContent !== '') this.currentCharacter--;
    if ( textContainer.textContent === '') {
      this.currentStatement === textTyped.length - 1 ? this.currentStatement = 0 : this.currentStatement++;
      clearInterval ( this.interval );
      this.timeout = setTimeout( () => {
        this.interval = setInterval( () => {
          this._type(textContainer, textTyped, this.cursor);
        }, 100);
      }, 200);
    }
  }
  _type (textContainer, textTyped, cursor) {
    textContainer.textContent = `${this._addCharacter( textTyped[this.currentStatement] )}`;
    if (textContainer.textContent !== textTyped[this.currentStatement]) {
      this.currentCharacter++;
      textContainer.textContent = `${this._addCharacter( textTyped[this.currentStatement] )}`;
    }
    if (textContainer.textContent === textTyped[this.currentStatement]) {
      if ( this.currentCharacter > textTyped[ this.currentStatement ].length ) {
        this.currentCharacter = textTyped[ this.currentStatement ].length;
      }
      cursor.style.display = 'none';
      clearInterval ( this.interval );
      this.timeout = setTimeout ( () => {
        this.interval = setInterval( () => {
          this._erase (this.container, this.story, this.cursor);
        }, 50);
      }, 1500);
    }
    return this.currentStatement, this.currentCharacter;
  }
}
///////////////////////////////////////////////
// EXPORTED VALUES


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**************************!*\
  !*** ./Public/JS/App.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Story_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Story.js */ "./Public/JS/Story.js");
/* harmony import */ var _Card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.js */ "./Public/JS/Card.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

////////////////////////////////////////////////
// IMPORTED VALUES

 ///////////////////////////////////////////////
// PARAGRAPH CLASS -- STORY CHILD

var Paragraph = /*#__PURE__*/function (_Story) {
  _inherits(Paragraph, _Story);

  var _super = _createSuper(Paragraph);

  function Paragraph(options) {
    _classCallCheck(this, Paragraph);

    var superOpts = _objectSpread({}, options);

    return _super.call(this, superOpts);
  }

  _createClass(Paragraph, [{
    key: "_startErasing",
    value: function _startErasing() {
      var _this = this;

      this.interval = setInterval(function () {
        _this._erase(_this.container, _this.story, _this.cursor);
      }, 50);
    }
  }, {
    key: "_startTyping",
    value: function _startTyping() {
      var _this2 = this;

      this.interval = setInterval(function () {
        _this2._type(_this2.container, _this2.story, _this2.cursor);
      }, 100);
    }
  }]);

  return Paragraph;
}(_Story_js__WEBPACK_IMPORTED_MODULE_0__.Story); ///////////////////////////////////////////////
// SKILL CLASS -- CARD CHILD


var Skill = /*#__PURE__*/function (_Card) {
  _inherits(Skill, _Card);

  var _super2 = _createSuper(Skill);

  function Skill(options) {
    _classCallCheck(this, Skill);

    var superOpts = _objectSpread({}, options);

    return _super2.call(this, superOpts);
  }

  _createClass(Skill, [{
    key: "_produceSkillCard",
    value: function _produceSkillCard(skillImage, skillTitle) {
      this._createCardOuterShell('div', 'skill-card'); // Create The Card.


      _Card_js__WEBPACK_IMPORTED_MODULE_1__.cardShell.classList.add("column_1-1", "row_1-1");

      this._createCardElement('div', 'skill-image-container') // Create Create The Image Container
      ._insertHTML(_Card_js__WEBPACK_IMPORTED_MODULE_1__.childElement, 'beforeend', skillImage) // Insert Image Into Image Container.
      ._attachElement(_Card_js__WEBPACK_IMPORTED_MODULE_1__.cardShell, _Card_js__WEBPACK_IMPORTED_MODULE_1__.childElement, 'beforeend') // Attach Image Container To The Card.
      ._createCardElement('div', 'skill-title-container') // Create The Title Container
      ._insertHTML(_Card_js__WEBPACK_IMPORTED_MODULE_1__.childElement, 'beforeend', skillTitle) // Insert The Title Into Its Container
      ._attachElement(_Card_js__WEBPACK_IMPORTED_MODULE_1__.cardShell, _Card_js__WEBPACK_IMPORTED_MODULE_1__.childElement, 'beforeend') // Attach Title Container To The Card
      ._attachElement(showcase[0], _Card_js__WEBPACK_IMPORTED_MODULE_1__.cardShell, 'beforeend'); // Attach The Card To The DOM Element.

    }
  }]);

  return Skill;
}(_Card_js__WEBPACK_IMPORTED_MODULE_1__.Card); ///////////////////////////////////////////////
// PROJECT CLASS -- CARD CHILD


var Project = /*#__PURE__*/function (_Card2) {
  _inherits(Project, _Card2);

  var _super3 = _createSuper(Project);

  function Project(options) {
    var _this3;

    _classCallCheck(this, Project);

    var superOpts = _objectSpread({}, options);

    _this3 = _super3.call(this, superOpts);
    _this3.backgroundColor = options.backgroundColor;
    _this3.textColor = options.textColor;
    _this3.description = options.description;
    _this3.link = options.link;
    _this3.repository = options.repository;
    return _this3;
  }

  _createClass(Project, [{
    key: "_selectProjectColors",
    value: function _selectProjectColors(element, projectBGColor, projectTextColor) {
      element.style.backgroundColor = projectBGColor;
      element.style.color = projectTextColor;
      return element, this;
    }
  }, {
    key: "_createProjectLinkContainer",
    value: function _createProjectLinkContainer(parentingElement, projectLink1, projectLink2) {
      this._createCardElement('div', 'project-card-content-link-container')._attachElement(parentingElement, _Card_js__WEBPACK_IMPORTED_MODULE_1__.childElement, 'beforeend');

      var childEl = _Card_js__WEBPACK_IMPORTED_MODULE_1__.childElement;

      this._createCardElement('a', 'project-card-content-link-container--link')._insertHTML(_Card_js__WEBPACK_IMPORTED_MODULE_1__.childElement, 'beforeend', 'View Code', projectLink2)._attachElement(childEl, _Card_js__WEBPACK_IMPORTED_MODULE_1__.childElement, 'beforeend')._createCardElement('a', 'project-card-content-link-container--link')._insertHTML(_Card_js__WEBPACK_IMPORTED_MODULE_1__.childElement, 'beforeend', "Go To Site", projectLink1)._attachElement(childEl, _Card_js__WEBPACK_IMPORTED_MODULE_1__.childElement, 'beforeend');

      return this;
    }
  }, {
    key: "_createProjectContent",
    value: function _createProjectContent(parentElement, projectDescription, projectLink1, projectLink2) {
      this._createCardElement('div', 'project-card-content');

      var childEl = _Card_js__WEBPACK_IMPORTED_MODULE_1__.childElement;

      this._attachElement(parentElement, childEl, 'beforeend')._createCardElement('div', 'project-card-content-description-container')._attachElement(childEl, _Card_js__WEBPACK_IMPORTED_MODULE_1__.childElement, 'beforeend')._insertHTML(_Card_js__WEBPACK_IMPORTED_MODULE_1__.childElement, 'beforeend', projectDescription)._createProjectLinkContainer(childEl, projectLink1, projectLink2);

      return this;
    }
  }, {
    key: "_createProjectCover",
    value: function _createProjectCover(parentElement, projectImage, projectTitle, projectBGColor, projectTextColor) {
      _Card_js__WEBPACK_IMPORTED_MODULE_1__.cardShell.classList.add("column_1-1", "row_1-1");

      this._createCardElement('div', 'project-card-cover')._attachElement(parentElement, _Card_js__WEBPACK_IMPORTED_MODULE_1__.childElement, "beforeend");

      var childEl = _Card_js__WEBPACK_IMPORTED_MODULE_1__.childElement;

      this._createCardElement('div', 'project-card-cover-image-container')._attachElement(childEl, _Card_js__WEBPACK_IMPORTED_MODULE_1__.childElement, 'beforeend')._insertHTML(_Card_js__WEBPACK_IMPORTED_MODULE_1__.childElement, 'beforeend', projectImage)._createCardElement('div', 'project-card-cover-title-container')._insertHTML(_Card_js__WEBPACK_IMPORTED_MODULE_1__.childElement, 'beforeend', projectTitle)._selectProjectColors(_Card_js__WEBPACK_IMPORTED_MODULE_1__.childElement, projectBGColor, projectTextColor)._attachElement(childEl, _Card_js__WEBPACK_IMPORTED_MODULE_1__.childElement, 'beforeend')._attachElement(showcase[1], parentElement, 'beforeend');

      return parentElement, _Card_js__WEBPACK_IMPORTED_MODULE_1__.childElement, this;
    }
  }, {
    key: "_getProjectCount",
    value: function _getProjectCount(index) {
      var projectCount = document.getElementsByClassName('project-count')[0];
      projectCount.textContent = "".concat(index + 1, " / ").concat(projectCards.length);
    }
  }, {
    key: "_produceProjectCard",
    value: function _produceProjectCard(projectImage, projectTitle, projectBGColor, projectTextColor, projectDescription, projectLink1, projectLink2) {
      this._createCardOuterShell('div', 'project-card')._createProjectCover(_Card_js__WEBPACK_IMPORTED_MODULE_1__.cardShell, projectImage, projectTitle, projectBGColor, projectTextColor)._createProjectContent(_Card_js__WEBPACK_IMPORTED_MODULE_1__.cardShell, projectDescription, projectLink1, projectLink2);
    }
  }]);

  return Project;
}(_Card_js__WEBPACK_IMPORTED_MODULE_1__.Card); ///////////////////////////////////////////////
// PARAGRAPH VARIABLES
// -- INTRODUCTION PARAGRAPH VARIABLES -- //


var statements = ["Hello! Let me introduce myself.", "My name is Nathan Cluff.", "I am a Front-End Developer,", "who is aspiring to become proficient", "in both Front & Back-End Development.", "To navigate this page, you can", "Scroll with the mouse, keyboard, & finger.", "Thank you for visiting my site."];
var introCursor = document.querySelector(".typing-text--cursor");
var typingTextContent = document.getElementsByClassName("typing-text--introduction")[0];

var introButtons = _toConsumableArray(document.querySelectorAll(".introduction-button"));

var introClasses = ["introduction-button--hiddenLeft", "introduction-button--hiddenDown", "introduction-button--hiddenRight"]; // -- ABOUT PARAGRAPH VARIABLES -- //

var missionStatement = ["This is my Mission Statement.", "To improve the growth and", "profitability of your organization", "simultaneously with my skillset."];
var aboutCursor = document.querySelector(".about-typing-text--cursor");
var aboutTypingTextContent = document.getElementsByClassName("about-typing-text")[0]; // -- DUAL PARAGRAPH VARIABLES -- //

var intervalName, intervalName2; ///////////////////////////////////////////////
// PARAGRAPH OBJECTS

var paragraph1 = new Paragraph({
  story: statements,
  container: typingTextContent,
  currentStatement: 0,
  currentCharacter: 0,
  cursor: introCursor,
  interval: intervalName
});
var paragraph2 = new Paragraph({
  story: missionStatement,
  container: aboutTypingTextContent,
  currentStatement: 0,
  currentCharacter: 0,
  cursor: aboutCursor,
  interval: intervalName2
});
var showcase = document.querySelectorAll(".showcase-grid"); //////////////////
//  -- SKILLS --  //

var html5 = new Skill({
  title: "HTML5",
  image: "<i class='fab fa-html5'></i>"
});
var css3 = new Skill({
  title: "CSS3",
  image: "<i class='fab fa-css3-alt'></i>"
});
var javascript = new Skill({
  title: "JavaScript",
  image: "<i class='fab fa-js-square'></i>"
});
var nodeJS = new Skill({
  title: "Node.js",
  image: "<i class='fab fa-node-js'></i>"
});
var scss = new Skill({
  title: "SCSS",
  image: "<i class='fab fa-sass'></i>"
});
var less = new Skill({
  title: "Less",
  image: "<i class='fab fa-less'></i>"
});
var vue = new Skill({
  title: "Vue.js",
  image: "<i class='fab fa-vuejs'></i>"
});
var git = new Skill({
  title: "Git",
  image: "<i class='fab fa-git-square'></i>"
});
var github = new Skill({
  title: "Github",
  image: "<i class='fab fa-github-square'></i>"
});
var skills = [html5, css3, javascript, nodeJS, scss, less, vue, git, github];
skills.forEach(function (s, i) {
  s._produceSkillCard("".concat(s.image), "".concat(s.title));
}); //////////////////
// PROJECTS

var purenspiration = new Project({
  title: "Pure N Spiration",
  image: "<img src=\"/CSS/Images/Computer_Desktop_Image.svg\">",
  backgroundColor: "#FFD700",
  textColor: "#333333",
  description: "This is my project",
  link: "#",
  repository: "https://github.com/ncluff003/PureNSpiration"
});
var projects = [purenspiration];
projects.forEach(function (p, i) {
  p._produceProjectCard("".concat(p.image), "".concat(p.title), "".concat(p.backgroundColor), "".concat(p.textColor), "".concat(p.description), "".concat(p.link), "".concat(p.repository));
}); ///////////////////////////////////////////////
// APP CLASS

var App = /*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);

    /////////////////////////////////////////
    //  Site Setup
    this._hideGrids(allGrids);

    this._observeNav();

    this._hideButtons();

    this._watchNav(nav, 0.5, 1);

    paragraph1._startTyping();

    this._revealButton(0);

    this._createDots();

    this._watchDots();

    this._activateDot(0);

    index = 0;
    index2 = 0;

    this._watchCards(showcase[0], skillCards, index);

    this._setUpCards(skillCards, index);

    this._createCardButtonNavigation(showcase[0]);

    this._watchCardButtons(skillCards, showcase[0]);

    this._watchCards(showcase[1], projectCards, index2);

    this._setUpCards(projectCards, index);

    this._createCardButtonNavigation(showcase[1]);

    this._watchCardButtons(projectCards, showcase[1]);
  }

  _createClass(App, [{
    key: "_goToCard",
    value: function _goToCard(cardType, index, prevCards, nextCards) {
      var prevCardsReverse = prevCards.reverse();
      prevCardsReverse.forEach(function (card, i) {
        i === 0 ? card.style.transform = "translate(".concat((300 + (i + 1) * 15) * -1, "% , ").concat(-8, "%)") : i > 0 ? card.style.transform = "translate(".concat((200 + (i + 1) * 115) * -1, "% , ").concat(-8, "%)") : '';
      });
      cardType.forEach(function (card, i) {
        i - index === 0 ? card.style.transform = "translate(".concat(0, "% , ", -8, "%)") : i - index === 1 || i - index > 1 ? card.style.transform = "translate(".concat(100 * (i - index) + 200 + (nextCards.indexOf(card) + 1) * 15, "% , ").concat(-8, "%)") : '';
      });
    }
  }, {
    key: "_prevCard",
    value: function _prevCard(cardType, index) {
      var frontDoorCards = cardType.slice(index + 1, cardType.length);
      var backDoorCards = cardType.slice(0, index);

      this._goToCard(cardType, index, backDoorCards, frontDoorCards);

      return index;
    }
  }, {
    key: "_nextCard",
    value: function _nextCard(cardType, index) {
      var frontDoorCards = cardType.slice(index + 1, cardType.length);
      var backDoorCards = cardType.slice(0, index);

      this._goToCard(cardType, index, backDoorCards, frontDoorCards);

      return index;
    }
  }, {
    key: "_watchCards",
    value: function _watchCards(cardContainer, cardType, index) {
      var _this4 = this;

      document.addEventListener("keyup", function (e) {
        if (e.key === "ArrowLeft") {
          if (cardContainer.getBoundingClientRect().top <= 523 && cardContainer.getBoundingClientRect().bottom >= 686) {
            index <= 0 && cardContainer === showcase[0] ? index = cardType.length - 1 : index--;
            index <= -1 ? index = cardType.length - 1 : index >= cardType.length ? index = 0 : index;
            cardType === skillCards ? _this4._prevCard(cardType, index) : cardType === projectCards ? _this4._prevCard(cardType, index) : '';
            cardType === projectCards ? projects[projects.length - 1]._getProjectCount(index) : e.key;
            console.log(index);
          }
        }

        if (e.key === "ArrowRight") {
          if (cardContainer.getBoundingClientRect().top <= 523 && cardContainer.getBoundingClientRect().bottom >= 686) {
            index >= cardType.length - 1 ? index = 0 : index++;
            index <= -1 ? index = cardType.length - 1 : index >= cardType.length ? index = 0 : index;
            cardType === skillCards ? _this4._nextCard(cardType, index) : cardType === projectCards ? _this4._nextCard(cardType, index) : '';
            cardType === projectCards ? projects[projects.length - 1]._getProjectCount(index) : e.key;
            console.log(index);
          }
        }
      });
      return index;
    }
  }, {
    key: "_setUpCards",
    value: function _setUpCards(cardType, index) {
      if (cardType === projectCards) {
        projects[projects.length - 1]._getProjectCount(index);
      }

      cardType.forEach(function (card, i) {
        i - index === 0 ? card.style.transform = "translate(".concat(0, "% , ", -8, "%)") : i - index === 1 || i - index > 1 ? card.style.transform = "translate(".concat(100 * (i - index) + 200 + i * 15, "% , ").concat(-8, "%)") : card.style.transform = "translate(".concat((100 * (i + index) + 200 + index * 15) * -1, "% , ").concat(-8, "%)");
      });
    }
  }, {
    key: "_watchCardButtons",
    value: function _watchCardButtons(cardType, cardContainer) {
      var _this5 = this;

      cardContainer.addEventListener("click", function (e) {
        e.preventDefault();
        var clickedButton = e.target.closest(".button");
        if (!clickedButton) return;
        cardType === skillCards && clickedButton.classList.contains("card-button-left") ? index-- : cardType === skillCards && clickedButton.classList.contains("card-button-right") ? index++ : index = index;
        cardType === projectCards && clickedButton.classList.contains("card-button-left") ? index2-- : cardType === projectCards && clickedButton.classList.contains("card-button-right") ? index2++ : index2;
        index <= -1 ? index = cardType.length - 1 : index >= cardType.length ? index = 0 : index;
        index2 <= -1 ? index2 = cardType.length - 1 : index2 >= cardType.length ? index2 = 0 : index2;
        cardType === skillCards && clickedButton.classList.contains("card-button-left") ? _this5._prevCard(cardType, index) : cardType === skillCards && clickedButton.classList.contains("card-button-right") ? _this5._nextCard(cardType, index) : index;

        if (cardType === projectCards && clickedButton.classList.contains("card-button-left")) {
          _this5._prevCard(cardType, index2);

          purenspiration._getProjectCount(index2);
        }

        if (cardType === projectCards && clickedButton.classList.contains("card-button-right")) {
          _this5._nextCard(cardType, index2);

          purenspiration._getProjectCount(index2);
        }
      });
    }
  }, {
    key: "_createCardButtonNavigation",
    value: function _createCardButtonNavigation(cardContainer) {
      var buttonLeft = document.createElement('button');
      var buttonRight = document.createElement("button");
      buttonLeft.classList.add("button", "card-button-left");
      buttonRight.classList.add("button", "card-button-right");
      buttonLeft.insertAdjacentHTML("beforeend", "<i class=\"fas fa-arrow-left\"></img>");
      buttonRight.insertAdjacentHTML("beforeend", "<i class=\"fas fa-arrow-right\"></i>");
      cardContainer.insertAdjacentElement("afterbegin", buttonLeft);
      cardContainer.insertAdjacentElement("beforeend", buttonRight);
    }
  }, {
    key: "_createDots",
    value: function _createDots() {
      slideOptions.forEach(function (_, i) {
        optionNavContainer.insertAdjacentHTML("beforeend", "<button class=\"about-me-container__option-navigation__dot\" data-sliderOption=\"".concat(i, "\"></button>"));
      });
    }
  }, {
    key: "_activateDot",
    value: function _activateDot(slide) {
      document.querySelectorAll(".about-me-container__option-navigation__dot").forEach(function (dot) {
        dot.classList.remove("about-me-container__option-navigation__dot--active");
      });
      document.querySelector(".about-me-container__option-navigation__dot[data-sliderOption=\"".concat(slide, "\"]")).classList.add("about-me-container__option-navigation__dot--active");
    }
  }, {
    key: "_goToSlide",
    value: function _goToSlide(slide) {
      slideOptions.forEach(function (s, i) {
        s.style.transform = "translateX(".concat(100 * (i - slide), "%)");
      });
    }
  }, {
    key: "_watchDots",
    value: function _watchDots() {
      var _this6 = this;

      optionNavContainer.addEventListener("click", function (e) {
        if (e.target.classList.contains("about-me-container__option-navigation__dot")) {
          var slide = e.target.dataset.slideroption;

          _this6._goToSlide(slide);

          _this6._activateDot(slide);
        }
      });
    }
  }, {
    key: "_handleHover",
    value: function _handleHover(e) {
      var _this7 = this;

      if (e.target.classList.contains('navigation__links--linkItem__link')) {
        var hovered = e.target;
        var siblings = hovered.closest(".navigation").querySelectorAll('.navigation__links--linkItem__link');
        siblings.forEach(function (el) {
          if (el !== hovered) {
            el.style.opacity = _this7;
          }
        });
      }
    }
  }, {
    key: "_watchNav",
    value: function _watchNav(navigation, opacity1, opacity2) {
      // Used Bind Method To Pass An "Argument" Into A Handler Function
      navigation.addEventListener('mouseover', this._handleHover.bind(opacity1));
      navigation.addEventListener('mouseout', this._handleHover.bind(opacity2));
    }
  }, {
    key: "_stickyNav",
    value: function _stickyNav(entries) {
      var _entries = _slicedToArray(entries, 1),
          entry = _entries[0];

      if (!entry.isIntersecting) {
        nav.classList.add('navigation--sticky');

        var _iterator = _createForOfIteratorHelper(links),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var link = _step.value;
            link.classList.add("navigation__links--linkItem__link--sticky");
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } else {
        nav.classList.remove('navigation--sticky');

        var _iterator2 = _createForOfIteratorHelper(links),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _link = _step2.value;

            _link.classList.remove("navigation__links--linkItem__link--sticky");
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    }
  }, {
    key: "_observeNav",
    value: function _observeNav() {
      var observer = new IntersectionObserver(this._stickyNav, observerOptions);
      observer.observe(introduction);
    }
  }, {
    key: "_revealButton",
    value: function _revealButton() {
      var revealButtonInterval = setInterval(function () {
        if (paragraph1.story === statements && paragraph1.currentStatement === 1) {
          console.log(paragraph1.currentStatement);
          introButtons[paragraph1.currentStatement - 1].classList.remove(introClasses[paragraph1.currentStatement - 1]);
        }

        if (paragraph1.story === statements && paragraph1.currentStatement === 4) {
          console.log(paragraph1.currentStatement);
          introButtons[paragraph1.currentStatement - 3].classList.remove(introClasses[paragraph1.currentStatement - 3]);
        }

        if (paragraph1.story === statements && paragraph1.currentStatement === 7) {
          console.log(paragraph1.currentStatement);
          introButtons[paragraph1.currentStatement - 5].classList.remove(introClasses[paragraph1.currentStatement - 5]);
          setTimeout(function () {
            clearInterval(revealButtonInterval);
            console.log("Interval Cleared!");
          }, 1000);
        }
      }, 2900);
    }
  }, {
    key: "_hideButtons",
    value: function _hideButtons() {
      // Hiding Introduction Buttons To Start
      var _iterator3 = _createForOfIteratorHelper(introButtons.entries()),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _step3$value = _slicedToArray(_step3.value, 2),
              _index = _step3$value[0],
              button = _step3$value[1];

          button.classList.add("".concat(introClasses[_index]));
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }, {
    key: "_revealSection",
    value: function _revealSection(entries, observer) {
      var _entries2 = _slicedToArray(entries, 1),
          entry = _entries2[0];

      if (!entry.isIntersecting) return;
      entry.target.classList.remove('grid-container--hidden');

      if (entry.target === allGrids[1]) {
        paragraph2._startTyping();
      }

      observer.unobserve(entry.target);
    }
  }, {
    key: "_hideGrids",
    value: function _hideGrids(grids) {
      var _iterator4 = _createForOfIteratorHelper(grids),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var grid = _step4.value;

          if (grid === grids[0]) {
            continue;
          }

          var sectionObserver = new IntersectionObserver(this._revealSection, revealSectionOptions);
          sectionObserver.observe(grid);
          grid.classList.add("grid-container--hidden");
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
  }]);

  return App;
}(); ///////////////////////////////////////////////
// APP VARIABLES


var index, index2;

var allGrids = _toConsumableArray(document.querySelectorAll(".grid-container"));

var nav = document.querySelector(".navigation");

var links = _toConsumableArray(document.querySelectorAll(".navigation__links--linkItem__link"));

var navHeight = nav.getBoundingClientRect().height;
var introduction = document.getElementsByClassName("grid-container")[0];
var slideOptions = document.querySelectorAll(".about-me-container__option-slider--option");
var optionNavContainer = document.querySelector(".about-me-container__option-navigation");

var skillCards = _toConsumableArray(document.querySelectorAll(".skill-card"));

var projectCards = _toConsumableArray(document.querySelectorAll(".project-card"));

var revealSectionOptions = {
  root: null,
  threshold: 0.35
};
var observerOptions = {
  root: null,
  // null wil make the viewport the root.
  threshold: 0,
  // threshold of the root element which the function will be called.
  rootMargin: "-".concat(navHeight + 360, "px")
}; ///////////////////////////////////////////////
// APP

var app = new App();
}();
/******/ })()
;
//# sourceMappingURL=Bundle.js.map