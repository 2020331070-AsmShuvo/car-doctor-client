import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { title, img, price, _id } = service;
  return (
    <div className="mx-auto">
      <div className="relative flex flex-col text-gray-700 bg-gradient-to-r border from-[#FFF] to-[#6192e01b]  bg-clip-border rounded-xl w-96">
        <div className="relative mt-4 mx-4 overflow-hidden text-gray-700  bg-clip-border rounded-xl">
          <img
            src={img}
            alt="card-image"
            className="object-cover w-full h-3/4"
          />
        </div>
        <div className="p-6 text-primary">
          <div className="flex items-center justify-between mb-2">
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              {title}
            </p>
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              ${price}
            </p>
            <Link to={`/services/${_id}`}>
              <button className="text-primary">
                <FaArrowRight /> {/*book now*/}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
