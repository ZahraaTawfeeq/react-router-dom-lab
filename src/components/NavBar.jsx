import React from 'react'
import { Link } from 'react-router'

function NavBar() {
    return (
        <div>
            <Link to='/'>Home | </Link>
            <Link to='/products'>All Products | </Link>
            <Link to='/products/create'>Create Product</Link>
        </div>
    )
}

export default NavBar