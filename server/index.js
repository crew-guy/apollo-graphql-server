const { ApolloServer, gql } = require('apollo-server')
const { mainCards, books } = require('./db')
const {typeDefs} = require('./schema.js')


const resolvers = {
    Query: {
        books: () => books,
        mainCards:()=> mainCards
    }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({url}) => {
    console.log(`Server read at ${url}`)
})