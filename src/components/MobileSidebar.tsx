import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useClickAway } from "react-use";
import { Home, Menu, Star, Users, X } from "lucide-react";


export const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setOpen(false));
  const toggleSidebar = () => setOpen((prev) => !prev);

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="rounded-xl border-2 border-zinc-800 p-3"
        aria-label="toggle sidebar"
      >
        {/* <GiHamburgerMenu /> */}
        <Menu />
      </button>
      <AnimatePresence mode="wait" initial={false}>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { delay: 0.2 } }}
              transition={{ duration: 0.3 }}
              aria-hidden="true"
              className="fixed bottom-0 left-0 right-0 top-0 z-40 bg-[rgba(0,0,0,0.1)] backdrop-blur-sm"
            ></motion.div>
            <motion.div
              initial={{ x: 500 }}
              animate={{ x: 0 }}
              exit={{ x: 500 }}
              transition={{ duration: 0.3 }}
              className="fixed bottom-0 right-0 top-0 z-50 h-screen w-full max-w-xs border-r-2 border-accent bg-white"
              ref={ref}
              aria-label="Sidebar"
            >
              <div className="flex items-center justify-between border-b-2 border-accent p-5">
                <span>Welcome</span>
                <button
                  onClick={toggleSidebar}
                  className="rounded-xl border-2 border-accent p-3"
                  aria-label="close sidebar"
                >
                  <X />
                </button>
              </div>
              <ul>
                {items.map((item, idx) => {
                  const { title, href, Icon } = item;
                  return (
                    <li key={title}>
                      <a
                        onClick={toggleSidebar}
                        href={href}
                        className="flex items-center justify-between gap-5 border-b-2 border-accent p-5 transition-all hover:bg-foreground-bg"
                      >
                        <motion.span
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + idx / 10 }}
                        >
                          {title}
                        </motion.span>
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            delay: 1.5,
                          }}
                        >
                          <Icon className="text-2xl" />
                        </motion.div>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

const items = [
  { title: "Home", Icon: Home, href: "#home" },
  { title: "Why People Choose Us", Icon: Users, href: '#why' },
  { title: "Reviews", Icon: Star, href: "#reviews" },
];
