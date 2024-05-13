import { useContext } from "react";
import { AuthContext } from "../../providers/Context";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
                    <h2 className="card-title">
                        <p>{donatorName}</p>
                        <img src={donatorPhoto} alt="" style={{ borderRadius: "50%", width: "50px", height: "50px" }} />
                    </h2>
                    <p>Food Name: {foodName}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Expire Date: {date}</p>
                    <p>Pickup Location: {location}</p>
                    <p>Status: {status}</p>
                    <p>Additional Notes: {notes}</p>
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