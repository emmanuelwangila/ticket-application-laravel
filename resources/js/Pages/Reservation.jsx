import { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import NavLink from "@/Components/NavLink";
// import CreateReservations from "./CreateReservations";

import { Inertia } from "@inertiajs/inertia";

export default function Reservations({ auth, reservations }) {
    const [isDeleting, setIsDeleting] = useState(null);

    const handleDelete = (reservationId) => {
        if (confirm("Are you sure you want to delete this event?")) {
            setIsDeleting(eventId);
            Inertia.get(`/delete/${reservationId}`);
        }
    };

    const handleEdit = (reservationId) => {
        Inertia.visit(`/edit/${reservationId}`);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-teal-600 font-sans leading-tight">
                    Reservations
                </h2>
            }
        >
            <div className="bg-gray-300 min-h-screen">
                <div className="container mx-auto px-4 sm:px-8">
                    <div className="py-8 bg-gray-300">
                        <h2 className="text-2xl uppercase text-teal-600 font-semibold leading-tight">
                            Reservations{" "}
                            <span className="text-blue-500 font-bold">
                                [{reservations.length}]
                            </span>
                        </h2>

                        <NavLink
                            href={route("createreservations")}
                            active={route().current("createreservations")}
                            className="text-white font-bold m-3"
                        >
                            <div className="bg-blue-500 rounded-md m-1 p-3 text-white w-[80%] h-[40%]">
                                Book a Reservation
                            </div>
                        </NavLink>

                        <div className="my-2 flex sm:flex-row flex-col">
                            {/* Add search and pagination controls here */}
                        </div>
                        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                            <div className="inline-block min-w-full shadow rounded-md overflow-hidden">
                                <table className="min-w-full leading-normal">
                                    <thead>
                                        <tr className="bg-slate-200 m-1 p-2">
                                            <td></td>
                                            <td className="px-5 uppercase py-5 text-gray-500 font-bold  ">
                                                Ticket type
                                            </td>
                                            <td className="px-5 uppercase py-5 text-gray-500 font-bold  ">
                                                Number tickets
                                            </td>
                                            <td className="px-5 uppercase py-5 text-gray-500 font-bold  "></td>
                                            <td className="px-5 uppercase py-5 text-gray-500 font-bold  ">
                                                Actions
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {reservations.map((reservation) => (
                                            <tr key={reservation.id}>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <div className="flex items-center"></div>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-blue-500 whitespace-no-wrap">
                                                        {reservation.type}
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {
                                                            reservation.num_tickets
                                                        }
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    {/* Add event address here */}
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <button
                                                        className={`text-white bg-green-500 m-1 p-3 rounded-md ${
                                                            isDeleting ===
                                                            reservation.id
                                                                ? "opacity-50 cursor-not-allowed"
                                                                : ""
                                                        }`}
                                                        onClick={() =>
                                                            handleEdit(
                                                                reservation.id
                                                            )
                                                        }
                                                        disabled={
                                                            isDeleting ===
                                                            reservation.id
                                                        }
                                                    >
                                                        {isDeleting ===
                                                        reservation.id
                                                            ? "Editing..."
                                                            : "Edit"}
                                                    </button>
                                                    <button
                                                        className={`text-white border m-1 p-2 rounded-md bg-red-500 ${
                                                            isDeleting ===
                                                            reservation.id
                                                                ? "opacity-50 cursor-not-allowed"
                                                                : ""
                                                        }`}
                                                        onClick={() =>
                                                            handleDelete(
                                                                reservation.id
                                                            )
                                                        }
                                                        disabled={
                                                            isDeleting ===
                                                            reservation.id
                                                        }
                                                    >
                                                        {isDeleting ===
                                                        reservation.id
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
