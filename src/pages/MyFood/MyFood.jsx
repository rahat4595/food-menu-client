import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/Context";
import { Link } from "react-router-dom";


const MyFood = () => {

    const {user} = useContext(AuthContext);
    console.log(user);
    const [lists, setLists] = useState([]);

    useEffect(() =>{
        fetch(`http://localhost:5000/myList/${user?.email}`)
        .then(res => res.json())
            .then(data => {
                setLists(data);
                
            });
    } ,[user])

    return (
        <div>


            <div className="overflow-x-auto max-w-7xl mx-auto mt-5">
                <table className="table-auto w-full">
                    <thead>
                        <tr className="text-xl">
                            <th className="px-4 py-2"></th>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Quantity</th>
                            <th className="px-4 py-2">Expire Date</th>
                            <th className="px-4 py-2">Location</th>
                            <th className="px-4 py-2">Update</th> {/* Add this column for the button */}
                            <th className="px-4 py-2">Delete</th> {/* Add this column for the button */}
                        </tr>
                    </thead>
                    <tbody className="text-xl">
                        {lists.map((list, index) => (
                            <tr key={list._id}>
                                <td className="border px-4 py-4">{index + 1}</td>
                                <td className="border px-4 py-2">{list.foodName}</td>
                                <td className="border px-4 py-2">{list.quantity}</td>
                                <td className="border px-4 py-2">{list.date}</td>
                                <td className="border px-4 py-2">{list.location}</td>
                                <td className="border px-4 py-2">
                                    <Link to={`/updateFood/${list._id}`} className="text-blue-500 hover:underline">Update</Link>
                                </td>
                                <td className="border px-4 py-2">
                                    <Link className="text-blue-500 hover:underline">Delete</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyFood;