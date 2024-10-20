import React, { useState } from 'react';

const ItemDetails = () => {
    const itemData = {
        name: "Maggie",
        category: "Grocery",
        brand: "Brand A",
        productName: "Instant Noodles",
        size: "100g",
        freshness: "Fresh",
        mrp: "20",
        mfgDate: "2024-01-01",
        expDate: "2025-12-31",
        defective: true
    };

    const [isDefective, setIsDefective] = useState(itemData.defective);

    return (
        <div className='bg-[#f2f2f2] p-2 rounded-lg shadow-md w-[29.4vw]'>
            <div className='mb-2'>
                <span className='font-semibold text-gray-700'>Name:</span> 
                <span className='text-sm text-gray-900 ml-2'>{itemData.name}</span>
            </div>
            <div className='mb-2'>
                <span className='font-semibold text-gray-700'>Category:</span> 
                <span className='text-sm text-gray-900 ml-2'>{itemData.category}</span>
            </div>
            <div className='mb-2'>
                <span className='font-semibold text-gray-700'>Brand:</span> 
                <span className='text-sm text-gray-900 ml-2'>{itemData.brand}</span>
            </div>
            <div className='mb-2'>
                <span className='font-semibold text-gray-700'>Product Name:</span> 
                <span className='text-sm text-gray-900 ml-2'>{itemData.productName}</span>
            </div>
            <div className='mb-2'>
                <span className='font-semibold text-gray-700'>Size:</span> 
                <span className='text-sm text-gray-900 ml-2'>{itemData.size}</span>
            </div>
            <div className='mb-2'>
                <span className='font-semibold text-gray-700'>Freshness:</span> 
                <span className='text-sm text-gray-900 ml-2'>{itemData.freshness}</span>
            </div>
            <div className='mb-2'>
                <span className='font-semibold text-gray-700'>MRP:</span> 
                <span className='text-sm text-gray-900 ml-2'>₹{itemData.mrp}</span>
            </div>
            <div className='mb-2'>
                <span className='font-semibold text-gray-700'>MFG Date:</span> 
                <span className='text-sm text-gray-900 ml-2'>{itemData.mfgDate}</span>
            </div>
            <div className='mb-2'>
                <span className='font-semibold text-gray-700'>EXP Date:</span> 
                <span className='text-sm text-gray-900 ml-2'>{itemData.expDate}</span>
            </div>
            <div className='mb-4 flex items-center'>
                <span className='font-semibold text-gray-700'>Defective:</span>
                <div className='flex mt-1 ml-3'>
                    <div 
                        className={`transition-all duration-300 ease-in-out cursor-pointer px-4 py-2 rounded-md font-bold border-2 ${isDefective ? 'border-red-500 bg-red-400' : 'border-green-500 bg-green-400'}`} 
                        onClick={() => setIsDefective(!isDefective)}
                    >
                        {isDefective ? 'Yes' : 'No'}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetails;