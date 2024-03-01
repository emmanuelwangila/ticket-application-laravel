import { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import NavLink from "@/Components/NavLink";
// import CreateReservations from "./CreateReservations";

import { Inertia } from "@inertiajs/inertia";

export default function Events({ auth, events }) {
    const [isDeleting, setIsDeleting] = useState(null);

    const handleDelete = (eventId) => {
        if (confirm("Are you sure you want to delete this event?")) {
            setIsDeleting(eventId);
            Inertia.get(`/delete/${eventId}`);
        }
    };

    const handleEdit = (eventId) => {
        // Assuming you're using Inertia.js, you can navigate to the edit route like this
        // Replace '/edit/' with the appropriate route for editing events in your application
        // This will navigate to the edit page for the specific event
        Inertia.visit(`/edit/${eventId}`);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-teal-600 font-sans leading-tight">
                    Events
                </h2>
            }
        >
            {/* <CreateReservations auth={auth} events={events} /> */}
            <div className="bg-gray-300 min-h-screen">
                <div className="container mx-auto px-4 sm:px-8">
                    <div className="py-8 bg-gray-300  ">
                        <h2 className="text-2xl text-teal-600 font-semibold leading-tight">
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
                            <div className="inline-block min-w-full shadow rounded-md  overflow-hidden">
                                <table className="min-w-full leading-normal">
                                    <thead>
                                        <tr>
                                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"></th>
                                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Event Description
                                            </th>
                                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Ticket Type
                                            </th>
                                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Event Address
                                            </th>
                                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {events.map((event) => (
                                            <tr key={event.id}>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0 w-10 h-10"></div>
                                                        <div className="ml-3">
                                                            <p className="text-blue-500 whitespace-no-wrap"></p>
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
                                                        {event.type}
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    {event.address}
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <button
                                                        className={`text-white bg-green-500 m-1 p-3 rounded-md  ${
                                                            isDeleting ===
                                                            event.id
                                                                ? "opacity-50 cursor-not-allowed"
                                                                : ""
                                                        }`}
                                                        onClick={() =>
                                                            handleEdit(event.id)
                                                        }
                                                        disabled={
                                                            isDeleting ===
                                                            event.id
                                                        }
                                                    >
                                                        {isDeleting === event.id
                                                            ? "Editing..."
                                                            : "Edit"}
                                                    </button>
                                                    <button
                                                        className={`text-white border m-1 p-2 rounded-md  bg-red-500  ${
                                                            isDeleting ===
                                                            event.id
                                                                ? "opacity-50 cursor-not-allowed"
                                                                : ""
                                                        }`}
                                                        onClick={() =>
                                                            handleDelete(
                                                                event.id
                                                            )
                                                        }
                                                        disabled={
                                                            isDeleting ===
                                                            event.id
                                                        }
                                                    >
                                                        {isDeleting === event.id
                                                            ? "Deleting..."
                                                            : "Delete"}
                                                    </button>
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
