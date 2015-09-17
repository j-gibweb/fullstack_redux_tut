import React from 'react/addons';

export default React.createClass({
  // mixins: [React.addons.PureRenderMixin],
  getPair: function() {
    return this.props.pair || [];
  },
  getVotes: function(entry) {
    if (this.props.tally && this.props.tally.has(entry)) {
      return this.props.tally.get(entry);
    } else {
      return 0;
    }
  },
  render: function() {
    
    let entries = this.getPair().map((entry) => {
      return (
        <div key={entry} className="entry">
          <h1>{entry}</h1>
          <div className="voteCount">
            {this.getVotes(entry)}
          </div>
        </div>
      );
    });

    return (
      <div className="results">
        <div className="tally">
          {entries}
        </div>
        <div className="management">
          <button ref="next" className="next" onClick={() => {this.props.next()}}>Next</button>
        </div>
      </div>
    );
  }
});
