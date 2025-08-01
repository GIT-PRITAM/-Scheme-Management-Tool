import { Link } from "react-router-dom";

const Scheme = () => {
    return (
        <div className="p-4 lg:p-6">
            <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-5rem)]">
                {/* Left: Fixed Schemes Section */}
                <div className="w-full lg:w-1/2 bg-base-200 rounded-xl p-6 shadow-md h-fit lg:sticky lg:top-[5rem] border border-base-300">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-semibold text-primary">Schemes</h2>
                        <Link to="/add-scheme">
                            <button className="btn btn-primary">+ Add Scheme</button>
                        </Link>
                    </div>
                    <p className="text-base-content">No schemes available yet.</p>
                </div>

                {/* Right: Work History Section */}
                <div className="w-full lg:w-1/2 bg-base-200 rounded-xl p-6 shadow-md border border-base-300 flex flex-col">
                    <h2 className="text-2xl font-semibold text-primary mb-4">Work History</h2>

                    {/* Scrollable Card Area */}
                    <div className="overflow-y-auto pr-2 space-y-4 max-h-[calc(100vh-12rem)]">
                        {/* Work Cards */}
                        <div className="bg-base-100 p-4 rounded-lg shadow border border-base-300">
                            <h3 className="font-semibold text-lg">Bridge Construction</h3>
                            <p className="text-sm text-base-content">Started: Jan 2024 | Completed: Jun 2024</p>
                            <p className="mt-2 text-sm">Status: Completed</p>
                        </div>

                        <div className="bg-base-100 p-4 rounded-lg shadow border border-base-300">
                            <h3 className="font-semibold text-lg">Water Supply Project</h3>
                            <p className="text-sm text-base-content">Started: Mar 2025 | In Progress</p>
                            <p className="mt-2 text-sm">Status: Ongoing</p>
                        </div>

                        <div className="bg-base-100 p-4 rounded-lg shadow border border-base-300">
                            <h3 className="font-semibold text-lg">Village Electrification</h3>
                            <p className="text-sm text-base-content">Started: Jul 2025 | In Progress</p>
                            <p className="mt-2 text-sm">Status: Ongoing</p>
                        </div>

                        <div className="bg-base-100 p-4 rounded-lg shadow border border-base-300">
                            <h3 className="font-semibold text-lg">Village Electrification</h3>
                            <p className="text-sm text-base-content">Started: Jul 2025 | In Progress</p>
                            <p className="mt-2 text-sm">Status: Ongoing</p>
                        </div>

                        <div className="bg-base-100 p-4 rounded-lg shadow border border-base-300">
                            <h3 className="font-semibold text-lg">Village Electrification</h3>
                            <p className="text-sm text-base-content">Started: Jul 2025 | In Progress</p>
                            <p className="mt-2 text-sm">Status: Ongoing</p>
                        </div>

                        <div className="bg-base-100 p-4 rounded-lg shadow border border-base-300">
                            <h3 className="font-semibold text-lg">Village Electrification</h3>
                            <p className="text-sm text-base-content">Started: Jul 2025 | In Progress</p>
                            <p className="mt-2 text-sm">Status: Ongoing</p>
                        </div>

                        <div className="bg-base-100 p-4 rounded-lg shadow border border-base-300">
                            <h3 className="font-semibold text-lg">Village Electrification</h3>
                            <p className="text-sm text-base-content">Started: Jul 2025 | In Progress</p>
                            <p className="mt-2 text-sm">Status: Ongoing</p>
                        </div>

                        <div className="bg-base-100 p-4 rounded-lg shadow border border-base-300">
                            <h3 className="font-semibold text-lg">Village Electrification</h3>
                            <p className="text-sm text-base-content">Started: Jul 2025 | In Progress</p>
                            <p className="mt-2 text-sm">Status: Ongoing</p>
                        </div>

                        {/* Add more cards if needed */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Scheme;
