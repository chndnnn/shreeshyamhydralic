import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  offscreen: {
    opacity: 0,
    y: 70,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    backgroundColor: "#f0f4ff", // subtle light blue-ish background
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.9,
    },
  },
};

const SpecialistHydraulicsService = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-blue-400 min-h-screen rounded-md text-white">
      <div className="container mx-auto px-6 py-12">

        {/* Hero Section */}
        <section className="text-center mb-12">
          <p className="text-xl mb-6">
            We are equipped to provide a complete solution for all your cylinders, jacks, pumps, and tooling needs.
            Offering industrial tools for sale and ensuring fast and timely service.
          </p>
          <p className="text-lg">
            Air Compressor, Air Dryer, and Industrial Air Compressor Services with 24-hour service vans available for AMC customers.
          </p>
        </section>

        {/* Services Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[
            {
              title: "Cylinders & Jacks",
              desc: "We offer professional repair, servicing, and sale of hydraulic cylinders and jacks, ensuring peak performance for your operations.",
            },
            {
              title: "Pumps & Tooling",
              desc: "Our hydraulic pumps and tooling services are designed for all industrial needs, offering quick repair and sale of high-quality equipment.",
            },
            {
              title: "Air Compressors",
              desc: "24/7 Air compressor services with air dryers and industrial air compressors. Available for immediate repairs and maintenance services.",
            },
          ].map((card, idx) => (
            <motion.div
              key={idx}
              className="bg-white text-gray-800 rounded-lg shadow-lg p-6"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <h2 className="text-2xl font-semibold text-indigo-600 mb-4">{card.title}</h2>
              <p>{card.desc}</p>
            </motion.div>
          ))}
        </section>

        {/* 24-Hour Service */}
        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold text-indigo-900 mb-4">24-Hour Service Availability</h2>
          <p className="text-xl mb-6">
            We provide 24-hour on-call service for all hydraulic and pneumatic needs. Our service vans are ready for quick responses to ensure your operations are never interrupted.
          </p>
          <p className="text-lg">
            For immediate service, call: <span className="text-yellow-400 font-semibold">7249383123</span>
          </p>
        </section>

        {/* Contact Section */}
        <section className="bg-white text-gray-800 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold text-indigo-600 text-center mb-6">Contact Us</h2>
          <p className="text-center text-lg mb-4">Please reach out to our customer care team for any service inquiries or support requests.</p>
          <div className="text-center">
            <p className="text-lg font-semibold mb-2">Location: SHOP NO 06, near ADHIKARI TRANSPORT KHARAPADA</p>
            <p className="mb-4">Boisar, Palghar, Wada, Maharashtra</p>
            <p className="text-lg font-semibold mb-2">Customer Care:</p>
            <p className="text-yellow-400">Call: 7249383123</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-900">
          <p>&copy; 2025 Specialist Hydraulics & Pneumatics. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default SpecialistHydraulicsService;
