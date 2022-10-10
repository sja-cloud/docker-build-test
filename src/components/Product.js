import React from "react";
import "../styles/Product.css";

function Product({ title, category, image, description, price}) {
 

    return (
    <div className="product">
      <div>
        <h3 key={title}>{title}</h3>
        <img src={image} width="200" height="300" />
        <p>{category}</p>
        <p>{description}</p>
        <p>{price}</p>
        
      </div>
    </div>
  );
}

export default Product;
