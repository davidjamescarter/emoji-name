import React from "react";
import ReactDOM from "react-dom";
import { Route, IndexRoute } from "react-router";

import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Shared from "./pages/Shared";

const routes = (
	<Route path="/" component={Layout}>
		<IndexRoute component={Home}></IndexRoute>
		<Route path="/emoji" component={Shared} />
	</Route>
);

export default routes;
