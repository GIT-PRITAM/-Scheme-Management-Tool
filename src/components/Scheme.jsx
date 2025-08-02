import { useState } from "react";
import AddSchemeModal from "./AddSchemeModal";
const Scheme = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // State to store schemes
    const [schemes, setSchemes] = useState([
        {
            schemeName: "Default Scheme",
            launchDate: "2025-01-01",
            area: "Block A",
            type: "Infrastructure",
        },
        {
            schemeName: "Default Scheme 2",
            launchDate: "2025-01-01",
            area: "Block A",
            type: "Infrastructure",
        },
    ]);

    // Handle form submission
    const handleFormSubmit = (data) => {
        setSchemes((prevSchemes) => [...prevSchemes, data]);
        setIsModalOpen(false);
    };

    return (
        <div className="min-h-screen overflow-y-auto">
            <div className="min-h-screen flex flex-col">
                {/* Navbar */}
                <nav className="w-full bg-base-100 px-6 py-3 shadow border-b border-base-300 flex justify-between items-center">
                    <h1 className="text-xl font-semibold text-primary">Schemes Dashboard</h1>
                    <button
                        className="btn btn-primary rounded-md"
                        onClick={() => setIsModalOpen(true)}
                    >
                        + Add Scheme
                    </button>
                </nav>

                {/* Modal */}
                <AddSchemeModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onSubmit={handleFormSubmit}
                />

                {/* Main Content */}
                <div className="flex flex-col lg:flex-row flex-grow overflow-y-auto p-4 gap-6 bg-base-100">
                    {/* Schemes List */}
                    <div className="w-full lg:w-1/2 bg-base-200 rounded-lg p-6 shadow-md border border-base-300 flex flex-col">
                        <h2 className="text-2xl font-semibold text-primary mb-4">Schemes</h2>

                        <div className="overflow-y-auto pr-2 space-y-4 flex-grow max-h-[calc(100vh-9rem)]">
                            {schemes.map((scheme, index) => (
                                <div
                                    key={index}
                                    className="bg-base-100 p-4 rounded-lg shadow border border-base-300"
                                >
                                    <h3 className="font-semibold text-lg">{scheme.schemeName}</h3>
                                    <p className="text-sm text-base-content">
                                        Launched: {scheme.launchDate} | Area: {scheme.area}
                                    </p>
                                    <p className="mt-2 text-sm">Type: {scheme.type}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Work History */}
                    <div className="w-full lg:w-1/2 bg-base-200 rounded-lg p-6 shadow-md border border-base-300 flex flex-col">
                        <h2 className="text-3xl font-bold text-primary mb-4">Work History</h2>
                        <div className="bg-base-100 p-6 rounded-lg shadow border border-base-300 h-80 w-full">
                            <h3 className="text-lg font-semibold">Project #2025-08</h3>
                            <p className="mt-2 text-sm">Started: July 2025</p>
                            <p className="text-sm">Block: Block A</p>
                            <p className="text-sm">Progress: 65%</p>
                            <p className="text-sm mt-4">
                                Details: Construction of toilets and streetlights in Gram Panchayat Y. Expected completion: Sept 2025.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Scheme;
