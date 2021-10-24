import React from 'react'
import { useParams } from "react-router-dom"
import { Container } from 'react-bootstrap'
import CardDisplay from '../components/CardDisplay/CardDisplay'
import {useQuery,gql } from '@apollo/client'

const CATEGORY_QUERY = gql`
    query($slug:String!){
        category(slug:$slug){
            animals{
                title,
                image,
                price,
                slug
            }
        }
    }

`

function CategoryPage() {
    
    const { slug } = useParams()

    const { loading, error, data } = useQuery(CATEGORY_QUERY, {
        variables: {
            slug
        }
    })

    console.log(data)


        
    if (loading) return <div>Loading</div>
    if (error) return <div>{error.toString() }</div>


    return (
        <div className="py-5">
            <Container>
                <h1 className="text-capitalize">
                    {}
                    <CardDisplay 
                        animals={data.category.animals}
                    />
                </h1>
            </Container>
        </div>
    )
}

export default CategoryPage
