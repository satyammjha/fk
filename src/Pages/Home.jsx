import React from 'react';
import Camera from '../Component/ImageUpload';
import Nav from '../Component/Nav';
import Table from '../Component/Table';
import ItemDetails from '../Component/ItemDetails';
import ImageUpload from '../Component/ImageUpload';

const Home = () => {
    return (
        <div className>   <Nav />
            <div className="flex flex-col md:flex-row ">
                {/* Camera Container */}
                <div className="flex flex-col">
                    <div className="flex justify-center ">
                        <ImageUpload />
                    </div>
                    <div className="flex flex-col items-center md:items-start">
                        <ItemDetails />
                    </div>
                </div>
                <div className="ml-0">
                    <Table />
                </div>
            </div>
        </div>
    );
}

export default Home;