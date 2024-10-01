import meal from "../assets/meal.png";
import { motion } from "framer-motion";

const data: { title: string; description: string }[] = [
  {
    title: "Unmatched Flavor",
    description:
      "Our dishes are crafted with passion and creativity, ensuring every bite bursts with incredible taste. We prioritize quality ingredients to elevate your dining experience.",
  },
  {
    title: "Exceptional Service",
    description:
      "Our friendly and attentive staff are dedicated to making your visit memorable. We go the extra mile to ensure you feel welcomed and cared for throughout your meal.",
  },
  {
    title: "Inviting Atmosphere",
    description:
      "Step into a warm, vibrant environment perfect for any occasion. Whether it's a romantic dinner or a lively gathering, our ambiance sets the stage for a fantastic experience.",
  },
];

const ChooseUs = () => {
  return (
    <section className="flex justify-center items-center gap-10 mb-20 flex-col-reverse lg:flex-row relative">
      <div className="absolute -z-[2] w-[854px] left-0 top-0 h-[536px] transform -translate-x-[424px] translate-y-[100px] gradient blur-3xl" />
      <div className="max-w-1/2">
        <img src={meal} alt="" />
      </div>
      <div>
        <p className="text-[48px] text-center lg:text-start">
          Why{" "}
          <motion.span
            className="text-accent"
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1
            }}
            transition={{
              duration: 1.2
            }}
          >
            People
          </motion.span>{" "}
          Choose Us?
        </p>
        <div className="flex flex-col gap-2">
          {data.map(({ title, description }, i) => (
            <motion.div
              initial={{
                opacity: 0,
                x: 200,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1,
                ease: [0.68, -0.55, 0.27, 1.55],
              }}
              key={i}
              className="px-5 py-2 drop-shadow-md bg-white rounded-xl max-w-[600px]"
            >
              <p className="text-[24px]">{title}</p>
              <p className="text-[16px] text-secondary">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
