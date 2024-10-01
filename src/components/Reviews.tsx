import { useState } from "react";
import reviews from "../assets/reviews.png";
import { motion } from "framer-motion";

const data: {
  review: string;
  reviewer: { image: string; name: string; function: string };
}[] = [
  {
    review:
      "I had the pleasure of dining at The Culinary Haven last weekend, and it was nothing short of spectacular! The ambiance was warm and inviting, perfect for a cozy dinner. I ordered the pan-seared salmon, and it was cooked to perfection—flaky and tender with a delightful sauce that complemented it beautifully. The staff was attentive but not intrusive, making sure we had everything we needed. I can't wait to return and try more of their menu!",
    reviewer: {
      name: "xSenny_",
      function: "Web Developer",
      image: "bg-green-600",
    },
  },
  {
    review:
      "I visited Bistro Delight for lunch, and overall, it was a great experience. The food was fantastic—especially the truffle fries and the gourmet burger! However, we did wait a bit longer than expected for our food to arrive. The staff was friendly and apologetic, which helped ease the frustration. I would definitely recommend it for the food alone, and I'm looking forward to my next visit!",
    reviewer: {
      name: "Daniel",
      function: "Rollerite Director",
      image: "bg-red-600",
    },
  },
  {
    review:
      "I recently dined at The Flavor Spot and found it to be just okay. The pasta I ordered was flavorful, but the portion size was smaller than I anticipated for the price. The decor was nice, but it felt a bit crowded and noisy. Service was friendly, but we had to ask for our drinks twice before they arrived. It’s a nice place, but I think there are better options in the area. I might give it another shot in the future!",
    reviewer: {
      name: "Logan",
      function: "Proffessional Chef",
      image: "bg-blue-600",
    },
  },
];

const Reviews = () => {
  const [reviewIndex, setReviewIndex] = useState(1);

  return (
    <section className="flex justify-around flex-col lg:flex-row items-center mb-20 relative">
      <div className="absolute -z-[2] w-[1012px] right-0 top-0 h-[764px] transform translate-x-[324px] -translate-y-[100px] gradient blur-3xl" />
      <div className="space-y-4">
        <motion.p className="text-[48px]">
          Our{" "}
          <motion.span
            transition={{ duration: 1 }}
            whileInView={{ color: "#F03328" }}
          >
            Reviews
          </motion.span>
        </motion.p>
        <motion.p
          className="max-w-[474px] text-[18px]"
          key={reviewIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {data[reviewIndex].review}
        </motion.p>
        <div className="flex justify-end gap-1">
          {[2, 1, 0].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2 * i,
                ease: [0.68, -0.55, 0.27, 1.55],
                duration: 0.9,
              }}
              onClick={() => {
                setReviewIndex(i);
              }}
              className={`size-6 rounded-full cursor-pointer ${i === reviewIndex ? "bg-red-500 shadow-lg" : "border-red-500 border-2"}`}
            ></motion.div>
          ))}
        </div>
        <div className="flex gap-2">
          <div
            className={`size-10 rounded-full ${data[reviewIndex].reviewer.image}`}
          ></div>
          <div className="flex flex-col justify-evenly">
            <p className="text-accent">{data[reviewIndex].reviewer.name}</p>
            <p>{data[reviewIndex].reviewer.function}</p>
          </div>
        </div>
      </div>
      <div>
        <img src={reviews} alt="Customer reviews" />
      </div>
    </section>
  );
};

export default Reviews;
