import React from 'react';
import {
    PlusIcon,
    PlayIcon,
    StopIcon,
    ClipboardDocumentIcon,
    CubeIcon,
    DocumentCheckIcon,
    ExclamationCircleIcon,
} from '@heroicons/react/24/solid';
import {
    ArcElement,
    Chart as ChartJS,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
} from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

// Reusable StatCard component
const StatCard = ({ title, value, color, Icon, iconColor }) => (
    <div className={`p-4 rounded-xl shadow text-white ${color}`}>
        <div className="flex items-center gap-4">
            <div className="bg-base-100 rounded-full p-2">
                <Icon className={`h-8 w-8 ${iconColor}`} />
            </div>
            <div className="ml-4">
                <p className="text-sm text-center font-semibold">{title}</p>
                <h2 className="text-3xl mt-2 font-bold">{value}</h2>
            </div>
        </div>
    </div>
);

const Dashboard = () => {
    // Detect dark mode
    const isDark =
        typeof document !== 'undefined' &&
        document.documentElement.classList.contains('dark');
    const chartTextColor = isDark ? '#ffffff' : '#000000';

    // Bar chart data
    const barData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Work Completed',
                data: [12, 19, 10, 15, 22, 30, 25, 28, 20, 18, 24, 26],
                backgroundColor: '#1D4ED8',
                borderRadius: 6,
            },
            {
                label: 'Work Pending',
                data: [5, 8, 6, 4, 7, 10, 8, 6, 5, 7, 6, 5],
                backgroundColor: '#e32417',
                borderRadius: 6,
            },
        ],
    };

    const barOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: { color: chartTextColor }, // legend text color
            },
        },
        scales: {
            x: {
                ticks: { color: chartTextColor }, // X-axis labels
                grid: { display: false },
            },
            y: {
                ticks: { color: chartTextColor }, // Y-axis labels
                grid: { color: isDark ? '#374151' : '#E5E7EB' },
            },
        },
    };

    return (
        <div className="p-6 w-full min-h-screen bg-base-200 text-base-content space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <button className="bg-blue-700 text-white px-4 py-2 rounded-full flex items-center gap-2">
                    <PlusIcon className="h-5 w-5" /> Add Scheme
                </button>
            </div>

            {/* Scheme Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard
                    title="Total Schemes"
                    value="224"
                    color="bg-blue-600"
                    Icon={ClipboardDocumentIcon}
                    iconColor="text-blue-500"
                />
                <StatCard
                    title="Assets Registered"
                    value="435"
                    color="bg-blue-600"
                    Icon={CubeIcon}
                    iconColor="text-blue-500"
                />
                <StatCard
                    title="Work Orders Issued"
                    value="128"
                    color="bg-blue-600"
                    Icon={DocumentCheckIcon}
                    iconColor="text-green-500"
                />
                <StatCard
                    title="Pending Approvals"
                    value="15"
                    color="bg-blue-600"
                    Icon={ExclamationCircleIcon}
                    iconColor="text-red-500"
                />
            </div>

            {/* Middle Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Scheme Progress */}
                <div className="bg-base-100 p-4 rounded-xl shadow text-center relative">
                    <h2 className="font-semibold mb-4">Scheme Progress</h2>
                    <div className="w-48 mx-auto relative">
                        <Doughnut
                            data={{
                                labels: ['Completed', 'In Progress', 'Pending'],
                                datasets: [{
                                    data: [60, 30, 10],
                                    backgroundColor: ['#1D4ED8', '#FFED29', '#e32417'],
                                    borderWidth: 0,
                                }],
                            }}
                            options={{
                                cutout: '70%',
                                plugins: {
                                    legend: { display: false },
                                },
                            }}
                        />
                        <div className="absolute top-[55%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold">
                            41%
                            <div className="text-sm font-normal">Scheme Ended</div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-4 gap-6 text-sm">
                        <div className="flex items-center gap-1 dark:text-white"><span className="w-3 h-3 rounded-full bg-blue-700"></span> Completed</div>
                        <div className="flex items-center gap-1 dark:text-white"><span className="w-3 h-3 rounded-full bg-[#FFED29]"></span> In Progress</div>
                        <div className="flex items-center gap-1 dark:text-white"><span className="w-3 h-3 rounded-full bg-[#e32417]"></span> Pending</div>
                    </div>
                </div>

                {/* Work History */}
                <div className="bg-base-100 p-4 rounded-xl shadow">
                    <h2 className="font-semibold mb-4 dark:text-white">Work History</h2>
                    <Bar data={barData} options={barOptions} />
                </div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Scheme Analytics */}
                <div className="col-span-1 bg-base-100 p-4 rounded-xl shadow">
                    <h2 className="font-semibold mb-4">Scheme Analytics</h2>
                    <div className="flex justify-between items-end h-24">
                        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                            <div key={i} className="text-center">
                                <div className={`w-6 mx-auto rounded-full ${i === 3 ? 'bg-blue-600 h-20' : 'bg-blue-200 h-14'}`}></div>
                                <span className="text-sm mt-1 block">{day}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Reminder */}
                <div className="bg-base-100 p-4 rounded-xl shadow">
                    <h2 className="font-semibold mb-4">Reminders</h2>
                    <p>Meeting with Arc Company</p>
                    <p className="text-sm text-blue-600">Time: 02:00 pm - 04:00 pm</p>
                    <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full flex items-center gap-2">
                        <PlayIcon className="h-5 w-5" /> Start Meeting
                    </button>
                </div>

                {/* Scheme List */}
                <div className="bg-base-100 p-4 rounded-xl shadow">
                    <h2 className="font-semibold mb-4">Schemes</h2>
                    <ul className="space-y-2 text-sm">
                        {[
                            'Develop API Endpoints',
                            'Onboarding Flow',
                            'Build Dashboard',
                            'Optimize Page Load',
                            'Cross-Browser Testing',
                        ].map((scheme, i) => (
                            <li key={i} className="border-b border-base-300 pb-1">{scheme}</li>
                        ))}
                    </ul>
                </div>

                {/* Time Tracker */}
                <div className="bg-base-100 p-4 rounded-xl shadow text-center">
                    <h2 className="font-semibold mb-4">Time Tracker</h2>
                    <div className="text-2xl font-bold mb-2">01:24:08</div>
                    <div className="flex justify-center gap-4">
                        <button className="bg-blue-600 text-white p-2 rounded-full">
                            <PlayIcon className="h-5 w-5" />
                        </button>
                        <button className="bg-red-500 text-white p-2 rounded-full">
                            <StopIcon className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
