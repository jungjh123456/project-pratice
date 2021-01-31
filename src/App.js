import logo from './logo.svg';
import './App.css';

import MainPage from './components/pages/MainPage';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import CarouselPage from './components/pages/CarouselPage';
const history = createBrowserHistory();

function App() {
	return (
		<Router history={history}>
			<Switch>
				<Route path="/carousel" component={CarouselPage} />
				<Route path="/" exact component={MainPage} />
			</Switch>
		</Router>
	);
}

export default App;
