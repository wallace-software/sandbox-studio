import { ContactIcon, ContactWidgetForm } from "@components";
import { AnimatePresence, motion } from "framer-motion";
import { FC, HTMLAttributes, useRef, useState } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const ContactWidget: FC<Props> = () => {
  const [open, setOpen] = useState<boolean>(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  return (
    <div className="fixed bottom-5 md:bottom-8 right-5 md:right-8 3xl:right-[5%] z-50 flex flex-col items-end">
      {/* Backdrop (place first in DOM for stacking context) */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="backdrop"
            className="fixed inset-0 bg-background-black bg-opacity-90 md:bg-opacity-80 z-20 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Modal */}
      <AnimatePresence mode="wait" initial={false}>
        {open && (
          <ContactWidgetForm
            open={open}
            setOpen={setOpen}
            buttonRef={buttonRef}
          />
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.div
        ref={buttonRef}
        className={
          "z-40 rounded-full bg-custom-black p-2 border border-sand cursor-pointer w-min"
        }
        onClick={() => setOpen(!open)}
        initial={{ scale: open ? 0.93 : 1, opacity: open ? 0.7 : 1 }}
        animate={{ scale: open ? 0.93 : 1, opacity: open ? 0.7 : 1 }}
        whileHover={{ scale: open ? 0.93 : 1.1 }}
        // whileTap={{ scale: open ? 0.9 : 0.9 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <ContactIcon className="w-7 h-7 md:w-10 md:h-10 lg:w-10 lg:h-10" />
      </motion.div>
    </div>
  );
};

export default ContactWidget;
