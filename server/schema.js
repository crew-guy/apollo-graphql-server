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
	slug:String!
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


type Mutation {
	addAnimal(input:AddAnimalInput!):Animal!
	updateAnimal(input:UpdateAnimalInput):Animal!
	removeAnimal(id:ID!):Animal!
}

input UpdateAnimalInput{
	id:ID!
	slug:String
	image: String
	title: String
	category:Category
	rating: Float
	price: String
	description: [String!]
	stock: Int
	onSale: Boolean
}


input AddAnimalInput {
	slug:String!
	image: String!
	title: String!
	category:Category!
	rating: Float!
	price: String!
	description: [String!]!
	stock: Int!
	onSale: Boolean!
}

`;

module.exports = {typeDefs}