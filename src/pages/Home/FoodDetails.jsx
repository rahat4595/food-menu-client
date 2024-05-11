import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/Context";

const FoodDetails = () => {
    const food = useLoaderData();
    const { user } = useContext(AuthContext)
    const { _id, foodName, photo, quantity, date, location, status, notes, email, donatorName } = food
    return (
        <div>
            <div className="hero my-20 animate__animated animate__zoomIn">
                <div className="hero-content flex-col gap-10 md:gap-28 lg:flex-row">
                    <img src={photo} className=" rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{foodName}</h1>
                        <p className="py-6">{quantity}</p>
                        <div className="my-4">
                            <b className=' text-xl '>Expire date: {date}</b>
                        </div>
                        <h1 className='text-xl  font-bold'>Pickup location: {location}</h1>

                        <div className='flex gap-10 mt-4'>
                            <b className='lg:text-xl'>status: {status}</b>
                        </div>
                        <div className='flex gap-10 mt-4'>
                            <b className='lg:text-xl'>Additional notes: {notes}</b>
                        </div>

                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>open modal</button>
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                     {/* if there is a button in form, it will close the modal */}
                                     <div>
                                            <label
                                                htmlFor="foodName"
                                                className="text-lg italic font-semibold text-gray-900 block mb-2"
                                            >
                                                Food Name
                                            </label>
                                            <input type="text" placeholder="Type here" defaultValue={foodName} readOnly className="input input-bordered w-full " />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="photo"
                                                className="text-lg italic font-semibold text-gray-900 block mb-2"
                                            >
                                                Photo Url
                                            </label>
                                            <input type="text" placeholder="Type here" defaultValue={photo} readOnly className="input input-bordered w-full " />
                                        </div>

                                        

                                        <div>
                                            <label
                                                htmlFor="id"
                                                className="text-lg italic font-semibold text-gray-900 block mb-2"
                                            >
                                                Food Id
                                            </label>
                                            <input type="text" placeholder="Type here" defaultValue={_id} readOnly className="input input-bordered w-full " />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="text-lg italic font-semibold text-gray-900 block mb-2"
                                            >
                                                Donator Email
                                            </label>
                                            <input type="text" placeholder="Type here" defaultValue={email} readOnly className="input input-bordered w-full " />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="donatorName"
                                                className="text-lg italic font-semibold text-gray-900 block mb-2"
                                            >
                                               Donator Name
                                            </label>
                                            <input type="text" placeholder="Type here" defaultValue={donatorName} readOnly className="input input-bordered w-full " />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="userEmail"
                                                className="text-lg italic font-semibold text-gray-900 block mb-2"
                                            >
                                              User  Email
                                            </label>
                                            <input type="text" placeholder="Type here" defaultValue={user?.email} readOnly className="input input-bordered w-full " />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="location"
                                                className="text-lg italic font-semibold text-gray-900 block mb-2"
                                            >
                                                Pickup Location
                                            </label>
                                            <input type="text" placeholder="Type here" defaultValue={location} readOnly className="input input-bordered w-full " />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="date"
                                                className="text-lg italic font-semibold text-gray-900 block mb-2"
                                            >
                                                Expire Date
                                            </label>
                                            <input type="text" placeholder="Type here" defaultValue={date} readOnly className="input input-bordered w-full " />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="notes"
                                                className="text-lg italic font-semibold text-gray-900 block mb-2"
                                            >
                                                Notes
                                            </label>
                                            <input type="text" placeholder="Type here" defaultValue={notes} readOnly className="input input-bordered w-full " />
                                        </div>
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
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