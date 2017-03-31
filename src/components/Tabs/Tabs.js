import CSSModules from 'react-css-modules';
import React, { Component, Children, isValidElement, cloneElement, PropTypes } from 'react';
import styles from './Tabs.scss';
import Tab from './Tab';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { selectedIndex: this.props.selectedIndex };
  }

  handleClick(index, event) {
    event.preventDefault();
    if (this.state.selectedIndex !== index) {
      this.props.onChange(this.state.selectedIndex, index, event);
      this.setState({
        selectedIndex: index
      });
    }
  }

  render() {
    const {
      className,
      style,
      children
    } = this.props;

    const tabs = [];
    const tabPanes = [];

    Children.forEach(children, (tab, index) => {
      if (isValidElement(tab) && tab.type === Tab) {
        const element = cloneElement(tab, {
          key: tab.props.id || index,
          index,
          styleName: index === this.state.selectedIndex ? 'selected' : '',
          onClick: this.handleClick
        });

        tabs.push(element);
        tabPanes.push(
          <div styleName="tab-pane" key={element.props.id || index} hidden={index !== this.state.selectedIndex}>
            {tab.props.children}
          </div>
        );
      }
    });

    return (
      <div style={style} className={className}>
        <div styleName="tabs" role="tabList">
          {tabs}
        </div>
        {tabPanes}
      </div>
    );
  }
}

Tabs.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
  selectedIndex: PropTypes.number,
  onChange: PropTypes.func
};

Tabs.defaultProps = {
  className: '',
  style: null,
  children: null,
  selectedIndex: 0,
  onChange: () => {},
};

export default CSSModules(Tabs, styles);
