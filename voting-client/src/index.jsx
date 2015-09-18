import React from 'react';
import Router, {Route, DefaultRoute} from 'react-router';
import {createStore} from 'redux';
import reducer from './reducer';
import {Provider} from 'react-redux';
import App from './components/App';
import {VotingContainer} from './components/Voting';
import {ResultsContainer} from './components/Results';

const store = createStore(reducer);
store.dispatch({
  type: 'SET_STATE',
  state: {
    vote: {
      pair: ['Sunshine', '28 Days Later'],
      tally: {Sunshine: 2}
    }
  }
})

// store.dispatch({
//   type: 'SET_STATE',
//   state: {
//     winner: 'Trainspotting'
//   }
// })


const routes = <Route handler={App}>
  <Route path="/results" handler={ResultsContainer} />
  <DefaultRoute handler={VotingContainer} />
</Route>

Router.run(routes, (Root) => {
  React.render(
    <Provider store={store}>
      {() => <Root />}
    </Provider>,
    document.getElementById('app')
  );
});



// const pair = ['Trainspotting', '28 Days Later'];


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