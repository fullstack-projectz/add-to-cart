import React from 'react';

function Navbar({ cartCount, openCart }) {
    return (
        <nav className="p-4 bg-blue-600 text-white flex justify-between">
            <h1 className="text-xl font-bold">Fake Store</h1>
            <button onClick={openCart} className="bg-white text-blue-600 px-4 py-2 rounded">
                Cart ({cartCount})
            </button>
        </nav>
    );
}

export default Navbar;
