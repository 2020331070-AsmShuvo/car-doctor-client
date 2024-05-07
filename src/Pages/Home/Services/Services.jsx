import React, { useEffect, useState } from "react";
import Service from "../../Service/Service";
import axios from "axios";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    // fetch("http://localhost:3000/services")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setServices(data);
    //   });
    // axios

    axios.get("http://localhost:3000/services").then((data) => {
      console.log(data.data);
      setServices(data.data);
    });
  }, []);
  console.log(services.length);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service) => (
        <Service service={service} />
      ))}
    </div>
  );
};

export default Services;
