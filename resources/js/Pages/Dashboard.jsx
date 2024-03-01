import NavLink from "@/Components/NavLink";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth, events, users }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-teal-600 font-sans leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12 bg-gray-100">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <h2 className="text-teal-600 text-2xl font-bold m-3 ">
                        ADMIN DASHBOARD
                    </h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {/* Card 1: Total Users */}
                        <NavLink
                            href={route("events")}
                            active={route().current("events")}
                        >
                            <div className="bg-white overflow-hidden shadow-sm rounded-lg">
                                <div className="p-6 bg-white">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                                            <svg
                                                className="h-6 w-6 text-white"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                ></path>
                                            </svg>
                                        </div>
                                        <div className="ml-4 bg-white">
                                            <p className="text-lg leading-6 font-medium text-gray-900">
                                                Events
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </NavLink>

                        {/* Card 2: Total Revenue */}
                        <NavLink
                            href={route("users")}
                            active={route().current("users")}
                        >
                            <div className="bg-white overflow-hidden shadow-sm rounded-lg">
                                <div className="p-6 bg-white">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 bg-yellow-500 rounded-md p-3">
                                            <svg
                                                className="h-6 w-6 text-white"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                ></path>
                                            </svg>
                                        </div>
                                        <div className="ml-4 bg-white">
                                            <p className="text-lg leading-6 font-medium text-gray-900">
                                                Users
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </NavLink>

                        <NavLink
                            href={route("reservations")}
                            active={route().current("reservations")}
                        >
                            <div className="bg-white overflow-hidden shadow-sm rounded-lg">
                                <div className="p-6 bg-white">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                                            <svg
                                                className="h-6 w-6 text-white"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                ></path>
                                            </svg>
                                        </div>
                                        <div className="ml-4 bg-white">
                                            <p className="text-lg leading-6 font-medium text-gray-900">
                                                Reservations
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
