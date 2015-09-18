import React from 'react/addons';
import {RouteHandler} from 'react-router';
import {List, Map} from 'immutable';

// const pair = List.of('Trainspotting', '28 Days Later');
// const tally = Map({'Trainspotting': 5, '28 Days Later': 4});
// const winner = "Trainspotting";

// let count = 0;
// let test = () => {count++; console.log(count);}

export default React.createClass({
  render: function() {
    return (
      <RouteHandler
        // winner={winner}
        // next={test} 
        // pair={pair}
        // tally={tally} 
        />
    );
  }
})