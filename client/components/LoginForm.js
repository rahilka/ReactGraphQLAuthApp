import React, { Component } from 'react';
import AuthForm from './AuthForm';
import query from '../queries/CurrentUser';

class LoginForm extends Component {
	
	onSubmit({ email, password }) {
		this.props.mutate({
			variables: { email, password },
			refetchQueries: [{ query }]
		});
	}

	render() {
		return (
			<div>
				<h3>Login</h3>
				<AuthForm onSubmit={this.onSubmit.bind(this)} />
			</div>
		);
	}
}

export default LoginForm;