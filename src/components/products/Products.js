import React, { useEffect, useState } from "react"

export const ProductList = () => {
    const [products, setProduct] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/products?_expand=productType&_sort=productTypeId&_order=asc")
                .then(res => res.json())
                .then((productData) => {
                    setProduct(productData)
                })
        },
        []
    )

   
    return (
        <>
            <h2>Products</h2>
           
            {
                products.map(
                    (product) => {
                        return <p key={`product--${product.id}`}>{product.name} is a type of {product.productType.name} Its product type id is {product.productTypeId}. It costs ${product.price.toFixed(2)}.</p> // every element needs a unique key. serves same purpose as an id attributeused for the rendering of the dom so it knows which element is which
                    }
                )
            }
        </>
    )
}