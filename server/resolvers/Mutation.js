const {v4} = require('uuid');
const Mutation = {
    addAnimal: (parent, {input}, { animals }) => {
        const animal = {
            id: v4(),
            ...input
        }
        animals.push(animal)
        return animal;
    },
    removeAnimal: (parent, { id },{animals}) => {
        const animal = animals.find((animal) => animal.id == id)
        animals.filter((animal) => animal.id !== id)
        return animal
    },
    updateAnimal: (parent, { input: { id, ...rest } }, { animals }) => {
        let animal = animals.find((animal) => animal.id == id)
        animals.filter((animal) => animal.id !== id)
        animal = {
            ...animal,
            ...rest
        }
        animals.push(animal)
        return animal
    }
}

module.exports = Mutation