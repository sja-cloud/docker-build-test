import React from 'react'
import {useState, useEffect} from 'react'
import Product from './Product'

function Products({search, setSearch}) {
  
    const [data, setData] = useState([])

 const fetchProducts = async () =>{
 
 await fetch('https://fakestoreapi.com/products')
    .then (response => response.json())
    .then(products => setData(products))
   
 }  
    useEffect(() => {
fetchProducts();

    })


  
console.log(data);  
    return (
    <div>

        {data
        .filter((val) => {
            if(search ===  ""){
                return val 
            } else if (val.title.toLowerCase().includes(search.toLowerCase())
            ){
            return val    
            }
        })
        .map(({title, category, description, image, price})=> (
            <Product
            title={title}
            category={category}
            description={description}
            image={image}
            price={price}
            />
        ))}

    </div>
  )
}

export default Products