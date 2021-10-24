const Query = {
    mainCards: (parent, args, {mainCards}) => mainCards,
    animals: (parent, args, {animals}) => animals,
    animal: (parent, args, {animals}, info) => {
        const animal = animals.find((animal) => {
            return animal.slug == args.slug
        })
        return animal
    },
    categories: (parent, args,{categories} ) => categories,
    category: (parent, args, {categories}, info) => {
        const category = categories.find(category => {
            return category.category == args.slug
        })
        return category
    }
}

module.exports= Query