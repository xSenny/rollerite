import { motion } from "framer-motion";
import { Sidebar } from "./MobileSidebar";
const data: { href: string; label: string }[] = [
  {
    href: "#home",
    label: "Home",
  },
  {
    href: "#why",
    label: "Why People Choose Us",
  },
  {
    href: "#reviews",
    label: "Our Reviews",
  },
];
const Header = () => {
  return (
    <div className="flex justify-between py-4">
      <div className="text-[48px] lg:text-[64px]">
        <span className="text-[#F03328]">Restau</span>
        <span className="text-[#FF9E0C]">rant</span>
      </div>
      <div className="hidden items-center gap-4 text-[24px] text-black lg:flex">
        {data.map((i) => (
          <motion.a
            whileHover={{
              color: "#ff9e0c",
            }}
            href={i.href}
          >
            {i.label}
          </motion.a>
        ))}
      </div>
      <div className="lg:hidden">
        <Sidebar />
      </div>
    </div>
  );
};

export default Header;
