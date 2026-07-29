import axios from 'axios'

const api = axios.create({ baseURL: import.meta.env.VITE_BACKEND_BASE_URL })

async function getAllProducts() {
            const allProducts = await api.get('/products')
        return allProducts.data

    try {
    } catch (err) {
        console.log(`Cannot get products: ${err}`)
    }
}

async function getProductDetails(productId) {
    try {
        const productDetails = await api.get(`/products/${productId}`)
        return productDetails.data
    } catch (err) {
        console.log(`Cannot get product details: ${err}`)
    }
}

async function createProduct(formData) {
    try {
        const newProduct = await api.post(`/products`, formData)
        return newProduct.data
    } catch (err) {
        console.log(`Cannot add product: ${err}`)
    }
}
export { getAllProducts, getProductDetails, createProduct }