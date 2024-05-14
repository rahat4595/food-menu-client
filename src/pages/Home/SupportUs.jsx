import { Link } from "react-router-dom";


const SupportUs = () => {
    return (
        <div>
            <section className="">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-8 lg:py-12 lg:flex-row lg:gap-5">
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src="https://i.ibb.co/TLyL4WY/Feeding-the-hungry-3-1024x744.jpg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                           Support Our Fight Against Hunger!
                        </h1>
                        
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        
                        <Link to='/adds'>
                        <button className="text-xl font-semibold px-5 py-2 bg-black text-white rounded-md mt-10 relative overflow-hidden group">
                                    <span className="absolute inset-0 bg-[#23BE0A] duration-300 transition-transform group-hover:translate-x-full"></span>
                                    <span className="relative z-10">Donate Food</span>
                                </button>
                        </Link>

                                
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SupportUs;