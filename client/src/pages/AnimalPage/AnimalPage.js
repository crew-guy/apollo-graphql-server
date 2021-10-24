import React from 'react'
import { Container } from 'react-bootstrap'
import animals from "../../assets/images"
import star from "../../assets/svg/star.svg"
import "./AnimalPage.css"
import { useParams } from "react-router-dom"
import { useQuery, gql } from '@apollo/client'

const ANIMAL_QUERY =  gql`
    query ($slug:String!){
        animal(slug:$slug){
                image,
                title,
                price,
                slug,
                rating,
                description,
                stock
            }
    }
`


function AnimalPage() {

    const { slug } = useParams();
    
    const { loading, error, data } = useQuery(ANIMAL_QUERY, {
        variables: {
            slug
        }
    })

    console.log(data)
    
    if (loading) return <div>Loading</div>
    if (error) return <div>error</div>
    

    return (
        <div className="py-5">
            <Container>
                <div className="d-flex">
                    <img className="product-img" src={data.animal.image}  style={{marginRight: "1rem"}}/>
                <div className="text-container">
                        <h1>{}</h1>
                        <div className="star-container">
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <div className="rating-stock-container">
                                <p>{data.animal.rating} rating</p>
                                <p>{data.animal.stock} in stock</p>
                            </div>
                            
                        </div>
                        <div className="about-container">
                            <h4>About this Animal</h4>
                            {data.animal.description.map((line) => <li>{ line}</li>)}
                        </div>
                    </div>
                    <div className="cart-container border">
                        <p className="price"><span>CAD$ {}</span></p>
                        <p className="delivery-time" >FREE delivery: Thursday, Feb 25 Details
                            <button className="buy-now-btn" style={{marginTop: "2rem"}}>
                                Add to Cart
                            </button>
                            <button>
                                Buy Now
                            </button>
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default AnimalPage
