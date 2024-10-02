import carrots from "../assets/carrots.png";
import cocktail from "../assets/cocktail.png";
import tables from "../assets/tables.png";
import vegetables from "../assets/vegetables.png";
import { motion } from "framer-motion";

const data: { title: string; image: string; description: string }[] = [
  {
    title: "Farm-Fresh Ingredients",
    image: carrots,
    description: "Sourced locally for peak flavor and quality.",
  },
  {
    title: "Craft Cocktails",
    image: cocktail,
    description: "Unique, handcrafted drinks to elevate your experience.",
  },
  {
    title: "Vegan & Gluten-Free Options",
    image: vegetables,
    description: "Delicious choices for every dietary preference.",
  },
  {
    title: "Outdoor Dining",
    image: tables,
    description: "Enjoy your meal al fresco in a cozy setting.",
  },
];

const Motives = () => {
  return (
    <div className="flex justify-around mb-32 gap-4 lg:gap-0 lg:flex-row flex-wrap">
      {data.map(({ title, image, description }, i) => (
        <motion.div
          initial={{
            x: -100,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.3*i
          }}
          key={i}
          className="drop-shadow-xl w-[280px] h-[280px] bg-white rounded-[13px] flex flex-col justify-around items-center"
        >
          <img src={image} alt="" className="max-h-[130px] w-[144px]" />
          <p className="text-accent text-[20px]">{title}</p>
          <p className="text-center text-[18px] w-[204px] text-secondary">
            {description}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default Motives;
