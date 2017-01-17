import React from "react";

import Search from '../components/home/Search';

import Names from '../data/names';

export default class Home extends React.Component {

  	render() {

    	return (

			<Search names={Names} />

    	);
	}

}
