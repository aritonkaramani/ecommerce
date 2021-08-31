import React from 'react'
import './productScreen.scss';

export default function ProductScreen() {
    return (
        <div className="product">
            <div className="left">
                <div className="leftImg">
                    <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="" />
                </div>
                <div className="leftInfo">
                    <p className="name">Product</p>
                    <p className="price">Price</p>
                    <p className="desc">Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div className="right">
                <div className="rightInfo">
                    <p>
                        Price: <span>500kr</span>
                    </p>
                    <p>
                        Status: <span>In Stock</span>
                    </p>
                    <p>
                        Qty
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </p>
                    <p>
                        <button>Add to Cart</button>
                    </p>
                </div>
            </div>
        </div>
    )
}
