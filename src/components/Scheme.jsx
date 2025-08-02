import { Link } from "react-router-dom";

const Scheme = () => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Top Nav */}
            <nav className="w-full bg-base-100 px-4 py-3 top-0 rounded-md shadow border-b border-base-300">
                <Link to="/add-scheme">
                    <button className="btn btn-primary ml-3 rounded-md">+ Add Scheme</button>
                </Link>
            </nav>

            {/* Main Content: Two Sections Side by Side */}
            <div className="p-4 lg:p-6 flex flex-col lg:flex-row gap-6 flex-grow">
                {/* Left: Schemes Section */}
                <div className="w-full lg:w-1/2 bg-base-200 rounded-lg p-6 shadow-md border border-base-300 flex flex-col">
                    <h2 className="text-2xl font-semibold text-primary mb-4">Schemes</h2>

                    {/* Scrollable Schemes */}
                    <div className="overflow-y-auto pr-2 space-y-4 max-h-[calc(100vh-13rem)]">
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

                {/* Right: Work History Section */}
                <div className="w-full lg:w-1/2 bg-base-200 rounded-lg p-6 shadow-md border border-base-300 flex flex-col">
                    <h2 className="text-2xl font-semibold text-primary mb-4">Work History</h2>

                    {/* Scrollable Work Cards */}
                    <div className="overflow-y-auto pr-2 space-y-4 max-h-[calc(100vh-13rem)]">
                        {Array.from({ length: 8 }).map((_, index) => (
                            <div
                                key={index}
                                className="bg-base-100 p-4 rounded-lg shadow border border-base-300"
                            >
                                <h3 className="font-semibold text-lg">
                                    Project #{index + 1}
                                </h3>
                                <p className="text-sm text-base-content">
                                    Started: Jul 2025 | In Progress
                                </p>
                                <p className="mt-2 text-sm">Status: Ongoing</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Scheme;
