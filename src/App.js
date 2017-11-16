import React, {Component} from "react";
import {Router, Route, hashHistory} from "react-router";

import Header from "./containers/Header";
import Main from "./containers/Main";
import TourDates from "./containers/TourDates";
import Music from "./containers/Music";
import Album from "./containers/Album";
import Merch from "./containers/Merch";
import Footer from "./containers/Footer";
import "./styles/style.css";

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<main>
					<Router history={hashHistory}>
						<Route path="/" component={Main} />
						<Route path="/dates" component={TourDates} />
						<Route path="/music" component={Music} />
						<Route path="/music/:album" component={Album} />
						<Route path="/merch" component={Merch} />
					</Router>
				</main>
				<Footer />
			</div>
		);
	}
}

export default App;
