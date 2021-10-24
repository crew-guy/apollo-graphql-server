const Animal = {
    category: (parent, args, {categories}, info) => {
        return categories.find((category) => category.id == parent.category);
    }
}

module.exports = Animal