import { useParams } from 'react-router'
import React, { useState, useEffect } from 'react'
import { getProductDetails } from '../services/productsServices'
import { Spin } from 'antd'

function ProductsDetails() {
    const [product, setProduct] = useState(null)
    const { productId } = useParams()

    async function getDetails() {
        try {
            const productDetails = await getProductDetails(productId)
            setProduct(productDetails)
        }
        catch (err) {
            console.log(`Cannot get products details: ${err}`)
        }
    }
    useEffect(() => { getDetails() }, [])
    
    return (
        <>
            <div>
                <br />
                {product ? (<>
                    <h1>{product.title}</h1>
                    <p><strong>Description: </strong>{product.description}</p>
                    <p><strong>Category: </strong>{product.category}</p>
                    <p><strong>Price: </strong>{product.price}</p>
                    <p><strong>Quantity: </strong>{product.quantity}</p>
                    <br />
                </>) : <Spin spinning={true} size="large" />}
            </div>
        </>
    )
}

export default ProductsDetails