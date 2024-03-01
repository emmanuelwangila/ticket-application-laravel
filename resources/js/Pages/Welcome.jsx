import { Link, Head } from "@inertiajs/react";

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Event Application System" />
            <div className="min-h-screen border border-gray-300 m-4 p-5 rounded-md  bg-gradient-to-br bg-slate-200 flex justify-center items-center">
                <div className="max-w-md mx-auto p-4 bg-blue-500 rounded-md">
                    <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-4">
                        Welcome to Event Application System
                    </h1>
                    <p className="text-lg text-gray-800 dark:text-gray-300 mb-8">
                        Your go-to platform for managing events seamlessly.
                    </p>
                    <div className="flex gap-4 justify-end">
                        {auth.user ? (
                            <Link
                                href={route("dashboard")}
                                className="btn-primary mr-4"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route("login")}
                                    className="text-white font-bold"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route("register")}
                                    className="text-white font-bold "
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
