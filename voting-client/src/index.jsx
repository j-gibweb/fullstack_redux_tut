import React from 'react';
import Router, {Route, DefaultRoute} from 'react-router';
import App from './components/App';
import Voting from './components/Voting';
import Results from './components/Results';

const pair = ['Trainspotting', '28 Days Later'];

const routes = <Route handler={App}>
  <Route path="/results" handler={Results} />
  <DefaultRoute handler={Voting} />
</Route>

Router.run(routes, (Root) => {
  React.render(
    <Root />,
    document.getElementById('app')
  );
});


// React.render(
//   <Voting 
//     winner="Trainspotting" />,
//   document.getElementById('app')
// );

// React.render(
//   <Voting 
//     vote={(entry) => {console.log(entry)}}
//     hasVoted="Trainspotting"
//     pair={pair} />,
//   document.getElementById('app')
// );