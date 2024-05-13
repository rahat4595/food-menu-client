import { useContext, useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/Context";
import { motion } from "framer-motion";

const AllFood = () => {
    const foods = useLoaderData();
    const { user } = useContext(AuthContext);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("date_asc"); // Default sort by expiration date
    const [layout, setLayout] = useState("grid-cols-3"); // Default layout with 3 columns

    // Filter foods based on search query
    const filteredFoods = foods.filter(food =>
        food.foodName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Sort filtered foods based on sorting option
    const handleChangeSort = () => {
        // Toggle between sorting options
        if (sortBy === "date_asc") {
            setSortBy("date_desc");
        } else {
            setSortBy("date_asc");
        }
    };


    const sortedFoods = [...filteredFoods].sort((a, b) => {
        if (sortBy === "date_asc") {
            return new Date(a.date) - new Date(b.date);
        } else if (sortBy === "date_desc") {
            return new Date(b.date) - new Date(a.date);
        }
        return 0; // Default to no sorting
    });

    // Update foods when sort or search changes
    useEffect(() => {
        // If search or sort changes, re-filter and re-sort foods
        // No need to set state variables for sorted or filtered foods as they're derived state
    }, [searchQuery, sortBy]);

    const handleChangeLayout = () => {
        // Toggle between grid-cols-3 and grid-cols-2
        setLayout(layout === "grid-cols-3" ? "grid-cols-2" : "grid-cols-3");
    };

    return (
        <motion.div initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 1, opacity: 1 }}
            transition={{ duration: 1.2 }} className="max-w-7xl  mx-auto">
            <h2>foods: {sortedFoods.length}</h2>

            {/* Search input */}
            <input
                type="text"
                placeholder="Search by food name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring focus:border-blue-300"
            />

            {/* Sort select */}
            <select
                value={sortBy}
                onChange={handleChangeSort}
                className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring focus:border-blue-300"
            >

                <option value="date_asc">Sort by Expire Date (Ascending)</option>
                <option value="date_desc">Sort by Expire Date (Descending)</option>
            </select>

            {/* Change layout button */}
            <button onClick={handleChangeLayout} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                Change Layout
            </button>

            {/* Display sorted and filtered foods */}
            <div className={`grid ${layout} gap-5 p-5`}>
                {sortedFoods.map((food, index) => (
                    <div key={index} className="card bg-base-100 shadow-xl">
                        <figure>
                            <img src={food.photo} alt={food.foodName} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                <p>{food.donatorName}</p>
                                <img src={food.donatorPhoto} alt="" style={{ borderRadius: "50%", width: "50px", height: "50px" }} />
                            </h2>
                            <p>Food Name: {food.foodName}</p>
                            <p>Quantity: {food.quantity}</p>
                            <p>Expire Date: {food.date}</p>
                            <p>Pickup Location: {food.location}</p>
                            <p>Status: {food.status}</p>
                            <p>Notes: {food.notes}</p>
                            {/* Add more properties here as needed */}

                            <Link to={`/food-details/${food._id}`}>
                                <button className="text-xl font-semibold px-5 py-2 bg-black text-white rounded-md mt-10 relative overflow-hidden group">
                                    <span className="absolute inset-0 bg-[#23BE0A] duration-300 transition-transform group-hover:translate-x-full"></span>
                                    <span className="relative z-10">View Details</span>
                                </button>
                            </Link>


                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default AllFood;
