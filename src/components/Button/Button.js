import CSSModules from 'react-css-modules';
import React, { Component, cloneElement, PropTypes } from 'react';
import { createFragments } from '../utils';
import styles from './Button.scss';

class Button extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.onClick(event);
  }

  render() {
    const {
      className,
      style,
      disabled,
      icon,
      label,
      labelPosition,
      tooltip,
      tooltipPosition,
      ariaLabel
    } = this.props;

    const childrenFragment = labelPosition === 'before' ?
    {
      label,
      icon
    } :
    {
      icon,
      label
    };

    let dom = (<button tabIndex={0} aria-label={ariaLabel || label} style={style} disabled={disabled} className={className} styleName="button" onClick={this.handleClick}>
      {createFragments(childrenFragment)}
    </button>);

    if (tooltip) {
      dom = cloneElement(dom, {
        'data-tooltip': tooltip,
        'data-position': tooltipPosition || 'bottom'
      });
    }

    return dom;
  }
}

Button.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  icon: PropTypes.node,
  label: PropTypes.string,
  labelPosition: PropTypes.oneOf([
    'before',
    'after',
  ]),
  tooltip: PropTypes.string,
  tooltipPosition: PropTypes.oneOf([
    'top',
    'bottom'
  ]),
  onClick: PropTypes.func,
  ariaLabel: PropTypes.string
};

Button.defaultProps = {
  className: '',
  style: null,
  disabled: false,
  icon: null,
  label: '',
  labelPosition: 'before',
  tooltip: null,
  tooltipPosition: 'bottom',
  onClick: () => {},
  ariaLabel: ''
};

export default CSSModules(Button, styles);
