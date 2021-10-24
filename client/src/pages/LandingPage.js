import React from 'react'
import MainHero from "../components/MainHero/MainHero"
import CategoryDisplay from "../components/CategoryDisplay/CategoryDisplay"
import CardDisplay from "../components/CardDisplay/CardDisplay"
import { useQuery, gql } from '@apollo/client'

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

    const { loading, error, data } = useQuery(FETCH_ANIMALS)
    
    if (loading) return <div>Loading</div>
    if (error) return <div>error</div>
    
    return (
        <div>
            <MainHero />
            <CategoryDisplay />
            <CardDisplay animals={data.animals}/>
        </div>
    )
}

export default LandingPage
