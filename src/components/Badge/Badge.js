import CSSModules from 'react-css-modules';
import React, { PropTypes } from 'react';
import styles from './Badge.scss';

const Badge = ({ className, style, children, badge, badgeStyle }) =>
  (<div className={className} style={style} styleName="badge">
    {children}
    <span style={badgeStyle} styleName="badge-mark">{badge}</span>
  </div>);


Badge.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
  badge: PropTypes.node.isRequired,
  badgeStyle: PropTypes.object
};

Badge.defaultProps = {
  className: '',
  style: null,
  children: null,
  badge: null,
  badgeStyle: null
};

export default CSSModules(Badge, styles);
