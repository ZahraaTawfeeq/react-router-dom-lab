import { getAllProducts } from '../services/productsServices'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router'
import { Spin } from 'antd'

function ProductsList() {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    async function getData() {
        try {
            setLoading(true)
            setError(null)

            const getProductsData = await getAllProducts()
            setProducts(getProductsData)
            setError(false)
            setLoading(false)

        } catch (err) {
            console.log('in catch')
            setError(`Cannot get all products ${err.message}`)
            console.log(`Cannot get all products ${err}`)
            setLoading(false)
        }
    }

    useEffect(() => { getData() }, [])

    if(loading){
        return <Spin spinning={true} size='large' />
    }
    else if(error){
        return <p>Error: {error}</p>
    }
    
    return (
        <>
            <div>
                <h1>Products List</h1>

                {products.length === 0 ? <p>No Products to show</p> : (<>
                    {products.map((oneProduct) =>
                        <div key={oneProduct._id}>
                            <p>{oneProduct.title}</p>
                            <Link to={`/products/${oneProduct._id}`}>{oneProduct.title} Details</Link>
                        </div>)}
                </>)}
            </div>
        </>
    )
}

export default ProductsList