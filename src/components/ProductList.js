import React from 'react';

function ProductList({ products, addToCart }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            {products.map(product => (
                <div key={product.id} className="border p-4 rounded shadow">
                    <img src={product.image} alt={product.title} className="w-full h-40 object-cover mb-2" />
                    <h2 className="font-bold">{product.title}</h2>
                    <p>${product.price}</p>
                    <button
                        onClick={() => addToCart(product)}
                        className="mt-2 w-full bg-blue-500 text-white py-2 rounded"
                    >
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
