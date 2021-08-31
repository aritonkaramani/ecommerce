import React from 'react'
import './product.scss';
import {Link} from 'react-router-dom';

export default function Product() {
    return (
        <div className="product">
            <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="product name" />
            <div className="productInfo">
                <p className="infoName">Product</p>
                <p className="infoDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Explicabo temporibus earum, dicta doloribus error molestiae.
                </p>

                <p className="infoPrice">500kr</p>

                <Link to={`/product/${1111}`}className="infoButton">View</Link>
            </div>
            
        </div>
    )
}
