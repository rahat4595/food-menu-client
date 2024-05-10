import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/Context";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


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
    } ,[user]);

    const handleDeleteCraft = (id) => {
        // Show SweetAlert confirmation dialog
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this craft!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                // If user confirms deletion, send DELETE request to server
                fetch(`http://localhost:5000/foods/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        // Update state to remove the deleted craft
                        setLists(lists.filter(craft => craft._id !== id));
                        // Show success message
                        Swal.fire(
                            'Deleted!',
                            'Your craft has been deleted.',
                            'success'
                        );
                    })
                    .catch(error => console.error('Error deleting craft:', error));
            }
        });
    };

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
                                    <button onClick={() => handleDeleteCraft(list._id)}  className="text-blue-500 hover:underline">Delete</button>
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