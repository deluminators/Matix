import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./login.css";
// import './table.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import SideNav, { MenuIcon } from "react-simple-sidenav";
import Login from "./components/login/login";
import Order from "./components/Order/order";
import Laptop from "./components/Laptop/laptop";
import Dashboard from "./components/dashboard/dashboard";
import Details from "./components/details/details";
import DateDetails from "./components/Datedetails/Datedetails";
import { LaptopProvider } from "./context/laptopContext";
import AllOrders from "./components/AllOrder/AllOrder";
import Logout from "./components/logout/logout";
import {} from "react-router-dom";

import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import { Route, Switch, Redirect, useHistory, useLocation } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar";

function App() {
	const [showNav, setShowNav] = useState();
	const [isLoggedin, setLoggedin] = useState(localStorage.getItem("token"));

	if (!isLoggedin) {
		return <Login setLoggedin={setLoggedin} />;
	}

	return (
		<LaptopProvider>
			<div className="App">
				<Sidebar />

				<>
					<Switch>
						<Route path="/login" component={() => <Login setLoggedin={setLoggedin} />} />
						<Route path="/logout" component={(setLoggedin) => <Logout setLoggedin={setLoggedin} />} />
						<Route path="/previous-orders" component={AllOrders} />
						<Route path="/date-details" component={DateDetails} />

						<Route path="/laptop-details" component={Details} />
						<Route path="/order" component={Order} />
						<Route path="/dashboard" component={Dashboard} />
						<Redirect to="/dashboard" />
					</Switch>
				</>
			</div>
		</LaptopProvider>
	);
}

export default App;
