import NavLink from "@/Components/NavLink";
import { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function createEvents({ auth }) {
    const [formData, setFormData] = useState({
        title: "",
        slug: "",
        description: "",
        address: "",
        image: "",
        start_date: "",
        end_date: "",
        start_time: "",
        end_time: "",
        ticket_id: "",
        num_tickets: "",
        ticket_price_VIP: "",
        ticket_price_Regular: "",
        location_id: "",
        user_id: "",
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
        // Here you can send formData to your Laravel backend using fetch or axios
        console.log(formData);
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
            <Head title="Create-Events" />

            <div className="p-2 min-h-screen ">
                <div className="max-w-7xl  mx-auto sm:px-6 lg:px-8">
                    <div className="text-teal-600 border  text-3xl font-sans flex justify-center items-center">
                        {" "}
                        Create your events{" "}
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white rounded-md grid grid-cols-2 m-2 p-3   flex-col justify-center items-center "
                    >
                        <label className="text-blue-500 font-bold m-1 p-2  ">
                            Title:
                            <input
                                type="text"
                                name="title"
                                className="rounded-md m-2 p-1"
                                value={formData.title}
                                onChange={handleChange}
                            />
                        </label>
                        <label className="text-blue-500 font-bolld m-2 ">
                            Slug:
                            <input
                                type="text"
                                className="rounded-md m-2 p-1"
                                name="slug"
                                value={formData.slug}
                                onChange={handleChange}
                            />
                        </label>
                        <label className="text-blue-500 font-bold ">
                            Descri:
                            <textarea
                                name="description"
                                className="rounded-md m-1 p-2"
                                value={formData.description}
                                onChange={handleChange}
                            />
                        </label>
                        <label className="text-blue-500 font-bold">
                            Address:
                            <input
                                type="text"
                                name="address"
                                className="rounded-md m-1 p-2 "
                                value={formData.address}
                                onChange={handleChange}
                            />
                        </label>
                        <label className="text-blue-500 font-bold m-1 p-2 ">
                            Image:
                            <input
                                type="file"
                                className="m-1 p-2 rounded-md "
                                name="image"
                                value={formData.image}
                                onChange={handleChange}
                            />
                        </label>
                        <label className="text-blue-500 font-bold">
                            Start Date:
                            <input
                                type="date"
                                className="m-1 p-2 rounded-md "
                                name="start_date"
                                value={formData.start_date}
                                onChange={handleChange}
                            />
                        </label>
                        <label className="text-blue-500 font-bold">
                            End Date:
                            <input
                                type="date"
                                className="m-1 p-2 rounded-md "
                                name="end_date"
                                value={formData.end_date}
                                onChange={handleChange}
                            />
                        </label>

                        <label className="text-blue-500 font-bold">
                            Number of Tickets:
                            <input
                                type="number"
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
                                onSubmit={handleSubmit}
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
