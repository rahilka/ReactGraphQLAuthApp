import React from 'react';
import Header from './Header';

// expect to show the header and the child component, nothing else
const App = (props) => {
	return (
		<div className="container">
			<Header />
			{props.children}
		</div>
	)
};

export default App;