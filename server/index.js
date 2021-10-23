const { ApolloServer} = require('apollo-server')
const { mainCards, categories, animals } = require('./db')
const {typeDefs} = require('./schema.js')


const resolvers = {
    Query: {
        mainCards: () => mainCards,
        animals: () => animals,
        animal: (parent, args, ctx, info) => {
            const animal = animals.find((animal) => {
                return animal.slug == args.slug
            })
            return animal
        },
        categories: () => categories,
        category: (parent, args, ctx, info) => {
            const category = categories.find(category => {
                return category.category == args.slug
            })
        }
    },
    Category: {
        category: (parent, args, ctx, info)=>{
            const animalsOfCategory = animals.filter((animal) => {
                animal.category = parent.id
            })
            return animalsOfCategory
        }
    }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({url}) => {
    console.log(`Server read at ${url}`)
})