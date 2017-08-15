import React from 'react';
import ReactDOM from 'react-dom';

// here we will setup and start the React Router and the Apollo client and provider

import ApolloClient, { createNetworkInterface } from 'apollo-client';	//this is default export
import { ApolloProvider } from 'react-apollo';	//ApolloProvider is the glue between the React and ApolloClient
import { Router, hashHistory, Route, IndexRoute } from 'react-router';

import App from './components/App';
import LoginForm from './components/LoginForm';

const networkInterface = createNetworkInterface({	//in order to make apollo send cookies wit every single query that it makes to the backend
	uri: './graphql',
	opts: {
		credentials: 'same-origin' //make request to the same origin that the browser is currently on
	}
});

const client = new ApolloClient({	//the apollo client makes the request to our backend
	networkInterface,				//instead of the default network interface, is going to use this customized one
	dataIdFromObject: o => o.id		//every single record that comes from the backend will have an ID property defined on it
});									// the apollo client assumes that the graphql client listens on '/graphql'

const Root = () => {
  return (
  	<ApolloProvider client={client}>
	    <Router history={hashHistory}>
	    	<Route path="/" component={App}></Route>
	    	<Route path="login" component={LoginForm}></Route>
	    </Router>
	</ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
