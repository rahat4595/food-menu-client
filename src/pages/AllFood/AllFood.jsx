import { useContext, useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/Context";

const AllFood = () => {
    const foods = useLoaderData();
    const { user } = useContext(AuthContext);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("date"); // Default sort by expiration date

    // Filter foods based on search query
    const filteredFoods = foods.filter(food =>
        food.foodName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Sort filtered foods based on sorting option
    // Sort filtered foods based on sorting option
    const sortedFoods = [...filteredFoods].sort((a, b) => {
        if (sortBy === "date") {
            return new Date(a.date) - new Date(b.date);
        }
        // Add more sorting options if needed
        return 0; // Default to no sorting
    });

    // Update foods when sort or search changes
    useEffect(() => {
        // If search or sort changes, re-filter and re-sort foods
        // No need to set state variables for sorted or filtered foods as they're derived state
    }, [searchQuery, sortBy]);

    return (
        <div className="max-w-7xl mx-auto">
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
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring focus:border-blue-300"
            >
                <option value="date">Sort by Expire Date</option>
                {/* Add more sorting options if needed */}
            </select>

            {/* Display sorted and filtered foods */}
            <div className="grid grid-cols-3 gap-4">
                {sortedFoods.map((food, index) => (
                    <div key={index} className="card bg-base-100 shadow-xl">
                        <figure>
                            <img src={food.photo} alt={food.foodName} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                <h1>{user?.displayName}</h1>
                                <img src={user?.photoURL} alt="" style={{ borderRadius: "50%", width: "50px", height: "50px" }} />
                            </h2>
                            <p>Food Name: {food.foodName}</p>
                            <p>Quantity: {food.quantity}</p>
                            <p>Expire Date: {food.date}</p>
                            <p>Pickup Location: {food.location}</p>
                            <p>Status: {food.status}</p>
                            <p>Notes: {food.notes}</p>
                            {/* Add more properties here as needed */}

                            <button className="text-xl font-semibold px-5 py-2 bg-black text-white rounded-md mt-10 relative overflow-hidden group">
                                <span className="absolute inset-0 bg-[#23BE0A] duration-300 transition-transform group-hover:translate-x-full"></span>
                                <span className="relative z-10">View Details</span>
                            </button>


                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllFood;
