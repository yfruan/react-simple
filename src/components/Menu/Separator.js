import CSSModules from 'react-css-modules';
import React, { PropTypes } from 'react';
import styles from './Menu.scss';

const Separator = ({ className, style }) =>
  (<hr className={className} style={style} styleName="menu-separator" />);

Separator.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};

Separator.defaultProps = {
  className: '',
  style: null
};

export default CSSModules(Separator, styles);
