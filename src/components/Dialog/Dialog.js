import CSSModules from 'react-css-modules';
import React, { Component, PropTypes } from 'react';
import styles from './Dialog.scss';

class Dialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true
    };
    this.handleClickAway = this.handleClickAway.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      hidden: nextProps.hidden
    });
  }

  handleClickAway() {
    if (this.props.modal) {
      this.setState({
        hidden: true
      });
    }
  }

  render() {
    const {
      className,
      style,
      children,
      title,
      actions
    } = this.props;

    document.body.style.overflow = this.state.hidden ? '' : 'hidden';

    return (
      <div hidden={this.state.hidden}>
        <div role="region" tabIndex={0} aria-label="dialog overlay" styleName="overlay" onClick={this.handleClickAway} />
        <div role="dialog" tabIndex={0} aria-label={title} className={className} style={style} styleName="dialog">
          <div styleName="dialog-header">
            {title}
          </div>
          <div styleName="dialog-body">
            {children}
          </div>
          <div styleName="dialog-footer">
            {actions}
          </div>
        </div>
      </div>
    );
  }
}

Dialog.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
  title: PropTypes.string,
  actions: PropTypes.node,
  modal: PropTypes.bool,
  hidden: PropTypes.bool
};

Dialog.defaultProps = {
  className: '',
  style: null,
  children: null,
  title: '',
  actions: null,
  modal: true,
  hidden: true
};

export default CSSModules(Dialog, styles);
