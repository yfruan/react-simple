import CSSModules from 'react-css-modules';
import React, { PropTypes } from 'react';
import styles from './Tabs.scss';

const Tab = ({ className, style, index, label, onClick, onActive }) => {
  const handleClick = (event) => {
    onClick(index, event);
    onActive(index, event);
  };

  return (<button tabIndex={0} role="tab" style={style} className={className} styleName="tab" onClick={handleClick}>
    {label}
  </button>);
};

Tab.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  index: PropTypes.number,
  label: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  onActive: PropTypes.func
};

Tab.defaultProps = {
  className: '',
  style: null,
  index: 0,
  label: null,
  onClick: () => {},
  onActive: () => {}
};

export default CSSModules(Tab, styles);
