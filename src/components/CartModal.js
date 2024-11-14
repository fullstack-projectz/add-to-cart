import React from 'react';

function CartModal({ cartItems, closeModal, removeFromCart }) {
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-4 rounded w-96">
                <h2 className="text-xl font-bold mb-4">Cart Items</h2>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    cartItems.map(item => (
                        <div key={item.id} className="flex justify-between items-center mb-2">
                            <span>{item.title}</span>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-500 font-bold"
                            >
                                Remove
                            </button>
                        </div>
                    ))
                )}
                <button
                    onClick={closeModal}
                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded w-full"
                >
                    Close
                </button>
            </div>
        </div>
    );
}

export default CartModal;
