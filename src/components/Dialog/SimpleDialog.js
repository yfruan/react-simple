import React, { Component, PropTypes } from 'react';
import Dialog from './index';
import Button from '../Button';

export default class SimpleDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.show = this.show.bind(this);
  }

  handleSubmit() {
    this.setState({
      visible: false
    });
  }

  handleCancel() {
    this.setState({
      visible: false
    });
  }

  show() {
    this.setState({
      visible: true
    });
  }

  render() {
    const buttons = [
      <Button key="cancel" style={{ marginRight: '10px' }} onClick={this.handleCancel} label="Cancel" />,
      <Button key="submit" onClick={this.handleSubmit} label="Submit" />
    ];

    return (
      <div>
        <Button
          onClick={this.show}
          label="Pop Dialog"
        />
        <Dialog title="Simple dialog header" actions={buttons} hidden={!this.state.visible} modal>
          {this.props.content}
        </Dialog>
      </div>
    );
  }
}

SimpleDialog.propTypes = {
  content: PropTypes.node
};

SimpleDialog.defaultProps = {
  content: null
};
