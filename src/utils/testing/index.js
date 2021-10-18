import PropTypes from 'prop-types';

// Will throw an error on type error because of 'jest-prop-type-error' library
export const expectNoPropTypeErrors = (component, expectedProps) => {
  PropTypes.checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
}