import NavLink from "@/Components/NavLink";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Events({ auth, events }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-teal-600 font-sans leading-tight">
                    Events
                </h2>
            }
        >
            <div className="bg-gray-300 min-h-screen">
                <div className="container mx-auto px-4 sm:px-8">
                    <div className="py-8 bg-gray-300">
                        <h2 className="text-2xl font-semibold leading-tight">
                            Events ({events.length})
                        </h2>

                        <NavLink
                            href={route("createevents")}
                            active={route().current("createevents")}
                            className="text-white font-bold m-3 "
                        >
                            <div className="bg-blue-500 rounded-md m-1 p-3 text-white w-[80%] h-[40%] ">
                                Create a New Event
                            </div>
                        </NavLink>

                        <div className="my-2 flex sm:flex-row flex-col">
                            {/* Add search and pagination controls here */}
                        </div>
                        <div className="-mx-4 sm:-mx-8  px-4 sm:px-8 py-4 overflow-x-auto">
                            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                <table className="min-w-full leading-normal">
                                    <thead>
                                        <tr>
                                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Event Name
                                            </th>
                                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"></th>
                                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Created at
                                            </th>
                                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Email
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {events.map((event) => (
                                            <tr key={event.id}>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0 w-10 h-10">
                                                            <svg
                                                                className="w-full h-full rounded-full"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            >
                                                                <circle
                                                                    cx="12"
                                                                    cy="12"
                                                                    r="10"
                                                                ></circle>
                                                                <path d="M16 16s-1.5-2-4-2-4 2-4 2"></path>
                                                                <circle
                                                                    cx="12"
                                                                    cy="12"
                                                                    r="3"
                                                                ></circle>
                                                            </svg>
                                                        </div>
                                                        <div className="ml-3">
                                                            <p className="text-blue-500 whitespace-no-wrap">
                                                                {event.name}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-blue-500 whitespace-no-wrap">
                                                        {event.description}
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {event.created_at}
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    {event.address}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
