import { Link } from "react-router-dom";
import {
    HomeIcon,
    DocumentTextIcon,
    CubeIcon,
    QuestionMarkCircleIcon,
    UserGroupIcon,
    ChartBarIcon,
    ChevronDownIcon,
    WrenchScrewdriverIcon,
    IdentificationIcon,
    BuildingOffice2Icon,
    ClipboardDocumentIcon,
    BuildingLibraryIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const Sidebar = () => {
    const [isUsersOpen, setIsUsersOpen] = useState(false);
    const [isReportOpen, setIsReportOpen] = useState(false);

    return (
        <aside className="fixed top-0 left-0 h-full w-20 lg:w-72 bg-base-200 text-base-content shadow-lg z-50 transition-all duration-300 overflow-y-auto">
            <nav className="p-4 space-y-2">

                {/* Dashboard */}
                <Link
                    to="/dashboard"
                    className="btn btn-block justify-start gap-4 bg-base-100 hover:bg-base-300"
                >
                    <span className="flex items-center gap-4">
                        <HomeIcon className="h-6 w-6" />
                        <span className="hidden lg:inline">Dashboard</span>
                    </span>
                </Link>

                {/* Scheme */}
                <Link
                    to="/scheme"
                    className="btn btn-block justify-start gap-4 bg-base-100 hover:bg-base-300"
                >
                    <span className="flex items-center gap-4">
                        <DocumentTextIcon className="h-6 w-6" />
                        <span className="hidden lg:inline">Scheme</span>
                    </span>
                </Link>

                {/* Assets */}
                <Link
                    to="/assets"
                    className="btn btn-block justify-start gap-4 bg-base-100 hover:bg-base-300"
                >
                    <span className="flex items-center gap-4">
                        <CubeIcon className="h-6 w-6" />
                        <span className="hidden lg:inline">Assets</span>
                    </span>
                </Link>

                {/* Questions */}
                <Link
                    to="/questions"
                    className="btn btn-block justify-start gap-4 bg-base-100 hover:bg-base-300"
                >
                    <span className="flex items-center gap-4">
                        <QuestionMarkCircleIcon className="h-6 w-6" />
                        <span className="hidden lg:inline">Questions</span>
                    </span>
                </Link>

                {/* Users Dropdown */}
                <div>
                    <button
                        onClick={() => setIsUsersOpen(!isUsersOpen)}
                        className="btn btn-block justify-between bg-base-100 hover:bg-base-300"
                    >
                        <span className="flex items-center gap-4">
                            <UserGroupIcon className="h-6 w-6" />
                            <span className="hidden lg:inline">Users</span>
                        </span>
                        <ChevronDownIcon
                            className={`h-5 w-5 hidden lg:block transition-transform ${isUsersOpen ? "rotate-180" : ""
                                }`}
                        />
                    </button>

                    {isUsersOpen && (
                        <ul className="ml-6 mt-2 space-y-2">
                            <li>
                                <Link
                                    to="/users/engineer"
                                    className="btn btn-sm btn-block justify-start gap-2 bg-base-100 hover:bg-base-300"
                                >
                                    <WrenchScrewdriverIcon className="h-4 w-4" />
                                    <span className="hidden lg:inline">Engineer</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/users/zpmember"
                                    className="btn btn-sm btn-block justify-start gap-2 bg-base-100 hover:bg-base-300"
                                >
                                    <IdentificationIcon className="h-4 w-4" />
                                    <span className="hidden lg:inline">ZP Member</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/users/block-incharge"
                                    className="btn btn-sm btn-block justify-start gap-2 bg-base-100 hover:bg-base-300"
                                >
                                    <BuildingOffice2Icon className="h-4 w-4" />
                                    <span className="hidden lg:inline">Block In-Charge</span>
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>

                {/* Report Dropdown */}
                <div>
                    <button
                        onClick={() => setIsReportOpen(!isReportOpen)}
                        className="btn btn-block justify-between bg-base-100 hover:bg-base-300"
                    >
                        <span className="flex items-center gap-4">
                            <ChartBarIcon className="h-6 w-6" />
                            <span className="hidden lg:inline">Report</span>
                        </span>
                        <ChevronDownIcon
                            className={`h-5 w-5 hidden lg:block transition-transform ${isReportOpen ? "rotate-180" : ""
                                }`}
                        />
                    </button>

                    {isReportOpen && (
                        <ul className="ml-6 mt-2 space-y-2">
                            <li>
                                <Link
                                    to="/report/survey"
                                    className="btn btn-sm btn-block justify-start gap-2 bg-base-100 hover:bg-base-300"
                                >
                                    <ClipboardDocumentIcon className="h-4 w-4" />
                                    <span className="hidden lg:inline">Survey</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/report/block"
                                    className="btn btn-sm btn-block justify-start gap-2 bg-base-100 hover:bg-base-300"
                                >
                                    <BuildingLibraryIcon className="h-4 w-4" />
                                    <span className="hidden lg:inline">Block</span>
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>
            </nav>
        </aside>
    );
};

export default Sidebar;
