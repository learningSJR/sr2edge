import React from "react";
import { Globe, Code, Cloud } from "lucide-react"; // using lucide icons for modern feel

const OurServices = () => {
  const services = [
    {
      title: "Digital Strategy",
      description:
        "Tailored strategies that align with your vision and drive sustainable growth.",
      icon: <Globe size={40} className="text-green-500" />,
      image:
        "https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg",
    },
    {
      title: "Web Development",
      description:
        "Scalable and modern websites built with cutting-edge technologies.",
      icon: <Code size={40} className="text-green-500" />,
      image:
        "https://cdn.pixabay.com/photo/2017/02/05/00/19/web-design-2038872_640.jpg",
    },
    {
      title: "Cloud Solutions",
      description:
        "Secure and optimized cloud services to power your digital transformation.",
      icon: <Cloud size={40} className="text-green-500" />,
      image:
        "https://cdn.pixabay.com/photo/2024/02/26/17/05/cloud-8598424_640.jpg",
    },
  ];
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container px-6 mx-auto">
        {/* Section Title */}
        <h2 className="mb-12 text-3xl font-bold text-center text-gray-800 md:text-4xl">
          Our <span className="text-green-600">Services</span>
        </h2>

        {/* Service Cards */}
        <div className="grid gap-10 md:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="overflow-hidden transition-all duration-300 transform bg-white shadow-md rounded-2xl hover:shadow-xl hover:-translate-y-2"
            >
              {/* Image */}
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="mb-3 text-xl font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
