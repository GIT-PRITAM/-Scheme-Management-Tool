import React, { useState } from 'react';
import AddAssetModal from './AddAssetModal';

const Assets = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const [assets, setAssets] = useState([
        { name: 'Asset #1', category: 'Equipment', condition: 'Good' },
        { name: 'Asset #2', category: 'Machinery', condition: 'Average' },
    ]);

    //will check
    const handleAddAsset = (newAsset) => {
        setAssets([...assets, newAsset]);
    };

    return (
        <div className="min-h-screen p-4 flex flex-col gap-6">
            {/* Navbar */}
            <div className="bg-base-100 p-4 rounded-md shadow border border-base-300 flex flex-wrap items-center gap-4">
                {/* Dropdowns */}
                {['Work Order', 'Block', 'Gram Panchayat', 'Village'].map((label, i) => (
                    <div key={i} className="form-control w-52">
                        <label className="label">
                            <span className="label-text font-semibold">{label}</span>
                        </label>
                        <select className="select select-bordered">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <option key={index}>{`${label} ${index + 1}`}</option>
                            ))}
                        </select>
                    </div>
                ))}

                {/* Add Asset Button */}
                <button
                    className="btn btn-primary ml-auto mt-4 lg:mt-6 px-6 text-base"
                    onClick={() => setModalOpen(true)}
                >
                    + Add Asset
                </button>
            </div>

            {/* Main Sections */}
            <div className="flex flex-col lg:flex-row gap-6 flex-grow">
                {/* Left: Assets List */}
                <div className="w-full lg:w-1/2 bg-base-200 rounded-lg p-4 shadow border border-base-300 flex flex-col max-h-[80vh]">
                    <h2 className="text-3xl font-bold text-primary mb-2 sticky top-0 bg-base-200 z-10 pb-2">
                        Assets
                    </h2>
                    <div className="overflow-y-auto pr-2 space-y-4">
                        {assets.map((asset, index) => (
                            <div
                                key={index}
                                className="bg-base-100 p-3 rounded-lg shadow border border-base-300"
                            >
                                <h3 className="font-medium">{asset.name}</h3>
                                <p className="text-sm text-base-content">Category: {asset.category}</p>
                                <p className="text-sm text-base-content">Condition: {asset.condition}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Orders Section */}
                <div className="w-full lg:w-1/2 bg-base-200 rounded-lg p-4 shadow border border-base-300 flex flex-col">
                    <h2 className="text-3xl font-bold text-primary mb-4">Orders</h2>

                    {/* Work Order Card */}
                    <div className="bg-base-100 p-6 rounded-lg shadow border border-base-300 h-80 w-full">
                        <h3 className="text-lg font-semibold">Work Order #12345</h3>
                        <p className="mt-2 text-sm">Issued: July 2025</p>
                        <p className="text-sm">Block: Block A</p>
                        <p className="text-sm">Status: In Progress</p>
                        <p className="text-sm mt-4">
                            Details: This work order includes the deployment of 10 streetlights across Village X.
                            The expected completion date is mid-August.
                        </p>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <AddAssetModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                onAdd={handleAddAsset}
            />
        </div>
    );
};

export default Assets;
