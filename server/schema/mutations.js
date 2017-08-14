const graphql = require('graphql');
const {
	GraphQLObjectType,
	GraphQLString
} = graphql;

const UserType = require('./types/user_type');
const AuthService = require('../services/auth');

const mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		signup: {
			type: UserType,
			args: {
				email: { type: GraphQLString },
				password: { type: GraphQLString }
			},
			resolve(parentValue, { email, password }, req) { //'request' represents the actual request object
				return AuthService.signup({ email, password, req });
			}
		},
		logout: {
			type: UserType,
			resolve(parentValue, args, req) {
				const { user } = req;
				req.logout(); //removes the 'user' property from the 'request' object
				return user;
			}
		},
		login: {
			type: UserType,
			args: {
				email: { type: GraphQLString },
				password: { type: GraphQLString }
			}, 
			resolve(parentValue, { email, password }, req) {
				return AuthService.login({ email, password, req });
			}
		}
	}
});

module.exports = mutation;