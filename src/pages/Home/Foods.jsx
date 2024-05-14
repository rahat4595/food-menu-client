import { useContext } from "react";
import { AuthContext } from "../../providers/Context";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MdOutlineLocationOn } from "react-icons/md";
import { GrNotes } from "react-icons/gr";

const Foods = ({ food }) => {

    const { user } = useContext(AuthContext);

    const { _id, foodName, photo, quantity, date, location, status, notes, donatorName, donatorPhoto } = food
    return (
        <motion.div initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}>
            <div className="card  w-full bg-base-100 shadow-xl">
                <figure>
                    <img className="duration-300 hover:scale-105" src={photo} alt={foodName} />
                </figure>
                <div className="card-body">
                <div className="flex items-center mb-2">
                        <img src={donatorPhoto} alt="" className="w-10 h-10 rounded-full mr-2" />
                        <p className="text-gray-800 font-semibold">{donatorName}</p>
                    </div>
                    <div className="flex items-center justify-between py-4">
                        <h2 className="text-xl font-bold text-gray-800">{foodName}</h2>
                        <span className='px-2 py-1 rounded-full bg-[#23BE0A]  text-white text-sm font-semibold'>{status}</span>
                    </div>
                    
                    <div className="flex justify-between mb-4">
                        <p className="text-gray-800 font-semibold">Quantity: {quantity}</p>
                        <span className="text-gray-800 font-semibold">Expire Date: {date}</span>
                    </div>
                    <p className="text-gray-800 font-semibold flex gap-3"><MdOutlineLocationOn className="mt-1" /> {location}</p>
                    <p className="text-gray-800 font-semibold flex gap-3"><GrNotes className="mt-1" /> {notes}</p>
                    {/* Add more properties here as needed */}

                    <Link to={`/food-details/${_id}`} className="text-xl text-center font-semibold px-5 py-2 bg-black text-white rounded-md mt-10 relative overflow-hidden group">
                        
                            <span className="absolute inset-0 bg-[#23BE0A] duration-300 transition-transform group-hover:translate-x-full"></span>
                            <span className="relative z-10">View Details</span>
                       
                    </Link>


                </div>
            </div>
        </motion.div>
    );
};

export default Foods;