import { useLoaderData } from "react-router-dom";
import Foods from "./Foods";

const Home = () => {
    const foods = useLoaderData();

      // Sort foods based on quantity in descending order
      const sortedFoods = [...foods].sort((a, b) => b.quantity - a.quantity);

      // Take the first six items from the sorted array
      const topSixFoods = sortedFoods.slice(0, 6);

    return (
        <div>
            <div className="max-w-7xl mx-auto mt-10">
                <h2 className="text-4xl font-bold text-center ">Featured Foods</h2>
                <p className="text-center text-lg mt-10 px-5 lg:px-52">Explore your favourite arts and crafts categories and get yourself a inspiration to go beyond about artisticts</p>
            </div>
            
            {/* Render Foods component for each food item */}
            <div className="max-w-7xl mx-auto md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 ">
                {topSixFoods.map((food, index) => (
                    <Foods key={index} food={food} />
                ))}
            </div>
        </div>
    );
};

export default Home;
