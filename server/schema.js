const { ApolloServer, gql } = require('apollo-server')


const typeDefs = gql`


type Book {
	title: String
	author: String
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
	image:String!
	animals:[Animal!]
}

type Query {
	books: [Book]
	mainCards: [MainCard]
	animals:[Animal]
	animal(slug:String!):Animal
	categories:[Category!]
	category(slug:String!):Category
}



`;

module.exports = {typeDefs}