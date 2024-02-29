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
            <NavLink
                className="m-2 border rounde-md p-3 bg-blue-500 text-white  rounded-md "
                href={route("createevents")}
                active={route().current("createevents")}
            >
                {" "}
                Create New Event{" "}
            </NavLink>

            <div className="bg-slate-200">
                {events.map((event) => (
                    <div key={event.id} className="">
                        <div className=" text-blue-500 rounded-md">
                            Name: {event.title}
                        </div>
                        <div className=" text-blue-500 rounded-md">
                            Email: {event.description}
                        </div>
                        <div className=" rounded-md"></div>
                    </div>
                ))}
            </div>

            <Head title="Events" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-blue-300 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            Here are your events
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
