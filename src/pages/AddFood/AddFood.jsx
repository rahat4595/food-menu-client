import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../../providers/Context';
import { Helmet } from 'react-helmet-async';
import Lottie from "lottie-react";
import info from "../../assets/info.json"

const AddFood = () => {
  const { user } = useContext(AuthContext);
  console.log("user", user)

  if (!user) {
    return <div>Loading...</div>;
  }

  const { email, displayName, photoURL } = user;

  const handleAddFood = event => {
    event.preventDefault();

    const form = event.target;

    const foodName = form.foodName.value;
    const quantity = form.quantity.value;
    const date = form.date.value;
    const location = form.location.value;
    const photo = form.photo.value;
    const status = form.status.value;
    const notes = form.notes.value;


    const newFood = {
      foodName,
      quantity,
      date,
      location,
      photo,
      status,
      notes,
      email,
      donatorName: displayName,
      donatorPhoto: photoURL,
    };
    console.log("New Food", newFood)



    // send data to the server
    fetch('https://food-menu-server.vercel.app/foods', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newFood)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Food Added Successfully',
            icon: 'success',
            confirmButtonText: 'OK'
          });

          form.reset();
        }
      })
  }



  return (
    <div className="bg-white border-2 rounded-lg shadow relative m-10">
      <Helmet>
        <title>Food Share | Add Food</title>
      </Helmet>

      <div className="flex items-start justify-between p-5 border-b rounded-t">
        <h3 className="md:text-2xl text-xl italic font-bold">
          Donor Information :-
        </h3>


      </div>
      <div className="p-6 space-y-6">
        <form onSubmit={handleAddFood}>
          <div className="flex justify-center mb-6">

            <Lottie animationData={info}></Lottie>
            {/* <img
              className="rounded-full p-1 border-2 border-blue-600"
              src={user?.photoURL}
              alt=""
            /> */}
          </div>

          {/* donator photo url */}
          <div className="col-span-12 sm:col-span-3">
            <label
              htmlFor="donatorPhoto"
              className="text-lg italic font-semibold text-gray-900 block mb-2"
            >
              Donator Photo
            </label>
            <input
              type="text"
              name="donatorPhoto"
              id="donatorPhoto"
              className="shadow-sm bg-gray-50 border border-gray-300 text-black sm:text-lg  rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
              placeholder="Your Email"
              defaultValue={user?.photoURL}
              required
              readOnly
            />
          </div>
          {/* sdfsadf */}


          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="name"
                className="text-lg italic font-semibold text-gray-900 block mb-2"
              >
                Donator Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Your Name"
                defaultValue={user?.displayName}
                required
                readOnly
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="email"
                className="text-lg italic font-semibold text-gray-900 block mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-black sm:text-lg  rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Your Email"
                defaultValue={user?.email}
                required
                readOnly
              />
            </div>



            <div className="col-span-6 sm:col-span-3">
              <p className="relative md:mt-8 mt-4 w-full inline-flex items-center justify-center p-0.5 mb-6 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group ">
                <span className="relative md:text-2xl text-lg w-full italic font-bold px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Food Information :-
                </span>
              </p>

              <label
                htmlFor="foodName"
                className="text-lg italic font-semibold text-gray-900 block mb-2"
              >
                Food Name
              </label>
              <input
                type="text"
                name="foodName"
                id="foodName"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-base font-semibold rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
              />
            </div>

            <div className="col-span-6 sm:col-span-3 md:mt-[110px]">
              <label
                htmlFor="quantity"
                className="text-lg italic font-semibold text-gray-900 block mb-2"
              >
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="date"
                className="text-lg italic font-semibold text-gray-900 block mb-2"
              >
                Expire Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-base font-semibold rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
              />
            </div>
            <div className="col-span-6 sm:col-span-3 ">
              <label
                htmlFor="location"
                className="text-lg italic font-semibold text-gray-900 block mb-2"
              >
                Pickup Location
              </label>
              <input
                type="text"
                name="location"
                id="location"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="photo"
                className="text-lg italic font-semibold text-gray-900 block mb-2"
              >
                Food Photo URL
              </label>
              <input
                type="text"
                name="photo"
                id="photo"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-base font-semibold rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
              />
            </div>
            <div className="col-span-6 sm:col-span-3 ">
              <label
                htmlFor="status"
                className="text-lg italic font-semibold text-gray-900 block mb-2"
              >
                Status
              </label>
              <input
                type="text"
                name="status"
                id="status"
                className="shadow-sm valu bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                defaultValue="Available"
                style={{

                  fontWeight: "500",
                  fontSize: "1.3rem",
                  fontStyle: "italic",
                }}
                readOnly
              />
            </div>
            <div className="col-span-full">
              <label
                htmlFor="notes"
                className="text-lg italic font-semibold text-gray-900 block mb-2"
              >
                Additional Notes
              </label>
              <input
                id="notes"
                name="notes"
                rows={6}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                placeholder="Your Notes"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <input
              className=" cursor-pointer w-full mt-6 rounded-md bg-[#23BE0A] py-3 px-8 text-center text-xl font-semibold text-white outline-none"
              type="submit"
              value="Add Food"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFood;