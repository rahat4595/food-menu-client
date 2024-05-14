import { Link, useLoaderData } from "react-router-dom";
import Foods from "./Foods";
import Banner from "./Banner/Banner";
import { motion } from "framer-motion";
import Works from "./Works";
import SupportUs from "./SupportUs";
import { Bounce,  Slide } from "react-awesome-reveal";



const Home = () => {
    const foods = useLoaderData();

    // Sort foods based on quantity in descending order
    const sortedFoods = [...foods].sort((a, b) => b.quantity - a.quantity);

    // Take the first six items from the sorted array
    const topSixFoods = sortedFoods.slice(0, 6);

    return (

        <motion.div initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}>
                <div>

               
            {/* banner section */}
            <div className="max-w-7xl mx-auto mt-10 p-5 ">
                <Banner></Banner>
            </div>

            <div className="max-w-7xl mx-auto mt-10">
                <h2 className="text-4xl font-bold text-center ">Featured Foods</h2>
                <p className="text-center text-lg mt-10 px-5 lg:px-52">Discover Our Featured Foods: A Bounty of Generous Offerings, Each Dish a Symbol of Hope and Community Support.</p>
            </div>

            {/* Render Foods component for each food item */}
            <div className="max-w-7xl mx-auto md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 ">
                {topSixFoods.map((food, index) => (
                    <Foods key={index} food={food} />
                ))}


            </div>
            {/* Show all foods button */}
            <div className="max-w-7xl mx-auto flex my-5 justify-center">
                <Link to='/allFoods'>
                    <button className="text-xl font-semibold px-5 py-2 bg-black text-white rounded-md mt-10 relative overflow-hidden group">
                        <span className="absolute inset-0 bg-[#23BE0A] duration-300 transition-transform group-hover:translate-x-full"></span>
                        <span className="relative z-10">Show all Foods</span>
                    </button>
                </Link>

            </div>

            {/* Our Works */}
            <div className="max-w-7xl mx-auto mt-10">
               <Bounce triggerOnce> <h2 className="text-4xl font-bold text-center ">Our Works</h2>
                <p className="text-center text-lg mt-10 px-5 lg:px-52">Discover Our Culinary Contributions
                    Explore the Heartfelt Efforts Behind Our Food Donations and help us more by donating.</p></Bounce>
            </div>

           <Slide triggerOnce>
           <div className="max-w-7xl mx-auto">
                <Works></Works>
            </div>
           </Slide>

            {/* support us */}

            <div className="max-w-7xl mx-auto mt-10">
                <h2 className="text-4xl font-bold text-center ">Support Us</h2>
                <p className="text-center text-lg mt-10 px-5 lg:px-52">Discover Our Culinary Contributions
                    Explore the Heartfelt Efforts Behind Our Food Donations and help us more by donating.</p>
            </div>


            <div className="max-w-7xl mx-auto">
            <SupportUs></SupportUs>
            </div>


            </div>
        </motion.div>
        
    );
};

export default Home;
