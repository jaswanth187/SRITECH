import React from "react";
import "./HeroSection.css";
const Services = () => {
  return (
    <div className="section-bg">
      <h2 className="text-xl font-bold my-5 text-center ">
        Here is what you can expect
      </h2>

      <div className="flex">
        <div className="card w-96 bg-base-100 shadow-xl mx-3">
          <figure className="px-10 pt-10">
            <img
              src="./developer.png"
              alt="Development"
              className="rounded-xl w-16 h-16"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Development</h2>
            <p>Building innovative solutions to drive your business forward.</p>
            <div className="card-actions">
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mx-3">
          <figure className="px-10 pt-10">
            <img
              src="./consulting.png"
              alt="Consulting"
              className="rounded-xl w-16 h-16"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Consulting</h2>
            <p>Expert advice to help you achieve your business goals.</p>
            <div className="card-actions">
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mx-3">
          <figure className="px-10 pt-10">
            <img
              src="./education.png"
              alt="EduTech"
              className="rounded-xl w-16 h-16"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">EduTech</h2>
            <p>Empowering education with cutting-edge technology solutions.</p>
            <div className="card-actions">
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mx-3">
          <figure className="px-10 pt-10">
            <img
              src="./support.png"
              alt="Support & Maintenance"
              className="rounded-xl w-16 h-16"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Support & Maintenance</h2>
            <p>Reliable support to keep your systems running smoothly.</p>
            <div className="card-actions">
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
