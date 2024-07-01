import logo from '../assets/images/logo.png'
import React from 'react'

const Navbar = (props) => {
    const {
        button_home_name = "Casa",
        button_jobs_name = "Trabajos",
        button_add_job_name = "Añadir trabajo",
        logo_title = "React Trabajos" } = props;

    return (
        <nav className="bg-indigo-700 border-b border-indigo-500">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div
                        className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
                    >
                        {/* <!-- Logo --> */}
                        <a className="flex flex-shrink-0 items-center mr-4" href="/index.html">
                            <img
                                className="h-10 w-auto"
                                src={logo}
                                alt="React Jobs"
                            />
                            <span className="hidden md:block text-white text-2xl font-bold ml-2"
                            >{logo_title}</span
                            >
                        </a>
                        <div className="md:ml-auto">
                            <div className="flex space-x-2">
                                <a
                                    href="/index.html"
                                    className="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                                >{button_home_name}</a
                                >
                                <a
                                    href="/jobs.html"
                                    className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                                >{button_jobs_name}</a
                                >
                                <a
                                    href="/add-job.html"
                                    className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                                >{button_add_job_name}</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar