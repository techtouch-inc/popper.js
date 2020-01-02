import getStyleComputedProperty from './getStyleComputedProperty';
import getParentNode from './getParentNode';

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
export default function isFixed(element) {
  const parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  const nodeName = parentNode.nodeName;
  if (nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  return isFixed(parentNode);
}
