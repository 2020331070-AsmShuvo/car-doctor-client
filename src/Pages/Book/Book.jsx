import axios from "axios";
import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
const Book = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  
  const { title, _id, price, img } = service;
  const hanldeBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const fName = form.first_name.value;
    const lName = form.last_name.value;
    const email = form.email.value;
    const desc = form.desc.value;
    const date = form.date.value;

    const order = {
      customerName: fName + " " + lName,
      email,
      desc,
      date,
      serviceTitle: title,
      serviceId: _id,
      img,
      price,
    };
    // console.log(order);

    axios.post("http://localhost:5000/bookings", order).then((data) => {
      console.log("posted", data.data);
      if (data.data.insertedId) {
        alert("Service booked successfuly");
        form.reset();
      }
    });
  };

  // console.log(title);
  return (
    <div>
      <section className="bg-white">
        <div>
          <main className="flex border-4 items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <h1 className="mt-6 text-2xl border-b border-gray-500 pb-1 font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Book <span className="text-primary">{title}</span> Service Now:
              </h1>

              <form
                onSubmit={hanldeBook}
                className="mt-8 grid grid-cols-6 gap-6"
              >
                <div className="col-span-6 sm:col-span-3">
                  <label
                    for="FirstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>

                  <input
                    type="text"
                    id="FirstName"
                    name="first_name"
                    className="mt-1 w-full rounded-md border-gray-200 bg-gray-100 p-2 h-8 text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    for="LastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>

                  <input
                    type="text"
                    id="LastName"
                    name="last_name"
                    className="mt-1 w-full rounded-md border-gray-200 bg-gray-100 p-2 h-8 text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    for="Email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Email{" "}
                  </label>

                  <input
                    type="email"
                    id="Email"
                    name="email"
                    defaultValue={user?.email}
                    className="mt-1 w-full rounded-md border-gray-200 bg-gray-100 p-2 h-8 text-sm text-gray-700 shadow-sm"
                    required
                  />
                </div>
                <div className="col-span-6">
                  <textarea
                    name="desc"
                    className="textarea w-full textarea-info"
                    placeholder="Write your problem here"
                  ></textarea>
                </div>
                <div className="col-span-6">
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="mt-1 w-full rounded-md border-gray-200 bg-gray-100 p-2 h-8 text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <input
                    type="submit"
                    value="Book Service"
                    className="btn w-full btn-primary"
                  />
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default Book;
