const { ApolloServer} = require('apollo-server')
const { mainCards, categories, animals } = require('./db')
const {typeDefs} = require('./schema.js')
const Query = require('./resolvers/Query')
const Category = require('./resolvers/Category')
const Animal = require('./resolvers/Animal')

const resolvers = {
    Query,
    Category,
    Animal
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
        mainCards,
        categories,
        animals
} })

server.listen().then(({url}) => {
    console.log(`Server read at ${url}`)
})