import React from 'react';

const Table = () => {
    // Sample data for the table (15 products)
    const data = [
        { serialNo: 1, category: "Electronics", brand: "Samsung", productName: "Galaxy S21", mrp: "799", expiry: "N/A", qty: 50, fIndex: 0.9, defective: 0 },
        // { serialNo: 2, category: "Grocery", brand: "Brand A", productName: "Rice", mrp: "20", expiry: "2025-12-31", qty: 100, fIndex: 0.95, defective: 0 },
        // { serialNo: 3, category: "Electronics", brand: "Apple", productName: "iPhone 12", mrp: "999", expiry: "N/A", qty: 30, fIndex: 0.85, defective: 1 },
        // { serialNo: 4, category: "Clothing", brand: "Nike", productName: "T-Shirt", mrp: "25", expiry: "2024-06-30", qty: 200, fIndex: 0.8, defective: 0 },
        // { serialNo: 5, category: "Electronics", brand: "Sony", productName: "PlayStation 5", mrp: "499", expiry: "N/A", qty: 15, fIndex: 0.75, defective: 1 },
        // { serialNo: 6, category: "Grocery", brand: "Brand B", productName: "Flour", mrp: "10", expiry: "2024-01-31", qty: 250, fIndex: 0.98, defective: 0 },
        // { serialNo: 7, category: "Beauty", brand: "L'Oreal", productName: "Shampoo", mrp: "15", expiry: "2024-11-30", qty: 80, fIndex: 0.9, defective: 1 },
        // { serialNo: 8, category: "Furniture", brand: "IKEA", productName: "Chair", mrp: "75", expiry: "N/A", qty: 60, fIndex: 0.85, defective: 1 },
        // { serialNo: 9, category: "Electronics", brand: "Samsung", productName: "Galaxy Tab", mrp: "399", expiry: "N/A", qty: 40, fIndex: 0.9, defective: 0 },
        // { serialNo: 10, category: "Grocery", brand: "Brand C", productName: "Sugar", mrp: "5", expiry: "2025-12-31", qty: 150, fIndex: 0.95, defective: 0 },
        // { serialNo: 11, category: "Toys", brand: "Lego", productName: "Building Blocks", mrp: "45", expiry: "N/A", qty: 70, fIndex: 0.85, defective: 1 },
        // { serialNo: 12, category: "Electronics", brand: "HP", productName: "Laptop", mrp: "899", expiry: "N/A", qty: 25, fIndex: 0.9, defective: 0 },
        // { serialNo: 13, category: "Kitchen", brand: "Tefal", productName: "Frying Pan", mrp: "30", expiry: "N/A", qty: 120, fIndex: 0.9, defective: 1 },
        // { serialNo: 14, category: "Stationery", brand: "Pilot", productName: "Pens", mrp: "10", expiry: "2025-12-31", qty: 500, fIndex: 0.95, defective: 0 },
        // { serialNo: 15, category: "Beauty", brand: "Maybelline", productName: "Lipstick", mrp: "12", expiry: "2024-09-30", qty: 150, fIndex: 0.9, defective: 1 },
        // { serialNo: 14, category: "Stationery", brand: "Pilot", productName: "Pens", mrp: "10", expiry: "2025-12-31", qty: 500, fIndex: 0.95, defective: 0 },
        // { serialNo: 15, category: "Beauty", brand: "Maybelline", productName: "Lipstick", mrp: "12", expiry: "2024-09-30", qty: 150, fIndex: 0.9, defective: 1 },
        // { serialNo: 14, category: "Stationery", brand: "Pilot", productName: "Pens", mrp: "10", expiry: "2025-12-31", qty: 500, fIndex: 0.95, defective: 0 },
        // { serialNo: 15, category: "Beauty", brand: "Maybelline", productName: "Lipstick", mrp: "12", expiry: "2024-09-30", qty: 150, fIndex: 0.9, defective: 1 },
        // { serialNo: 14, category: "Stationery", brand: "Pilot", productName: "Pens", mrp: "10", expiry: "2025-12-31", qty: 500, fIndex: 0.95, defective: 0 },
        // { serialNo: 15, category: "Beauty", brand: "Maybelline", productName: "Lipstick", mrp: "12", expiry: "2024-09-30", qty: 150, fIndex: 0.9, defective: 1 },
        // { serialNo: 14, category: "Stationery", brand: "Pilot", productName: "Pens", mrp: "10", expiry: "2025-12-31", qty: 500, fIndex: 0.95, defective: 0 },
        // { serialNo: 15, category: "Beauty", brand: "Maybelline", productName: "Lipstick", mrp: "12", expiry: "2024-09-30", qty: 150, fIndex: 0.9, defective: 1 },
        // { serialNo: 14, category: "Stationery", brand: "Pilot", productName: "Pens", mrp: "10", expiry: "2025-12-31", qty: 500, fIndex: 0.95, defective: 0 },
        // { serialNo: 15, category: "Beauty", brand: "Maybelline", productName: "Lipstick", mrp: "12", expiry: "2024-09-30", qty: 150, fIndex: 0.9, defective: 1 },
        // { serialNo: 14, category: "Stationery", brand: "Pilot", productName: "Pens", mrp: "10", expiry: "2025-12-31", qty: 500, fIndex: 0.95, defective: 0 },
        // { serialNo: 15, category: "Beauty", brand: "Maybelline", productName: "Lipstick", mrp: "12", expiry: "2024-09-30", qty: 150, fIndex: 0.9, defective: 1 },
        // { serialNo: 14, category: "Stationery", brand: "Pilot", productName: "Pens", mrp: "10", expiry: "2025-12-31", qty: 500, fIndex: 0.95, defective: 0 },
        // { serialNo: 15, category: "Beauty", brand: "Maybelline", productName: "Lipstick", mrp: "12", expiry: "2024-09-30", qty: 150, fIndex: 0.9, defective: 1 },
        // { serialNo: 14, category: "Stationery", brand: "Pilot", productName: "Pens", mrp: "10", expiry: "2025-12-31", qty: 500, fIndex: 0.95, defective: 0 },
        // { serialNo: 15, category: "Beauty", brand: "Maybelline", productName: "Lipstick", mrp: "12", expiry: "2024-09-30", qty: 150, fIndex: 0.9, defective: 1 },
        // { serialNo: 14, category: "Stationery", brand: "Pilot", productName: "Pens", mrp: "10", expiry: "2025-12-31", qty: 500, fIndex: 0.95, defective: 0 },
        // { serialNo: 15, category: "Beauty", brand: "Maybelline", productName: "Lipstick", mrp: "12", expiry: "2024-09-30", qty: 150, fIndex: 0.9, defective: 1 },
        // { serialNo: 14, category: "Stationery", brand: "Pilot", productName: "Pens", mrp: "10", expiry: "2025-12-31", qty: 500, fIndex: 0.95, defective: 0 },
        // { serialNo: 15, category: "Beauty", brand: "Maybelline", productName: "Lipstick", mrp: "12", expiry: "2024-09-30", qty: 150, fIndex: 0.9, defective: 1 },
        // { serialNo: 14, category: "Stationery", brand: "Pilot", productName: "Pens", mrp: "10", expiry: "2025-12-31", qty: 500, fIndex: 0.95, defective: 0 },
        // { serialNo: 15, category: "Beauty", brand: "Maybelline", productName: "Lipstick", mrp: "12", expiry: "2024-09-30", qty: 150, fIndex: 0.9, defective: 1 },
        // { serialNo: 14, category: "Stationery", brand: "Pilot", productName: "Pens", mrp: "10", expiry: "2025-12-31", qty: 500, fIndex: 0.95, defective: 0 },
        // { serialNo: 15, category: "Beauty", brand: "Maybelline", productName: "Lipstick", mrp: "12", expiry: "2024-09-30", qty: 150, fIndex: 0.9, defective: 1 },
        // { serialNo: 14, category: "Stationery", brand: "Pilot", productName: "Pens", mrp: "10", expiry: "2025-12-31", qty: 500, fIndex: 0.95, defective: 0 },
        // { serialNo: 15, category: "Beauty", brand: "Maybelline", productName: "Lipstick", mrp: "12", expiry: "2024-09-30", qty: 150, fIndex: 0.9, defective: 1 },
        // { serialNo: 14, category: "Stationery", brand: "Pilot", productName: "Pens", mrp: "10", expiry: "2025-12-31", qty: 500, fIndex: 0.95, defective: 0 },
        // { serialNo: 15, category: "Beauty", brand: "Maybelline", productName: "Lipstick", mrp: "12", expiry: "2024-09-30", qty: 150, fIndex: 0.9, defective: 1 },
        // { serialNo: 14, category: "Stationery", brand: "Pilot", productName: "Pens", mrp: "10", expiry: "2025-12-31", qty: 500, fIndex: 0.95, defective: 0 },
        // { serialNo: 15, category: "Beauty", brand: "Maybelline", productName: "Lipstick", mrp: "12", expiry: "2024-09-30", qty: 150, fIndex: 0.9, defective: 1 },
    ];

    return (
        <div className="h-[100vh] overflow-hidden">
            <div className="h-full flex flex-col">
                <div className="overflow-auto h-full"> {/* Scrollable body */}
                    <table className="border-collapse border border-gray-200 w-[70vw]">
                        <thead className="sticky top-0 bg-[#007BFF] text-white">
                            <tr>
                                <th className="border border-gray-300 p-2 text-left">S No.</th>
                                <th className="border border-gray-300 p-2 text-left">Category</th>
                                <th className="border border-gray-300 p-2 text-left">Brand</th>
                                <th className="border border-gray-300 p-2 text-left">Product Name</th>
                                <th className="border border-gray-300 p-2 text-left">MRP</th>
                                <th className="border border-gray-300 p-2 text-left">Expiry</th>
                                <th className="border border-gray-300 p-2 text-left">Qty</th>
                                <th className="border border-gray-300 p-2 text-left">F Index</th>
                                <th className="border border-gray-300 p-2 text-left">Defective</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.serialNo} className="hover:bg-gray-100">
                                    <td className="border border-gray-300 p-2 text-left">{item.serialNo}</td>
                                    <td className="border border-gray-300 p-2 text-left">{item.category}</td>
                                    <td className="border border-gray-300 p-2 text-left">{item.brand}</td>
                                    <td className="border border-gray-300 p-2 text-left">{item.productName}</td>
                                    <td className="border border-gray-300 p-2 text-left">{item.mrp}</td>
                                    <td className="border border-gray-300 p-2 text-left">{item.expiry}</td>
                                    <td className="border border-gray-300 p-2 text-left">{item.qty}</td>
                                    <td className="border border-gray-300 p-2 text-left">{item.fIndex}</td>
                                    <td className="border border-gray-300 p-2 text-left">{item.defective}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Table;
