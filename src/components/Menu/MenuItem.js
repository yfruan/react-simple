import CSSModules from 'react-css-modules';
import React, { Component, isValidElement, cloneElement, PropTypes } from 'react';
import styles from './Menu.scss';
import Menu from './Menu';

class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      menuHidden: true
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.hidden || nextProps.menuHidden) {
      this.setState({
        menuHidden: true
      });
    }
  }

  handleClick(event) {
    const index = this.props.index;
    this.setState({
      menuHidden: !this.state.menuHidden
    });
    this.props.onClick(index, event);
    this.props.onActive(index, event);
  }

  render() {
    const {
      className,
      style,
      children,
      label,
      leftIcon,
      rightIcon,
      disabled
    } = this.props;

    let submenu;
    if (isValidElement(children) && children.type === Menu) {
      submenu = cloneElement(children, {
        isRoot: false,
        hidden: this.state.menuHidden,
      });
    }

    return (
      <div className={className} style={style} styleName="menu--item">
        <button tabIndex={0} disabled={disabled} onClick={this.handleClick}>
          {leftIcon}
          <span>{label}</span>
          {rightIcon}
        </button>
        {submenu}
      </div>
    );
  }
}

MenuItem.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
  index: PropTypes.number,
  label: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  disabled: PropTypes.bool,
  hidden: PropTypes.bool,
  menuHidden: PropTypes.bool,
  onClick: PropTypes.func,
  onActive: PropTypes.func
};

MenuItem.defaultProps = {
  className: '',
  style: null,
  children: null,
  index: -1,
  label: '',
  leftIcon: null,
  rightIcon: null,
  disabled: false,
  hidden: false,
  menuHidden: true,
  onClick: () => {},
  onActive: () => {}
};

export default CSSModules(MenuItem, styles);
