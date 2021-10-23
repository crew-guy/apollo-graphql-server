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
            return category
        }
    },
    Category: {
        animals: (parent, args, ctx, info)=>{
            const animalsOfCategory = animals.filter((animal) => {
                return animal.category == parent.id
            })
            return animalsOfCategory
        }
    },
    Animal: {
        category: (parent, args, ctx, info) => {
            return categories.find((category) => category.id == parent.category);
      } 
    }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({url}) => {
    console.log(`Server read at ${url}`)
})