import CSSModules from 'react-css-modules';
import React, { PropTypes } from 'react';
import styles from './MultiLineEllipsis.scss';

const MultiLineEllipsis = ({ className, style, content, mark, contentStyle, markStyle }) =>
  (<div className={className} style={style} styleName="ellipsis">
    <div styleName="ellipsis-content" style={contentStyle}>
      {content}
    </div>
    <div styleName="ellipsis-mark" style={markStyle}>
      {mark || <span>...</span>}
    </div>
  </div>);

MultiLineEllipsis.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  contentStyle: PropTypes.object,
  markStyle: PropTypes.object,
  content: PropTypes.string,
  mark: PropTypes.node
};

MultiLineEllipsis.defaultProps = {
  className: '',
  style: null,
  contentStyle: null,
  markStyle: null,
  content: '',
  mark: null
};

export default CSSModules(MultiLineEllipsis, styles);
