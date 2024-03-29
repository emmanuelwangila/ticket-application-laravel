import NavLink from "@/Components/NavLink";
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import Events from "./Events";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function createReservations({ auth }) {
    const [formData, setFormData] = useState({
        event_id: "",
        type: "VIP",
        user_id: "",
        num_tickets: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedFormData = { ...formData, user_id: auth.user.id };
        Inertia.post("/saved", updatedFormData)
            .then(() => {
                console.log("Data posted successfully!");
                // You can redirect or perform any other action upon successful submission
            })
            .catch((error) => {
                console.error("Error posting data:", error);
                // Handle error, show error message, etc.
            });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <NavLink
                className="m-2 border rounde-md p-3 bg-blue-500 text-white  rounded-md "
                href={route("dashboard")}
                active={route().current("dashboard")}
            >
                {" "}
                Back to Dashboard{" "}
            </NavLink>
            <Head title="Create-Reservations" />

            <div className="p-2 min-h-screen ">
                <div className="max-w-7xl  mx-auto sm:px-6 lg:px-8">
                    <div className="text-teal-600 border  text-3xl font-sans flex justify-center items-center">
                        {" "}
                        Create your Reservations{" "}
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white md:flex-warp sm:flex-wrap rounded-md lg:grid grid-cols-2 m-2 p-3   flex-col justify-center items-center "
                    >
                        <label className="text-blue-500 font-bold m-1 p-2">
                            Title:
                            <input
                                type="text"
                                name="title"
                                className="rounded-md m-2 p-1"
                                value={formData.title}
                                onChange={handleChange}
                            />
                        </label>

                        {/* <label className="text-blue-500 font-bold">
                            Select Event:
                            <select
                                className="rounded-md m-2 p-1"
                                name="event_id"
                                value={formData.event_id}
                                onChange={handleChange}
                            >
                                <option value="">Select an Event</option>
                                {events.map((event) => (
                                    <option key={event.id} value={event.id}>
                                        {event.title}
                                    </option>
                                ))}
                            </select>
                        </label> */}

                        <label className="text-blue-500 font-bolld m-2 ">
                            Ticket Type:
                            <select
                                id="ticket"
                                className="rounded-md m-2 p-1"
                                name="type"
                                value={formData.type}
                                onChange={handleChange}
                            >
                                <option value="Regular">Regular</option>
                                {/* <option value="Normal">Normal</option> */}
                            </select>
                        </label>

                        <label className="text-blue-500 font-bold">
                            Number of Tickets:
                            <input
                                type="number"
                                min={1}
                                max={5}
                                className="m-1 p-2 rounded-md "
                                name="num_tickets"
                                value={formData.num_tickets}
                                onChange={handleChange}
                            />
                        </label>
                        <label className="text-blue-500 font-bold ">
                            Ticket Price VIP:
                            <input
                                type="number"
                                className="m-1 p-2 rounded-md "
                                name="ticket_price_VIP"
                                value={formData.ticket_price_VIP}
                                onChange={handleChange}
                            />
                        </label>
                        <label className="text-blue-500 font-bold ">
                            Ticket Price Regular:
                            <input
                                type="number"
                                className="m-1 p-2 rounded-md"
                                name="ticket_price_Regular"
                                value={formData.ticket_price_Regular}
                                onChange={handleChange}
                            />
                        </label>
                        <div className="flex justify-center items-center">
                            <button
                                className="bg-blue-500 m-3 p-3 flex justify-center text-white font-bold rounded-md w-[70%] "
                                type="submit"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
