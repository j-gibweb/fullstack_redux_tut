import React from 'react/addons';
import {connect} from 'react-redux';
import Winner from './Winner';
import Vote from './Vote';
import * as actionCreators from '../action_creators';

export const Voting = React.createClass({
  mixins: [React.addons.PureRenderMixin],
  render: function() {
    return (
      <div>
        {this.props.winner ? 
          <Winner ref="winner" winner={this.props.winner} /> : 
          <Vote {...this.props} />}
      </div>
    )
  }
});

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    winner: state.get('winner'),
    hasVoted: state.get('hasVoted')
  }
}



export const VotingContainer = connect(
  mapStateToProps,
  actionCreators
  )(Voting);