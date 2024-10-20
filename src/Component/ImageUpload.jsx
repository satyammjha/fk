import React, { useState } from 'react';

const ImageUpload = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [result, setResult] = useState('');

    const handleImageChange = (e) => {
        setSelectedImage(e.target.files[0]);
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', selectedImage);

        try {
            const response = await fetch('/upload', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            setResult(data.product_name); // Assuming backend returns 'product_name'
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    return (
        <div className="flex flex-col items-center">
            <form onSubmit={handleUpload} className="flex flex-col items-center">
                <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleImageChange} 
                    className="mb-4"
                />
                <button 
                    type="submit" 
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                >
                    Upload Image
                </button>
            </form>

            {/* Display Result */}
            {result && (
                <div className="mt-4">
                    <h3>Detected Product: {result}</h3>
                </div>
            )}
        </div>
    );
};

export default ImageUpload;