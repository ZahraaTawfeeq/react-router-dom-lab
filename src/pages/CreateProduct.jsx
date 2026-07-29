import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { createProduct } from '../services/productsServices'

function CreateProduct() {

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        price: '',
        quantity: ''
    })
    const navigate = useNavigate()

    async function handleSubmit(event) {
        try {
            event.preventDefault()
            const newProduct = await createProduct(formData)
            setFormData(newProduct)
            navigate(`/products/${newProduct._id}`)
        }
        catch (err) {
            console.log(`Cannot add product: ${err}`)
        }
    }

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    return (
        <>
            <div className="form-container">
                <h1>Create Product</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Title: </label>
                    <input type="text" name='title' id='title' onChange={handleChange} />
                    <br />
                    <label htmlFor="description">Description: </label>
                    <input type="text" name='description' id='description' onChange={handleChange} />
                    <br />
                    <label htmlFor="category">Category: </label>
                    <input type="text" name='category' id='category' onChange={handleChange} />
                    <br />
                    <label htmlFor="price">Price: </label>
                    <input type="number" step={0.01} name='price' id='price' onChange={handleChange} />
                    <br />
                    <label htmlFor="quantity">Quantity: </label>
                    <input type="number" name='quantity' id='quantity' onChange={handleChange} />
                    <br />
                    <button>Add</button>
                </form>
            </div>
        </>
    )
}

export default CreateProduct