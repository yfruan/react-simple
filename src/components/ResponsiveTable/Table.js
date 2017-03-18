import CSSModules from 'react-css-modules';
import React, { Component, PropTypes } from 'react';
import styles from './Table.scss';

class Table extends Component {
  constructor(props) {
    super(props);
    this.rowNum = props.data.length;
    this.state = {
      allSelected: false,
      selectedRows: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleHeaderChecked = this.handleHeaderChecked.bind(this);
  }

  handleClick(event) {
    const rowDom = event.currentTarget;
    const { selectable, multiSelectable, onRowSeleted, onAllRowSelected } = this.props;
    if (selectable || multiSelectable) {
      if (rowDom.tagName.toUpperCase() === 'TR') {
        const row = parseInt(rowDom.getAttribute('data-row'), 10);
        let selectedRows;
        let allSelected = false;
        if (rowDom.classList.contains('row--selected')) {
          selectedRows = Object.assign(this.state.selectedRows);
          selectedRows.splice(selectedRows.indexOf(row), 1);
          onRowSeleted(row, false);
        } else {
          if (selectable) {
            selectedRows = [row];
          }
          if (multiSelectable) {
            selectedRows = Object.assign(this.state.selectedRows);
            selectedRows.push(row);
          }
          onRowSeleted(row, true);
        }

        if (selectedRows.length === this.rowNum) {
          allSelected = true;
        }
        if (allSelected !== this.state.allSelected) {
          onAllRowSelected(allSelected);
        }
        this.setState({
          allSelected,
          selectedRows
        });
        console.log(this.state);
      }
    }
  }

  handleHeaderChecked() {
    this.props.onAllRowSelected(!this.state.allSelected);
    this.setState({
      allSelected: !this.state.allSelected,
      selectedRows: !this.state.allSelected ? [...Array(this.rowNum).keys()] : []
    });
  }

  render() {
    const {
      className,
      style,
      header,
      data,
      striped,
      selectable,
      multiSelectable,
      enableSelectAll,
      displayRowCheckbox
    } = this.props;

    return (
      <table className={className} style={style} styleName={selectable ? 'table--selectable' : ''}>
        <thead>
          <tr role="row" tabIndex={0}>
            {displayRowCheckbox ? <th><input aria-label="select" type="checkbox" onClick={this.handleHeaderChecked} checked={this.state.allSelected} disabled={!multiSelectable || !enableSelectAll} /></th> : ''}
            {Object.values(header).map((headerColumn, index) => (<th>{headerColumn}</th>)) }
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) =>
            (<tr role="row" tabIndex={0} data-row={index} onClick={this.handleClick} className={[(index % 2 === 1) && striped ? 'row--striped' : '', this.state.selectedRows.includes(index) ? 'row--selected' : ''].join(' ')}>
              {displayRowCheckbox ? <td styleName="column--checkbox"><input aria-label="select" type="checkbox" checked={this.state.selectedRows.includes(index)} /></td> : ''}
              {
                Object.keys(row).map(columnKey =>
                (<td data-header={header[columnKey]}>{row[columnKey]}</td>))
              }
            </tr>))}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  header: PropTypes.object,
  data: PropTypes.array,
  striped: PropTypes.bool,
  selectable: PropTypes.bool,
  multiSelectable: PropTypes.bool,
  enableSelectAll: PropTypes.bool,
  displayRowCheckbox: PropTypes.bool,
  onRowSeleted: PropTypes.func,
  onAllRowSelected: PropTypes.func
};

Table.defaultProps = {
  className: '',
  style: null,
  header: null,
  data: [],
  striped: false,
  selectable: false,
  multiSelectable: false,
  enableSelectAll: false,
  displayRowCheckbox: true,
  onRowSeleted: () => {},
  onAllRowSelected: () => {}
};

export default CSSModules(Table, styles);
