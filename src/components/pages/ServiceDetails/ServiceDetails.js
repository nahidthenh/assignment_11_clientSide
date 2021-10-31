import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div>
      <div className="container">
        <h1 className="text-center m-5">This is service Detail </h1>
        {/* <div className="row">
          <div className="offset-md-3 col-md-6 text-center">
            <img src={service?.img} alt="" />
            <h3>{service?.name}</h3>
            <p>{service?.description}</p>
          </div>
        </div> */}
        <div>
          <h2>Details of : {service.name}</h2>
          <h2>this is booking: {serviceId}</h2>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
