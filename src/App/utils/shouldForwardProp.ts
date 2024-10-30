import isPropValid from '@emotion/is-prop-valid';

export const shouldForwardProp = (prop: string): boolean => {
  const isValidDOMAttribute = isPropValid(prop);
  return isValidDOMAttribute || prop.startsWith('$');
};
