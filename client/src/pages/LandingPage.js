import React from 'react'
import MainHero from "../components/MainHero/MainHero"
import CategoryDisplay from "../components/CategoryDisplay/CategoryDisplay"
import CardDisplay from "../components/CardDisplay/CardDisplay"
import { useQuery, gql, useMutation } from '@apollo/client'

function LandingPage() {

    const FETCH_ANIMALS = gql`
        {
            animals{
                image,
                price,
                id,
                title,
                slug,
                stock
            }
        }
    `

    const ADD_ANIMAL = gql`
        mutation(
            $slug:String!
            $image: String!
            $title: String!
            $category:String!
            $rating: Float!
            $price: String!
            $description: [String!]!
            $stock: Int!
            $onSale: Boolean!
        ) {
        addAnimal(input:{
            slug:$slug,
            image: $image,
            title: $title,
            category:$category,
            rating: $rating,
            price: $price,
            description: $description,
            stock: $stock,
            onSale: $onSale
        }
        ){
            id,
            image,
            price
        }
    }    
    
    `

    const { loading, error, data } = useQuery(FETCH_ANIMALS)
    const [addAnimal] = useMutation(ADD_ANIMAL)
    
    if (loading) return <div>Loading</div>
    if (error) return <div>error</div>
    

    return (
        <div>
            <MainHero />
            <CategoryDisplay />
            <CardDisplay animals={data.animals} />
            <button onClick={()=>{addAnimal({
                    variables:{slug:"lion",
                    image: "kangaroo",
                    title: "Lion",
                    category:"cats",
                    rating: 9,
                    price: "10",
                    description: ["king","jungle"],
                    stock: 2,
                    onSale: true}
            })}} >Add a mutation</button>
        </div>
    )
}

export default LandingPage
