import React from 'react';
import Voting from './components/Voting';

const pair = ['Trainspotting', '28 Days Later'];

// React.render(
//   <Voting 
//     winner="Trainspotting" />,
//   document.getElementById('app')
// );

React.render(
  <Voting 
    vote={(entry) => {console.log(entry)}}
    hasVoted="Trainspotting"
    pair={pair} />,
  document.getElementById('app')
);