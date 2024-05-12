import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/Context";

const ReqFoods = () => {
    const { user } = useContext(AuthContext);
    const [reqFood, setReqFood] = useState([]);
    const url = `http://localhost:5000/reqFood/${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setReqFood(data));
    }, []);

   

    return (
        <div>
           

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
                {reqFood.map((food, index) => (
                    <div key={index} className="card bg-base-100 shadow-xl">
                        <figure>
                            <img src={food.photo} alt={food.foodName} />
                        </figure>
                        <div className="card-body">
                            
                            <p>Food Name: {food.foodName}</p>
                            <p>Quantity: {food._id}</p>
                            <p>Expire Date: {food.date}</p>
                            <p>Pickup Location: {food.location}</p>
                            <p>Donator Email: {food.donatorEmail}</p>
                            <p>Donator Name: {food.donatorName}</p>
                            <p>User Email: {food.userEmail}</p>
                            <p>Additional Notes: {food.notes}</p>
                            
                            <p>Requested Date: {food.requestDate}</p>
                           
                            {/* Add more properties here as needed */}
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReqFoods;
