import React, { Component } from 'react';

class AuthForm extends Component {
	
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		}
	}

	onSubmit(event) {
		event.preventDefault();

		this.props.onSubmit(this.state);
	}

	render() {
		return (	//we are going to use component's level state to keep track of the input
			<div className="row">
				<form onSubmit={this.onSubmit.bind(this)} className="col s4">
					<div className="input-field">
						<input 
							placeholder="Email"
							value={this.state.email}
							onChange={e => this.setState({ email: e.target.value })}
						/>
					</div>
					<div className="input-field">
						<input
							placeholder="Password"
							type="password"
							value={this.state.password}
							onChange={e => this.setState({ password: e.target.value })}
						/>
					</div>
					<button className="btn">Submit</button>
				</form>
			</div>
		);
	}
}

export default AuthForm;