import React from 'react';
import PropTypes from 'prop-types';

import './Rainbow.css';

class Rainbow extends React.PureComponent {

  static propTypes = {
      getInner: PropTypes.func.isRequired,
  };

  render() {

    return (
      <div className="Frame1">
        <div className="Frame2">
          <div className="Frame3">
            {this.props.getInner()}
          </div>
        </div>
      </div>
    )
    ;

  }

}

export default Rainbow;
