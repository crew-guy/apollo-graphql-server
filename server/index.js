const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
    type Book{
        title:String,
        author:String
    }

    type Query{
        books:[Book],
        mainCards:[MainCard]
    }

    type MainCard {
        title:String,
        image:String
    }
`

const mainCards = [
    {
        title: "Recently viewed",
        image:"lion"
    },
    {
        title: "Featured",
        image:"penguin"
    },
    {
        title: "Popular",
        image:"butterfly"
    },
]


const books = [
    {
        title:"Book 1",
        author:"Author 1",
    },
    {
        title:"Book 2",
        author:"Author 2",  
    },
]

const resolvers = {
    Query: {
        books: () => books,
        mainCards:()=> mainCards
    }
}

const server =new ApolloServer({ typeDefs, resolvers })

server.listen().then(({url}) => {
    console.log(`Server read at ${url}`)
})