import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Patterns from './pages/Patterns';


import history from './modules/history';

function App() {
  return (
    <Router history={history}>
			<div className="App">
				<Switch>
					<Route path="/" component={Home} exact />
					<Route path="/patterns" component={Patterns} exact />
				</Switch>
			</div>
		</Router>
  );
}

export default App;
