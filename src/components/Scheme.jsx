import { Link } from "react-router-dom";

const Scheme = () => {
    return (
        <div className="min-h-screen overflow-y-auto">

            <div className="min-h-screen flex flex-col">
                {/* Full-width Top Navbar */}
                <nav className="w-full bg-base-100 px-6 py-3 shadow border-b border-base-300">
                    <Link to="/add-scheme">
                        <button className="btn btn-primary rounded-md">+ Add Scheme</button>
                    </Link>
                </nav>

                {/* Main Content: Schemes (Left) and Work History (Right) */}
                <div className="flex flex-col lg:flex-row flex-grow overflow-y-auto p-4 gap-6 bg-base-100">
                    {/* Schemes Section (Left) */}
                    <div className="w-full lg:w-1/2 bg-base-200 rounded-lg p-6 shadow-md border border-base-300 flex flex-col">
                        <h2 className="text-2xl font-semibold text-primary mb-4">Schemes</h2>

                        {/* Scrollable Schemes List */}
                        <div className="overflow-y-auto pr-2 space-y-4 flex-grow max-h-[calc(100vh-9rem)]">
                            {Array.from({ length: 6 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="bg-base-100 p-4 rounded-lg shadow border border-base-300"
                                >
                                    <h3 className="font-semibold text-lg">
                                        Scheme #{index + 1}
                                    </h3>
                                    <p className="text-sm text-base-content">
                                        Launched: Jan 202{index} | Area: Block A
                                    </p>
                                    <p className="mt-2 text-sm">Type: Infrastructure</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Work History Section (Right - Now Styled Like Orders) */}
                    <div className="w-full lg:w-1/2 bg-base-200 rounded-lg p-6 shadow-md border border-base-300 flex flex-col">
                        <h2 className="text-3xl font-bold text-primary mb-4">Work History</h2>

                        {/* Single Center-Aligned Card */}
                        <div className="bg-base-100 p-6 rounded-lg shadow border border-base-300 h-80 w-full">
                            <h3 className="text-lg font-semibold">Project #2025-08</h3>
                            <p className="mt-2 text-sm">Started: July 2025</p>
                            <p className="text-sm">Block: Block A</p>
                            <p className="text-sm">Progress: 65%</p>
                            <p className="text-sm mt-4">
                                Details: This project involves the construction of community toilets and streetlights in Gram Panchayat Y, expected to complete by Sept 2025.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Scheme;
