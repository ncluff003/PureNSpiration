export const replaceClassName = (element, classReplaced, replacementClass) => {
  element.classList.remove(classReplaced);
  element.classList.add(replacementClass);
};

export const insertElement = (position, container, element) => {
  if (container) {
    container.insertAdjacentElement(position, element);
  }
};

export const addClasses = (element, classes) => {
  classes.forEach((c) => {
    element.classList.add(c);
  });
};

export const removeClasses = (element, classes) => {
  classes.forEach((c) => {
    element.classList.remove(c);
  });
};

export const multiplyTwo = (numberOne, numberTwo) => {
  return numberOne * numberTwo;
};
