const { ApolloServer, gql } = require('apollo-server')


const typeDefs = gql`


type Book {
	title: String
	author: String
}

type Query {
	books: [Book]
	mainCards: [MainCard]
	animals:[Animal]
	animal(slug:String!):Animal
}

type Animal {
	id:ID!
	slug:String!
	image: String!
	title: String!
	category:Category!
	rating: Float
	price: String!
	description: [String!]!
	stock: Int!
	onSale: Boolean
}

type MainCard {
	title: String
	image: String
}

type Category{
	id:ID!
	category:String!
	slug:String!
	image:String!
	animals:[Animal!]
}

`;

module.exports = {typeDefs}