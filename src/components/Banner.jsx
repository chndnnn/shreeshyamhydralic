import { motion } from "framer-motion";

const Banner = ({ setActiveItem }) => {
  return (
    <section className="bg-white lg:grid lg:place-content-center ">
      <div className="mx-auto w-screen max-w-screen-xl px-2 md:py-10 py-2 md:mb-0 mb-2">
        <motion.div
          className="mx-auto max-w-prose text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Specialist Hydraulics &{" "}
            <strong className="text-indigo-600">Pneumatics </strong>
            Hydraulic Service
          </h1>

          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
            Quick Solutions for Long-Lasting Performance
          </p>

          <div className="mt-4 flex justify-center gap-4 sm:mt-6">
            <motion.a
              className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveItem(0)}
            >
              Contact us
            </motion.a>

            <motion.a
              className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveItem(1)}
            >
              About us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
