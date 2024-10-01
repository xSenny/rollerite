import hero from "../assets/hero.svg";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="flex justify-around flex-col lg:flex-row items-center mb-20">
      <motion.div
        initial={{
          opacity: 0,
          x: -100,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        className="space-y-4"
        transition={{
          duration: 1,
          ease: [0.68, -0.55, 0.27, 1.55],
        }}
      >
        <p className="text-[48px]">
          Taste The
          <div className="inline-block bg-foreground-bg rounded-xl px-4 py-2 ml-5">
            Magic
          </div>{" "}
          <br />
          At Our Restaurant
        </p>
        <p className="max-w-[478px] text-secondary text-[20px]">
          Dive into a flavor-packed experience! Here we serve up delicious
          dishes crafted from the freshest ingredients, all in a vibrant
          atmosphere that makes every meal special. Join us and savor the
          extraordinary!
        </p>
        <div className="flex justify-center">
          <button className="bg-foreground-bg py-3 px-10 rounded-full">
            Order Now
          </button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
      >
        <img src={hero} alt="" />
      </motion.div>
    </section>
  );
};

export default Hero;
