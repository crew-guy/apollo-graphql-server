const Category = {
    animals: (parent, args, {animals}, info)=>{
        const animalsOfCategory = animals.filter((animal) => {
            return animal.category == parent.id
        })
        return animalsOfCategory
    }
}

module.exports = Category