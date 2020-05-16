import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './pages/Home';
import Patterns from './pages/Patterns';
import Sorts from './pages/Sorts';
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
					<Route path="/graphs" component={Graphs} exact />
				</Switch>
			</div>
		</Router>
  );
}

export default App;
