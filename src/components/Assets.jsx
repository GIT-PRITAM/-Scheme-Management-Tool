import React from 'react';

const Assets = () => {
    return (
        <div className="min-h-screen p-4 flex flex-col gap-6">
            {/* Navbar */}
            <div className="bg-base-100 p-4 rounded-md shadow border border-base-300 flex flex-wrap items-center gap-4">
                {/* Dropdowns */}
                <div className="form-control w-52">
                    <label className="label">
                        <span className="label-text font-semibold">Work Order</span>
                    </label>
                    <select className="select select-bordered">
                        <option>Order 1</option>
                        <option>Order 2</option>
                        <option>Order 3</option>
                        <option>Order 4</option>
                        <option>Order 5</option>
                    </select>
                </div>

                <div className="form-control w-52">
                    <label className="label">
                        <span className="label-text font-semibold">Block</span>
                    </label>
                    <select className="select select-bordered">
                        <option>Block A</option>
                        <option>Block B</option>
                        <option>Block C</option>
                        <option>Block D</option>
                        <option>Block E</option>
                    </select>
                </div>

                <div className="form-control w-52">
                    <label className="label">
                        <span className="label-text font-semibold">Gram Panchayat</span>
                    </label>
                    <select className="select select-bordered">
                        <option>GP 1</option>
                        <option>GP 2</option>
                        <option>GP 3</option>
                        <option>GP 4</option>
                        <option>GP 5</option>
                    </select>
                </div>

                <div className="form-control w-52">
                    <label className="label">
                        <span className="label-text font-semibold">Village</span>
                    </label>
                    <select className="select select-bordered">
                        <option>Village 1</option>
                        <option>Village 2</option>
                        <option>Village 3</option>
                        <option>Village 4</option>
                        <option>Village 5</option>
                    </select>
                </div>

                {/* Add Asset Button - Bigger */}
                <button className="btn btn-primary ml-auto mt-4 lg:mt-6 px-6 text-base">
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
                        {Array.from({ length: 12 }).map((_, index) => (
                            <div
                                key={index}
                                className="bg-base-100 p-3 rounded-lg shadow border border-base-300"
                            >
                                <h3 className="font-medium">Asset #{index + 1}</h3>
                                <p className="text-sm text-base-content">Category: Equipment</p>
                                <p className="text-sm text-base-content">Condition: Good</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Orders Section */}
                <div className="w-full lg:w-1/2 bg-base-200 rounded-lg p-4 shadow border border-base-300 flex flex-col">
                    <h2 className="text-3xl font-bold text-primary mb-4">Orders</h2>

                    {/* Work Order Card (now placed higher, not centered) */}
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
        </div>
    );
};

export default Assets;
