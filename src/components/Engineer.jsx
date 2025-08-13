import React from 'react';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    Title
} from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';
import {
    ClipboardDocumentIcon,
    CubeIcon,
    DocumentCheckIcon,
    ExclamationCircleIcon
} from '@heroicons/react/24/solid';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

const Engineer = () => {
    return (
        <div className="p-6 space-y-6 w-full bg-base-100 min-h-screen">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-semibold text-white">
                <StatCard title="Total Schemes" value="124" icon={<ClipboardDocumentIcon className="h-8 w-8 text-white" />} />
                <StatCard title="Assets Registered" value="538" icon={<CubeIcon className="h-8 w-8 text-white" />} />
                <StatCard title="Work Orders Issued" value="87" icon={<DocumentCheckIcon className="h-8 w-8 text-white" />} />
                <StatCard title="Pending Approvals" value="15" icon={<ExclamationCircleIcon className="h-8 w-8 text-white" />} />
            </div>

            {/* Chart Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-base-200 p-6 rounded-2xl shadow">
                    <h2 className="text-lg font-semibold mb-4">Asset Distribution</h2>
                    <Doughnut
                        data={{
                            labels: ['Roads', 'Buildings', 'Machinery'],
                            datasets: [
                                {
                                    data: [120, 90, 50],
                                    backgroundColor: ['#2563EB', '#3B82F6', '#E0E7FF'],
                                    borderWidth: 0
                                }
                            ]
                        }}
                        options={{ cutout: '70%' }}
                    />
                </div>
                <div className="bg-white dark:bg-base-200 p-6 rounded-2xl shadow">
                    <h2 className="text-lg font-semibold mb-4">Work History</h2>
                    <Bar
                        data={{
                            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
                            datasets: [
                                {
                                    label: 'Work Orders',
                                    data: [5, 10, 7, 14, 9],
                                    backgroundColor: '#2563EB'
                                }
                            ]
                        }}
                    />
                </div>
            </div>

            {/* Activity + Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-base-200 p-6 rounded-2xl shadow">
                    <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
                    <ul className="space-y-3 text-sm">
                        <li>✔️ Scheme "Green Bridge" added by ZP Member.</li>
                        <li> Asset "Bulldozer-04" deployed to Block C.</li>
                        <li> Work order #4921 approved on Aug 5, 2025.</li>
                    </ul>
                </div>
                <div className="bg-white dark:bg-base-200 p-6 rounded-2xl shadow">
                    <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
                    <div className="flex flex-col gap-3">
                        <button className="btn btn-primary w-full">+ Add New Scheme</button>
                        <button className="btn btn-secondary w-full">+ Register Asset</button>
                        <button className="btn btn-accent w-full">+ Assign Work Order</button>
                        <button className="btn btn-outline w-full">View Reports</button>
                    </div>
                </div>
            </div>

            {/* User Stats + Reports + Reminders */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-base-200 p-6 rounded-2xl shadow">
                    <h2 className="text-lg font-semibold mb-4">User Stats</h2>
                    <ul className="text-sm space-y-2">
                        <li> Engineers: 45</li>
                        <li>ZP Members: 18</li>
                        <li>Block-in-Charges: 22</li>
                    </ul>
                </div>
                <div className="bg-white dark:bg-base-200 p-6 rounded-2xl shadow">
                    <h2 className="text-lg font-semibold mb-4">Reports</h2>
                    <button className="btn btn-outline w-full mb-2">Download Scheme Report (PDF)</button>
                    <button className="btn btn-outline w-full">Download Asset Report (Excel)</button>
                </div>
                <div className="bg-white dark:bg-base-200 p-6 rounded-2xl shadow">
                    <h2 className="text-lg font-semibold mb-4">Reminders</h2>
                    <ul className="text-sm space-y-2">
                        <li> Approve pending work orders</li>
                        <li> Monthly review on Aug 10</li>
                        <li> Update asset logs</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

// Stats Card with blue-600 background
const StatCard = ({ title, value, icon }) => (
    <div className="bg-blue-600 rounded-2xl shadow p-4 flex items-center gap-4">
        <div className="p-2 rounded-full bg-blue-700">
            {icon}
        </div>
        <div>
            <p className="text-sm text-blue-100">{title}</p>
            <p className="text-xl font-semibold text-white">{value}</p>
        </div>
    </div>
);

export default Engineer;


