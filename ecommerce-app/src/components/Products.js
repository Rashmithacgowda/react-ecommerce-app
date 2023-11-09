import React from 'react'

const Products = ({ products,handleAddToCart }) => {
  console.log(products);

  return (
    <div>
      {products.map((product, index) => {
        console.log("product", product)
        return (

          <div key={index}>
            <div key={index} style={{
              fontWeight:'bold',
              fontSize:'20px',
              display: 'grid',
              gridTemplateColumns: '40fr 10fr 10fr 15fr', // Define the number of columns and their widths
              alignItems: 'center',
              border: '0.5px solid black',
              

            }}>
              <span><img style={{ width: '10%', height: '10%', borderRadius: '30%' }} src={product.img} alt={product.title} /></span>
              <span>{product.title}</span>
              <span style={{ color: 'black' }}>$ {product.price}</span>
              {/* <span>{button}</span> */}
              <span><button onClick={()=>handleAddToCart(product)} style={{ backgroundColor: '#1396C9', borderRadius: '3px', color: 'white' }}>add to cart</button></span> 
            </div>

          </div>
        )
      })}
    </div>
  )
}

export default Products