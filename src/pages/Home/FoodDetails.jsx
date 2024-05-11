import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/Context";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const FoodDetails = () => {
    const food = useLoaderData();
    const { user } = useContext(AuthContext)
    const { _id, foodName, photo, quantity, date, location, status, notes, email, donatorName } = food;
    const reqDate = new Date().toISOString().slice(0, 10);

    const handleReqFood = event => {
        event.preventDefault();
        if(user?.email === email ) return toast.error('you cant request food ')

        const form = event.target;

        const foodName = form.foodName.value;
        const foodId = form.foodId.value
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
            foodId,
            date,
            location,
            photo,
            donatorEmail,
            donatorName,
            userEmail,
            notes,
            requestDate,
        }
        console.log('request food' , reqFood);


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


                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>Request Food</button>
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog" onSubmit={handleReqFood}>
                                    {/* if there is a button in form, it will close the modal */}
                                    <div>
                                        <label
                                            htmlFor="foodName"
                                            className="text-lg italic font-semibold text-gray-900 block mb-2"
                                        >
                                            Food Name
                                        </label>
                                        <input type="text" name="foodName" id="foodName" placeholder="Type here" defaultValue={foodName} readOnly className="input input-bordered w-full " />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="photo"
                                            className="text-lg italic font-semibold text-gray-900 block mb-2"
                                        >
                                            Photo Url
                                        </label>
                                        <input type="text" name="photo" id="photo" placeholder="Type here" defaultValue={photo} readOnly className="input input-bordered w-full " />
                                    </div>



                                    <div>
                                        <label
                                            htmlFor="foodId"
                                            className="text-lg italic font-semibold text-gray-900 block mb-2"
                                        >
                                            Food Id
                                        </label>
                                        <input type="text" name="foodId" id="foodId" placeholder="Type here" defaultValue={_id} readOnly className="input input-bordered w-full " />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="text-lg italic font-semibold text-gray-900 block mb-2"
                                        >
                                            Donator Email
                                        </label>
                                        <input type="email" name="donatorEmail" id="donatorEmail" placeholder="Type here" defaultValue={email} readOnly className="input input-bordered w-full " />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="donatorName"
                                            className="text-lg italic font-semibold text-gray-900 block mb-2"
                                        >
                                            Donator Name
                                        </label>
                                        <input type="text" name="donatorName" id="donatorName" placeholder="Type here" defaultValue={donatorName} readOnly className="input input-bordered w-full " />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="userEmail"
                                            className="text-lg italic font-semibold text-gray-900 block mb-2"
                                        >
                                            User  Email
                                        </label>
                                        <input type="email" name="userEmail" id="userEmail" placeholder="Type here" defaultValue={user?.email} readOnly className="input input-bordered w-full " />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="requestDate"
                                            className="text-lg italic font-semibold text-gray-900 block mb-2"
                                        >
                                           Requested Date
                                        </label>
                                        <input type="text" name="requestDate" id="requestDate" placeholder="Type here" defaultValue={reqDate} readOnly className="input input-bordered w-full " />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="location"
                                            className="text-lg italic font-semibold text-gray-900 block mb-2"
                                        >
                                            Pickup Location
                                        </label>
                                        <input type="text" name="location" id="location" placeholder="Type here" defaultValue={location} readOnly className="input input-bordered w-full " />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="date"
                                            className="text-lg italic font-semibold text-gray-900 block mb-2"
                                        >
                                            Expire Date
                                        </label>
                                        <input type="text" name="date" id="date" placeholder="Type here" defaultValue={date} readOnly className="input input-bordered w-full " />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="notes"
                                            className="text-lg italic font-semibold text-gray-900 block mb-2"
                                        >
                                            Notes
                                        </label>
                                        <input type="text" name="notes" id="notes" placeholder="Type here" defaultValue={notes} readOnly className="input input-bordered w-full " />
                                    </div>
                                    <div className="flex justify-center">
                                        <input
                                            className="hover:shadow-form w-10/12 mt-6 rounded-md bg-[#FF3811] py-3 px-8 text-center text-xl font-semibold text-white outline-none"
                                            type="submit"
                                            value="Request Food"
                                        />
                                    </div>
                                    <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>

                                <p className="py-4">Press ESC key or click on ✕ button to close</p>
                            </div>
                        </dialog>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default FoodDetails;