import React from 'react';
import ReactDOM from 'react-dom';

// here we will setup and start the React Router and the Apollo client and provider

import ApolloClient from 'apollo-client';	//this is default export
import { ApolloProvider } from 'react-apollo';	//ApolloProvider is the glue between the React and ApolloClient
import { Router, hashHistory, Route, IndexRoute } from 'react-router';

import App from './components/App';

const client = new ApolloClient({
	dataIdFromObject: o => o.id	//every single record that comes from the backend will have an ID property defined on it
});

const Root = () => {
  return (
  	<ApolloProvider client={client}>
	    <Router history={hashHistory}>
	    	<Route path="/" component={App}></Route>
	    </Router>
	</ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
