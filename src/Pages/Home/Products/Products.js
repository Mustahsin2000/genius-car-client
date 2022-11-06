import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    }, [])
    return (
        <div className='mt-12'>
        <div className='text-center'>
            <p className='text-2xl font-bold text-orange-500'>Popular Products</p>
            <h2 className='text-5xl font-semibold'>Browse Our Products</h2>
            <p className='w-3/4 mx-auto mt-2 mb-3'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'> 
            {
                products.map(product=><ProductCard key={product._id} product={product}></ProductCard>)
            }
        </div>
    </div>
    );
};

export default Products;