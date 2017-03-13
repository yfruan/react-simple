import CSSModules from 'react-css-modules';
import React, { Component, Children, isValidElement, cloneElement, PropTypes } from 'react';
import styles from './Menu.scss';
import MenuItem from './MenuItem';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedIndex: -1
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClickAway = this.handleClickAway.bind(this);
  }

  componentDidMount() {
    if (this.props.isRoot) {
      document.addEventListener('focus', this.handleClickAway, true);
      document.addEventListener('click', this.handleClickAway);
    }
  }

  componentWillUnmount() {
    if (this.props.isRoot) {
      document.removeEventListener('focus', this.handleClickAway);
      document.removeEventListener('click', this.handleClickAway);
    }
  }

  handleClickAway(event) {
    const isDescendant = (dom, target) => {
      if (target !== null) {
        return dom === target || isDescendant(dom, target.parentNode);
      }
      return false;
    };
    if (!isDescendant(this.menu, event.target)) {
      this.setState({
        focusedIndex: -1
      });
    }
  }

  handleClick(index) {
    if (this.state.focusedIndex !== index) {
      this.setState({
        focusedIndex: index
      });
    }
  }

  render() {
    const {
      className,
      style,
      children,
      hidden
    } = this.props;

    const items = [];
    let counter = 0;
    Children.forEach(children, (item, index) => {
      let newItem = item;
      if (isValidElement(item) && item.type === MenuItem) {
        newItem = cloneElement(newItem, {
          key: item.id || index,
          hidden: hidden || false,
          menuHidden: this.state.focusedIndex !== counter,
          index: counter,
          onClick: this.handleClick,
          onKeyDown: this.handleKeyDown
        });
        counter += 1;
      }
      items.push(newItem);
    });

    return (
      <div ref={(menu) => { this.menu = menu; }} hidden={hidden} className={className} style={style} styleName="menu">
        {items}
      </div>
    );
  }
}

Menu.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
  hidden: PropTypes.bool,
  isRoot: PropTypes.bool
};

Menu.defaultProps = {
  className: '',
  style: null,
  children: null,
  hidden: false,
  isRoot: true
};

export default CSSModules(Menu, styles);
