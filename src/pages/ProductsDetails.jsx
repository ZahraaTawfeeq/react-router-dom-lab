import { useParams } from 'react-router'
import React, { useState, useEffect } from 'react'
import { getProductDetails } from '../services/productsServices'
import { Spin } from 'antd'

function ProductsDetails() {
    const [product, setProduct] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    async function getDetails() {
        try {
            setLoading(true)
            setError(null)

            const productDetails = await getProductDetails(productId)
            setProduct(productDetails)

            setError(false)
            setLoading(false)
        }
        catch (err) {
            setError(`Cannot get products details: ${err.message}`)
            setLoading(false)

        }
    }
    useEffect(() => { getDetails() }, [])

    if (loading) {
        return (<div><br /><Spin spinning={true} size='large' /><br /></div>)
    }
    else if (error) {
        return (<div><br /><p>Error: {error}</p><br /></div>)
    }

    return (
        <>
            <div className="details-container">
                <br />
                <div className="details-content">
                    {product ? (<>
                        <h1>{product.title}</h1>
                        <p><strong>Description: </strong>{product.description}</p>
                        <p><strong>Category: </strong>{product.category}</p>
                        <p><strong>Price: </strong>{product.price}</p>
                        <p><strong>Quantity: </strong>{product.quantity}</p>
                        <br />
                    </>) : <Spin spinning={true} size="large" />}
                </div>
            </div>
        </>
    )
}

export default ProductsDetails