import React from 'react/addons';
import {connect} from 'react-redux';

export const Winner = React.createClass({
  mixins: [React.addons.PureRenderMixin],
  render: function() {
    return (
      <div className="winner">
        Winner is {this.props.winner}!
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    winner: state.get('winner')
  }
}

export const WinnerContainer = connect(mapStateToProps)(Winner);