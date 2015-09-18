import React from 'react/addons';
import {connect} from 'react-redux';
import {WinnerContainer} from './Winner';
import {TallyContainer} from './Tally';

export const Results = React.createClass({
  mixins: [React.addons.PureRenderMixin],
  render: function() {
    return this.props.winner ? <WinnerContainer ref="winner" winner={this.props.winner} /> : (
      <div className="results">
        <TallyContainer pair={this.props.pair} tally={this.props.tally} />
        <div className="management">
          <button ref="next" 
                  className="next" 
                  onClick={this.props.next}>
            Next
          </button>
        </div>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    winner: state.get('winner')
  }
}

export const ResultsContainer = connect(mapStateToProps)(Results);