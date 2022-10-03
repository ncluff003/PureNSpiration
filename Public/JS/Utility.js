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

export const toggleClass = (element, className) => {
  return element.classList.toggle(className);
};

export const toggleClasses = (element, classNames) => {
  classNames.forEach((className) => {
    element.classList.toggle(className);
  });
};

export const multiplyTwo = (numberOne, numberTwo) => {
  return numberOne * numberTwo;
};

export const reloadPage = () => {
  setTimeout(() => {
    window.location.reload();
  }, 2000);
};

export const clearIntervalInstigator = (interval) => {
  clearInterval(interval);
  console.log(`cleared`);
};
