import { Link, Head } from "@inertiajs/react";

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Event Application System" />
            <div className="min-h-screen bg-slate-200">
                <header className="bg-blue-500 rounded-md p-4 m-3  text-white py-4 px-8">
                    <h1 className="text-3xl font-bold">
                        Event Application System
                    </h1>
                </header>
                <div className="container mx-auto px-4 py-8">
                    <div className="max-w-md mx-auto p-4 bg-white rounded-md shadow-lg">
                        <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
                            Welcome to Event Application System
                        </h2>
                        <p className="text-lg text-gray-800 mb-6">
                            Your go-to platform for managing events seamlessly.
                        </p>
                        <p className="text-lg text-gray-800 mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Integer sit amet sem eget libero tristique
                            ultricies non nec risus. Vivamus pulvinar sapien
                            velit, eget consequat turpis ultrices vel.
                            Suspendisse potenti.
                        </p>
                        <p className="text-lg text-gray-800 mb-6">
                            Sed vestibulum augue ut finibus ultricies. Phasellus
                            non orci luctus, tempor elit a, finibus nisl. Donec
                            luctus elit vitae purus dapibus, vel suscipit lorem
                            tristique.
                        </p>
                        <div className="flex justify-end bg-gray-400 rounded-md gap-5 p-5  ">
                            {auth.user ? (
                                <div className="bg-blue-500 text-white m-1 p-3 rounded-md ">
                                    <Link
                                        href={route("dashboard")}
                                        className="btn-primary mr-4"
                                    >
                                        Dashboard
                                    </Link>
                                </div>
                            ) : (
                                <>
                                    <div>
                                        <Link
                                            href={route("login")}
                                            className="bg-blue-500 text-white rounded-md m-1 p-3   font-bold"
                                        >
                                            Log in
                                        </Link>
                                    </div>

                                    <div>
                                        <Link
                                            href={route("register")}
                                            className="bg-blue-500 text-white m-1 p-3 rounded-md  font-bold ml-4"
                                        >
                                            Register
                                        </Link>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <footer className="bg-white text-blue-700 font-bold py-4 px-8 text-center">
                    <p>
                        &copy; 2024 Event Application System. All rights
                        reserved. Emmanuel Wangila.
                    </p>
                </footer>
            </div>
        </>
    );
}
