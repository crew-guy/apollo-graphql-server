const { ApolloServer, gql } = require('apollo-server')


const typeDefs = gql`type Book {
	title: String
	author: String
}

type Query {
	books: [Book]
	mainCards: [MainCard]
}

type Animal {
	image: String!
	title: String!
	rating: Float
	price: String!
	description: [String!]!
	stock: Int!
	onSale: Boolean
}

type MainCard {
	title: String
	image: String
}`;

module.exports = {typeDefs}