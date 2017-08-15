import React, { Component } from 'react';
import { graphql } from 'react-apollo'; //connect the query with the component 
import query from '../queries/CurrentUser';

class Header extends Component {
	render() {
		console.log(this.props.data); //the result of the query always exists on 'this.props.data'
		
		return (
			<div>
				Header
			</div>
		);
	}
}

export default graphql(query)(Header);