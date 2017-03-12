import CSSModules from 'react-css-modules';
import React, { PropTypes } from 'react';
import styles from './Loading.scss';

const Loading = ({ className, style }) =>
  (<span className={className} style={style} styleName="loading" />);

Loading.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};

Loading.defaultProps = {
  className: '',
  style: null
};

export default CSSModules(Loading, styles);
