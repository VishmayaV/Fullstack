// /* eslint-disable react-hooks/rules-of-hooks */
// /* eslint-disable react/jsx-key */
// /* eslint-disable no-unused-vars */
// import React, { useContext } from 'react'
// import { CgShoppingCart } from 'react-icons/cg'
// import { Link } from 'react-router-dom';

// import ReactStars from "react-rating-stars-component";
// import { PRODUCTS } from './products';
// import { PRODUCTS1 } from './products';
// import { ShopContext } from './shopcontext'
// import Prod from './prod';


// const shopitems = () => {

//   return <>
//   <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
//   {[...PRODUCTS, ...PRODUCTS1].map((product) => (
//     <Prod key={product.id} data={product} />
//   ))}
  
//         </div>
//   </>
// }

// export default shopitems

import React from 'react';
import { PRODUCTS, PRODUCTS1 } from './products'; // Ensure the import path is correct
import Prod from './prod'; // Ensure the import path is correct

const Shopitems = ({ filter }) => {
  // Combine products from both sources
  const allProducts = [...PRODUCTS, ...PRODUCTS1];

  // Sort products based on the filter prop
  const sortedProducts = allProducts.sort((a, b) => {
    if (filter === 'lowToHigh') {
      return a.price - b.price;
    } else if (filter === 'highToLow') {
      return b.price - a.price;
    }
    return 0; // No sorting by default
  });

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
      {sortedProducts.map((product) => (
        <Prod key={product.id} data={product} />
      ))}
    </div>
  );
};

export default Shopitems;
