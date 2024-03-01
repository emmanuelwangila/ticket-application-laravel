import { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import NavLink from "@/Components/NavLink";

import { Inertia } from "@inertiajs/inertia";

import React from "react";

function Reservation({ auth, reservations }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-teal-600 font-sans leading-tight">
                    Events
                </h2>
            }
        >
            <NavLink
                href={route("createreservations")}
                active={route().current("createreservations")}
                className="text-white font-bold m-3 "
            >
                <div className="bg-blue-500 rounded-md w-[60%] h-[20%] text-white m-2 p-3 ">
                    Book a Reservation
                </div>
            </NavLink>

            <div className="text-teal-600 font-bold ">Reservations</div>
            <table className="min-w-full leading-normal">
                <thead>
                    <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"></th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Ticket Type
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"></th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Number of Tickets
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {reservations.map((reservation) => (
                        <tr key={reservation.id}>
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
                                    {reservation.type}
                                </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">
                                    {/* {reservation.u} */}
                                </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                {reservation.num_tickets}
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                {/* <button
                                    className={`text-white bg-green-500 m-1 p-3 rounded-md  ${
                                        isDeleting === e.id
                                            ? "opacity-50 cursor-not-allowed"
                                            : ""
                                    }`}
                                    onClick={() => handleEdit(event.id)}
                                    disabled={isDeleting === event.id}
                                >
                                    {isDeleting === event.id
                                        ? "Editing..."
                                        : "Edit"}
                                </button> */}
                                {/* <button
                                    className={`text-white border m-1 p-2 rounded-md  bg-red-500  ${
                                        isDeleting === event.id
                                            ? "opacity-50 cursor-not-allowed"
                                            : ""
                                    }`}
                                    onClick={() => handleDelete(event.id)}
                                    disabled={isDeleting === event.id}
                                >
                                    {isDeleting === event.id
                                        ? "Deleting..."
                                        : "Delete"}
                                </button> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </AuthenticatedLayout>
    );
}

export default Reservation;
