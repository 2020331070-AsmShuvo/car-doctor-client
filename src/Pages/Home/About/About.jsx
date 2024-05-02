import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <div className="hero min-h-screen w-10/12 mx-auto">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 relative">
            <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
            <img
              src={parts}
              className="w-80 border-8 border-blue-900 h-72 absolute left-40 top-36 rounded-lg shadow-2xl"
            />
          </div>
          <div className="w-1/2">
            <p className="text-primary text-xl font-bold">About Us</p>
            <h1 className="text-4xl font-bold w-1/2">
              We are qualified & of experience in this field
            </h1>
            <p className="py-6 text-lg text-gray-500">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <p className="py-6 text-lg text-gray-500">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.{" "}
            </p>
            <div>
              <Link
                to="/moreinfo"
                class="group relative inline-block overflow-hidden border border-primary px-8 py-1 focus:outline-none focus:ring"
              >
                <span class="absolute inset-y-0 left-0 w-[2px] bg-primary transition-all group-hover:w-full group-active:bg-indigo-500"></span>

                <span class="relative text-sm font-medium text-primary transition-colors group-hover:text-white">
                  Get more info
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
