import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './pages/Home';
import Patterns from './pages/Patterns';
import Sorts from './pages/Sorts';
import LinkedLists from './pages/LinkedLists';
import StacksAndQueues from './pages/StacksAndQueues';
import Trees from './pages/Trees';
import Heaps from './pages/Heaps';
import Hash from './pages/Hash';
import Graphs from './pages/Graphs';

import history from './modules/history';

function App() {
  return (
    <Router history={history}>
			<div className="App">
        <Nav />
				<Switch>
					<Route path="/" component={Home} exact />
					<Route path="/patterns" component={Patterns} exact />
					<Route path="/sorts" component={Sorts} exact />
					<Route path="/linkedlists" component={LinkedLists} exact />
					<Route path="/stacksqueues" component={StacksAndQueues} exact />
					<Route path="/trees" component={Trees} exact />
					<Route path="/heaps" component={Heaps} exact />
					<Route path="/hash" component={Hash} exact />
					<Route path="/graphs" component={Graphs} exact />
				</Switch>
			</div>
		</Router>
  );
}

export default App;
