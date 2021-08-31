import React from 'react'
import "./homeScreen.scss";
import Product from "../../components/Product/Product";

export default function HomeScreen() {
    return (
        <div className="home">
            <h2 className="homeTitle">Latest Products</h2>
                
            <div className="homeProduct">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
            
        </div>
    )
}
