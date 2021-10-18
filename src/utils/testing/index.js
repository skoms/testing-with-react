import PropTypes from 'prop-types';

export const expectNoPropTypeErrors = (component, expectedProps) => {
  PropTypes.checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
}