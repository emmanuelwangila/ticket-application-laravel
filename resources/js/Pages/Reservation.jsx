import { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import NavLink from "@/Components/NavLink";

import { Inertia } from "@inertiajs/inertia";

import React from "react";

function Reservation({ auth }) {
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
                    Create a Reservation
                </div>
            </NavLink>

            <div>Reservations</div>
        </AuthenticatedLayout>
    );
}

export default Reservation;
