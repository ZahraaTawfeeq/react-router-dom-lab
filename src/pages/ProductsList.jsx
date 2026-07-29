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
            setError(`Cannot get all products ${err.message}`)
            setLoading(false)
        }
    }

    useEffect(() => { getData() }, [])

    if (loading) {
        return (<div><br /><Spin spinning={true} size='large' /><br /></div>)
    }
    else if (error) {
        return (<div><br /><p>Error: {error}</p><br /></div>)
    }

    return (
        <>
            <h1 className='list-header'>Products List</h1>
            <div className='list-container'>
                {products.length === 0 ? <p>No Products to show...</p> : (<>
                    {products.map((oneProduct) =>
                        <div className="product-item" key={oneProduct._id}>
                            <p>{oneProduct.title}</p>
                            <Link to={`/products/${oneProduct._id}`}>{oneProduct.title} Details</Link>
                        </div>)}
                </>)}
            </div>
        </>
    )
}

export default ProductsList