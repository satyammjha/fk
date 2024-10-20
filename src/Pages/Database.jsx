import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Database = () => {
    // Sample data
    const initialData = [
        {
            id: 1,
            name: "Maggie",
            category: "Food",
            brand: "Brand A",
            productName: "Instant Noodles",
            size: "100g",
            freshness: "Fresh",
            mrp: "20",
            mfgDate: "2024-01-01",
            expDate: "2025-12-31",
            defective: true,
        },
        {
            id: 2,
            name: "Apple",
            category: "Fruits",
            brand: "Brand B",
            productName: "Fresh Apple",
            size: "200g",
            freshness: "Fresh",
            mrp: "50",
            mfgDate: "2024-01-15",
            expDate: "2025-06-30",
            defective: false,
        },
        {
            id: 3,
            name: "Carrot",
            category: "Vegetables",
            brand: "Brand C",
            productName: "Organic Carrot",
            size: "150g",
            freshness: "Fresh",
            mrp: "30",
            mfgDate: "2024-01-10",
            expDate: "2025-07-15",
            defective: false,
        },
        {
            id: 4,
            name: "T-Shirt",
            category: "Clothes",
            brand: "Brand D",
            productName: "Cotton T-Shirt",
            size: "L",
            freshness: "New",
            mrp: "300",
            mfgDate: "2024-01-05",
            expDate: "N/A",
            defective: true,
        },
        {
            id: 5,
            name: "Banana",
            category: "Fruits",
            brand: "Brand E",
            productName: "Ripe Banana",
            size: "250g",
            freshness: "Fresh",
            mrp: "25",
            mfgDate: "2024-01-10",
            expDate: "2025-05-01",
            defective: false,
        },
        {
            id: 6,
            name: "Broccoli",
            category: "Vegetables",
            brand: "Brand F",
            productName: "Fresh Broccoli",
            size: "300g",
            freshness: "Fresh",
            mrp: "70",
            mfgDate: "2024-01-12",
            expDate: "2025-07-20",
            defective: false,
        },
        {
            id: 7,
            name: "Rice",
            category: "Food",
            brand: "Brand G",
            productName: "Basmati Rice",
            size: "1kg",
            freshness: "Fresh",
            mrp: "90",
            mfgDate: "2024-01-15",
            expDate: "2026-01-15",
            defective: false,
        },
        {
            id: 8,
            name: "Orange",
            category: "Fruits",
            brand: "Brand H",
            productName: "Juicy Orange",
            size: "500g",
            freshness: "Fresh",
            mrp: "60",
            mfgDate: "2024-01-05",
            expDate: "2025-02-10",
            defective: false,
        },
        {
            id: 9,
            name: "Spinach",
            category: "Vegetables",
            brand: "Brand I",
            productName: "Organic Spinach",
            size: "200g",
            freshness: "Fresh",
            mrp: "40",
            mfgDate: "2024-01-08",
            expDate: "2025-04-10",
            defective: false,
        },
        {
            id: 10,
            name: "Socks",
            category: "Clothes",
            brand: "Brand J",
            productName: "Cotton Socks",
            size: "M",
            freshness: "New",
            mrp: "150",
            mfgDate: "2024-01-11",
            expDate: "N/A",
            defective: false,
        },
        {
            id: 11,
            name: "Potato",
            category: "Vegetables",
            brand: "Brand K",
            productName: "Fresh Potato",
            size: "1kg",
            freshness: "Fresh",
            mrp: "40",
            mfgDate: "2024-01-15",
            expDate: "2025-06-15",
            defective: false,
        },
        {
            id: 12,
            name: "Bread",
            category: "Food",
            brand: "Brand L",
            productName: "Whole Wheat Bread",
            size: "400g",
            freshness: "Fresh",
            mrp: "30",
            mfgDate: "2024-01-12",
            expDate: "2024-01-20",
            defective: true,
        },
        {
            id: 13,
            name: "Butter",
            category: "Food",
            brand: "Brand M",
            productName: "Unsalted Butter",
            size: "250g",
            freshness: "Fresh",
            mrp: "80",
            mfgDate: "2024-01-14",
            expDate: "2025-01-14",
            defective: false,
        },
        {
            id: 14,
            name: "Grapes",
            category: "Fruits",
            brand: "Brand N",
            productName: "Fresh Grapes",
            size: "300g",
            freshness: "Fresh",
            mrp: "100",
            mfgDate: "2024-01-10",
            expDate: "2025-03-20",
            defective: false,
        },
        {
            id: 15,
            name: "Trousers",
            category: "Clothes",
            brand: "Brand O",
            productName: "Casual Trousers",
            size: "34",
            freshness: "New",
            mrp: "800",
            mfgDate: "2024-01-02",
            expDate: "N/A",
            defective: true,
        },
        {
            id: 16,
            name: "Milk",
            category: "Food",
            brand: "Brand P",
            productName: "Full Cream Milk",
            size: "1L",
            freshness: "Fresh",
            mrp: "60",
            mfgDate: "2024-01-03",
            expDate: "2024-01-10",
            defective: false,
        },
        {
            id: 17,
            name: "Cheese",
            category: "Food",
            brand: "Brand Q",
            productName: "Processed Cheese",
            size: "200g",
            freshness: "Fresh",
            mrp: "90",
            mfgDate: "2024-01-06",
            expDate: "2025-01-06",
            defective: false,
        },
        {
            id: 18,
            name: "Onion",
            category: "Vegetables",
            brand: "Brand R",
            productName: "Fresh Onion",
            size: "500g",
            freshness: "Fresh",
            mrp: "25",
            mfgDate: "2024-01-08",
            expDate: "2025-05-15",
            defective: false,
        },
        {
            id: 19,
            name: "Pants",
            category: "Clothes",
            brand: "Brand S",
            productName: "Denim Pants",
            size: "32",
            freshness: "New",
            mrp: "1200",
            mfgDate: "2024-01-05",
            expDate: "N/A",
            defective: true,
        },
        {
            id: 20,
            name: "Orange Juice",
            category: "Food",
            brand: "Brand T",
            productName: "Freshly Squeezed Orange Juice",
            size: "1L",
            freshness: "Fresh",
            mrp: "150",
            mfgDate: "2024-01-14",
            expDate: "2024-02-14",
            defective: false,
        },
        {
            id: 21,
            name: "Chocolate",
            category: "Food",
            brand: "Brand U",
            productName: "Milk Chocolate",
            size: "100g",
            freshness: "Fresh",
            mrp: "80",
            mfgDate: "2024-01-09",
            expDate: "2025-01-09",
            defective: false,
        },
        {
            id: 22,
            name: "Watermelon",
            category: "Fruits",
            brand: "Brand V",
            productName: "Fresh Watermelon",
            size: "1kg",
            freshness: "Fresh",
            mrp: "90",
            mfgDate: "2024-01-11",
            expDate: "2025-05-01",
            defective: false,
        },
        {
            id: 23,
            name: "Pasta",
            category: "Food",
            brand: "Brand W",
            productName: "Pasta",
            size: "500g",
            freshness: "Fresh",
            mrp: "45",
            mfgDate: "2024-01-13",
            expDate: "2025-01-13",
            defective: false,
        },
        {
            id: 24,
            name: "Lettuce",
            category: "Vegetables",
            brand: "Brand X",
            productName: "Organic Lettuce",
            size: "200g",
            freshness: "Fresh",
            mrp: "35",
            mfgDate: "2024-01-10",
            expDate: "2025-04-25",
            defective: false,
        },
        {
            id: 25,
            name: "Jacket",
            category: "Clothes",
            brand: "Brand Y",
            productName: "Winter Jacket",
            size: "M",
            freshness: "New",
            mrp: "2500",
            mfgDate: "2024-01-01",
            expDate: "N/A",
            defective: false,
        },
        {
            id: 26,
            name: "Pineapple",
            category: "Fruits",
            brand: "Brand Z",
            productName: "Fresh Pineapple",
            size: "1kg",
            freshness: "Fresh",
            mrp: "120",
            mfgDate: "2024-01-12",
            expDate: "2025-06-01",
            defective: false,
        },
        {
            id: 27,
            name: "Toothpaste",
            category: "Personal Care",
            brand: "Brand AA",
            productName: "Mint Toothpaste",
            size: "150g",
            freshness: "Fresh",
            mrp: "100",
            mfgDate: "2024-01-11",
            expDate: "2026-01-11",
            defective: false,
        },
        {
            id: 28,
            name: "Shampoo",
            category: "Personal Care",
            brand: "Brand AB",
            productName: "Herbal Shampoo",
            size: "200ml",
            freshness: "Fresh",
            mrp: "250",
            mfgDate: "2024-01-02",
            expDate: "2025-01-02",
            defective: false,
        },
        {
            id: 29,
            name: "Soap",
            category: "Personal Care",
            brand: "Brand AC",
            productName: "Antibacterial Soap",
            size: "100g",
            freshness: "Fresh",
            mrp: "40",
            mfgDate: "2024-01-05",
            expDate: "2026-01-05",
            defective: false,
        },
        {
            id: 30,
            name: "Face Cream",
            category: "Personal Care",
            brand: "Brand AD",
            productName: "Moisturizing Face Cream",
            size: "50g",
            freshness: "Fresh",
            mrp: "300",
            mfgDate: "2024-01-15",
            expDate: "2026-01-15",
            defective: false,
        },
    ];

    const categories = ["All", "Food", "Fruits", "Vegetables", "Clothes"];
    const [data, setData] = useState(initialData);
    const [filter, setFilter] = useState("All");

    // Filter data based on selected category
    const filteredData = filter === "All" ? data : data.filter(item => item.category === filter);

    return (
        <div className="bg-[#f2f2f2] rounded-lg shadow-md">
            <div className='bg-[#FFC408] p-1 w-[100vw] flex flex-row gap-12'>
                <Link to="/" className="font-bold p-1 text-white bg-[#007BFF] rounded-md">
                    Master Db
                </Link>
                <div className="font-bold p-1 text-white bg-[#007BFF] rounded-md">Product Count: {data.length}</div>
                <h2 className="font-bold p-1 w-max text-white bg-[#007BFF] rounded-sm ml-[20vw]">General Database</h2>
            </div>

            {/* Category Filter */}
            <div className="mb-4">
                <label className="font-semibold text-gray-700 mr-2">Filter by Category:</label>
                <select
                    className="border border-gray-300 rounded-md p-2"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                >
                    {categories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
            </div>

            {/* Data Table Container */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow-md border border-gray-300">
                    <thead>
                        <tr className="bg-[#FFC408] text-gray-600 uppercase text-sm">
                            <th className="py-2 px-4 border sticky top-0">Name</th>
                            <th className="py-2 px-4 border sticky top-0">Category</th>
                            <th className="py-2 px-4 border sticky top-0">Brand</th>
                            <th className="py-2 px-4 border sticky top-0">Product Name</th>
                            <th className="py-2 px-4 border sticky top-0">Size</th>
                            <th className="py-2 px-4 border sticky top-0">Freshness</th>
                            <th className="py-2 px-4 border sticky top-0">MRP</th>
                            <th className="py-2 px-4 border sticky top-0">MFG Date</th>
                            <th className="py-2 px-4 border sticky top-0">EXP Date</th>
                            <th className="py-2 px-4 border sticky top-0">Defective</th>
                        </tr>
                    </thead>
                    <tbody className="overflow-y-auto h-64"> {/* Fixed height for scrolling */}
                        {filteredData.map((item) => (
                            <tr key={item.id} className="text-gray-600 text-sm">
                                <td className="py-2 px-4 border">{item.name}</td>
                                <td className="py-2 px-4 border">{item.category}</td>
                                <td className="py-2 px-4 border">{item.brand}</td>
                                <td className="py-2 px-4 border">{item.productName}</td>
                                <td className="py-2 px-4 border">{item.size}</td>
                                <td className="py-2 px-4 border">{item.freshness}</td>
                                <td className="py-2 px-4 border">₹{item.mrp}</td>
                                <td className="py-2 px-4 border">{item.mfgDate}</td>
                                <td className="py-2 px-4 border">{item.expDate}</td>
                                <td className="py-2 px-4 border">{item.defective ? 'Yes' : 'No'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Database;
