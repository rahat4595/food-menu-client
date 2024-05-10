import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <section className="flex items-center min-h-screen p-16 bg-gray-900 dark:bg-gray-50 dark:text-gray-800 text-gray-100">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl text-gray-600 dark:text-gray-400">
                            <span className="sr-only">Error</span>404
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldnt find this page.</p>
                        <p className="mt-4 mb-8 text-gray-400 dark:text-gray-600">This is because of bad network or you have come to the wrong place</p>
                        <Link t0='/'>
                            <button rel="noopener noreferrer" href="#" className="px-8 py-3 font-semibold rounded bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50 duration-300 hover:scale-90">Back to homepage</button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;