import hero from "../assets/hero.svg";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section
      className="mb-20 flex flex-col items-center justify-around lg:flex-row text-center lg:text-start"
      id="home"
    >
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
          <div className="ml-5 inline-block rounded-xl bg-foreground-bg px-4 py-2">
            Magic
          </div>{" "}
          <br />
          At Our Restaurant
        </p>
        <p className="max-w-[478px] text-[20px] text-secondary">
          Dive into a flavor-packed experience! Here we serve up delicious
          dishes crafted from the freshest ingredients, all in a vibrant
          atmosphere that makes every meal special. Join us and savor the
          extraordinary!
        </p>
        <div className="flex justify-center">
          <button className="rounded-full bg-foreground-bg px-10 py-3">
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
