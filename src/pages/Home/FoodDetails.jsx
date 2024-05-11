import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/Context";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { Modal } from "flowbite-react";

const FoodDetails = () => {
    const food = useLoaderData();
    const { user } = useContext(AuthContext)
    const { _id, foodName, photo, quantity, date, location, status, notes, email, donatorName } = food;
    const reqDate = new Date().toISOString().slice(0, 10);
    const [openModal, setOpenModal] = useState(false);
    const onCloseModal = () => {
        setOpenModal(false);
      };

    const handleReqFood = event => {
        event.preventDefault();
        if (user?.email === email) return toast.error('you cant request food ')

        const form = event.target;

        const foodName = form.foodName.value;
        const foodID = form.foodID.value
        const date = form.date.value;
        const location = form.location.value;
        const photo = form.photo.value;
        const donatorEmail = form.donatorEmail.value;
        const donatorName = form.donatorName.value;
        const userEmail = user?.email
        const notes = form.notes.value;
        const requestDate = form.requestDate.value



        const reqFood = {
            foodName,
            foodID,
            date,
            location,
            photo,
            donatorEmail,
            donatorName,
            userEmail,
            notes,
            requestDate,
        }
        console.log('request food', reqFood);


        fetch("http://localhost:5000/reqFood", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(reqFood),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success",
                        text: "Food Request successfull",
                        icon: "success",
                        confirmButtonText: "Ok",
                    });
                }
            })
            .catch((error) => {
                console.error(error);
            });

    }





    return (
        <div>
            <div className="hero my-20 ">
                <div className="hero-content flex-col gap-10 md:gap-28 lg:flex-row">
                    <img src={photo} className=" rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{foodName}</h1>
                        <p className="py-6">For {quantity} people</p>
                        <div className="my-4">
                            <b className=' text-xl '>Expire date: {date}</b>
                        </div>

                        <button onClick={() => setOpenModal(true)}
                            className="text-xl font-semibold px-5 py-2 bg-black text-white rounded-md mt-10 relative overflow-hidden group">
                            <span className="absolute inset-0 bg-[#23BE0A] duration-300 transition-transform group-hover:translate-x-full"></span>
                            <span className="relative z-10">Request Food</span>
                        </button>

                        <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                  <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
                      Request for a Food
                    </div>
                    <form onSubmit={handleReqFood} className="py-4 px-6">
                      <div className="mb-4">
                        <label
                          className="block text-gray-700  font-bold mb-2"
                          htmlFor="donatorEmail"
                        >
                          Donator Email
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-black text-lg  font-normal leading-tight focus:outline-none focus:shadow-outline"
                          id="donatorEmail"
                          name="donatorEmail"
                          type="email"
                          placeholder="Enter Donator Email"
                          defaultValue={email}
                          readOnly
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          className="block text-gray-700  font-bold mb-2"
                          htmlFor="donatorName"
                        >
                          Donator Name
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-black text-lg  font-normal leading-tight focus:outline-none focus:shadow-outline"
                          id="donatorName"
                          name="donatorName"
                          type="text"
                          placeholder="Enter Donator Name"
                          defaultValue={donatorName}
                          readOnly
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          className="block text-gray-700  font-bold mb-2"
                          htmlFor="userEmail"
                        >
                          User Email
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-black text-lg  font-normal leading-tight focus:outline-none focus:shadow-outline"
                          id="userEmail"
                          name="userEmail"
                          type="email"
                          placeholder="Enter User Email"
                          defaultValue={user?.email}
                          readOnly
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor="foodID"
                        >
                          Food ID
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-black text-lg  font-normal leading-tight focus:outline-none focus:shadow-outline"
                          id="foodID"
                          name="foodID"
                          type="text"
                          placeholder="Enter Food ID"
                          defaultValue={_id}
                          readOnly
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          className="block text-gray-700  font-bold mb-2"
                          htmlFor="foodName"
                        >
                          Food Name
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-black text-lg  font-normal leading-tight focus:outline-none focus:shadow-outline"
                          id="foodName"
                          name="foodName"
                          type="text"
                          placeholder="Enter Food Name"
                          defaultValue={foodName}
                          readOnly
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor="photo"
                        >
                          Food Image
                        </label>
                        <input
                          className="shadow appearance-none  border rounded w-full py-2 px-3 text-black text-lg  font-normal leading-tight focus:outline-none focus:shadow-outline"
                          id="photo"
                          name="photo"
                          type="text"
                          placeholder="Enter Food Image"
                          defaultValue={photo}
                          readOnly
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor="requestDate"
                        >
                          Request Date
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-black text-lg font-normal leading-tight focus:outline-none focus:shadow-outline"
                          id="requestDate"
                          type="date"
                          name="requestDate"
                          placeholder=" Request Date"
                          defaultValue={reqDate}
                          readOnly
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor="date"
                        >
                          Expire Date
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-black text-lg  font-normal leading-tight focus:outline-none focus:shadow-outline"
                          id="date"
                          type="date"
                          name="date"
                          placeholder="Select a date"
                          defaultValue={date}
                          readOnly
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor="location"
                        >
                          Pickup Location
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-black text-lg  font-normal leading-tight focus:outline-none focus:shadow-outline"
                          id="location"
                          name="location"
                          type="text"
                          placeholder="Location"
                          defaultValue={location}
                          readOnly
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor="notes"
                        >
                          Additional Notes
                        </label>
                        <textarea
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-black text-lg font-normal  leading-tight focus:outline-none focus:shadow-outline"
                          id="notes"
                          name="notes"
                          rows={4}
                          placeholder="Enter any Additional Notes"
                          defaultValue={notes}
                        />
                      </div>

                      <div className="flex items-center justify-center mb-4">
                        <button
                          className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                          type="submit"
                        >
                          Request
                        </button>
                      </div>
                    </form>
                  </div>
                </Modal.Body>
              </Modal>

                    </div>



                </div>
            </div>
        </div>
    );
};

export default FoodDetails;