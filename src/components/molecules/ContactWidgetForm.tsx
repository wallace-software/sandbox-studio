import { Button } from "@components";
import {
  emptyForm,
  FormData,
  widgetButtonVariants,
  widgetContainerVariants,
  widgetItemVariants,
} from "@constants";
import { useLockBodyScroll, useWindowSize } from "@hooks";
import { submitLead, validateEmail } from "@utils";
import { motion } from "framer-motion";
import {
  Dispatch,
  FC,
  HTMLAttributes,
  SetStateAction,
  use,
  useEffect,
  useRef,
  useState,
} from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  buttonRef?: React.RefObject<HTMLElement>;
}

const ContactWidgetForm: FC<Props> = (props: Props) => {
  const { open, setOpen, buttonRef } = props;

  const [formData, setFormData] = useState<FormData>(emptyForm);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [submissionStatus, setSubmissionStatus] = useState<
    null | "sending" | "success" | "failed"
  >(null);

  const [winWidth] = useWindowSize();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name === "email") {
      setIsEmailValid(validateEmail(value));
    }
  };

  const handleSubmit = () => {
    submitLead(formData, isEmailValid, setSubmissionStatus);
  };

  useEffect(() => {
    if (submissionStatus === "success") {
      timeoutRef.current = setTimeout(() => {
        setOpen(false);
        setFormData(emptyForm);
        setSubmissionStatus(null);
      }, 2000);
    }

    // Cleanup: clear timeout on unmount or if submissionStatus changes before timeout ends
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [setOpen, submissionStatus]);

  //close dropdown on outside click
  const ref = useRef(null);
  // useOutsideAlerter(ref, () => setOpen(false), buttonRef);

  //stop page scroll (when modal or menu open)
  useLockBodyScroll(open);

  return (
    <motion.aside
      className="z-40 fixed bottom-20 md:bottom-32 right-3 md:right-6 origin-bottom-right 
          flex flex-col justify-between 
          w-[90vw] md:w-[501px] h-[500px] md:h-[600px] 
          rounded-3xl bg-custom-black p-6 md:p-10 
          border md:border-4 border-sand/80 overflow-hidden"
      ref={ref}
      initial={{
        scale: 0.9,
        opacity: 0,
        clipPath: "inset(100% 100% 100% 100%)",
      }}
      animate={{ scale: 1, opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
      exit={{
        scale: 0.5,
        opacity: 0,
        // clipPath: "inset(100% 100% 100% 100%)",
        transition: { duration: 0.2, ease: "easeInOut" },
      }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} // springy ease
    >
      {/* close icon (not animated) */}
      {/* close icon */}
      <div
        className="absolute top-4 right-4 cursor-pointer z-50"
        onClick={() => setOpen(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="fill-white opacity-40 hover:opacity-90 transition-200"
        >
          <path
            d="M19.5449 17.954C19.7563 18.1653 19.875 18.452 19.875 18.7509C19.875 19.0497 19.7563 19.3364 19.5449 19.5477C19.3336 19.7591 19.0469 19.8778 18.748 19.8778C18.4492 19.8778 18.1625 19.7591 17.9512 19.5477L11.999 13.5937L6.04492 19.5459C5.83358 19.7572 5.54693 19.8759 5.24805 19.8759C4.94916 19.8759 4.66251 19.7572 4.45117 19.5459C4.23983 19.3345 4.12109 19.0479 4.12109 18.749C4.12109 18.4501 4.23983 18.1635 4.45117 17.9521L10.4052 11.9999L4.45305 6.04586C4.2417 5.83451 4.12297 5.54787 4.12297 5.24898C4.12297 4.9501 4.2417 4.66345 4.45305 4.45211C4.66439 4.24076 4.95103 4.12203 5.24992 4.12203C5.54881 4.12203 5.83545 4.24076 6.0468 4.45211L11.999 10.4062L17.953 4.45117C18.1644 4.23983 18.451 4.12109 18.7499 4.12109C19.0488 4.12109 19.3354 4.23983 19.5468 4.45117C19.7581 4.66251 19.8769 4.94916 19.8769 5.24804C19.8769 5.54693 19.7581 5.83358 19.5468 6.04492L13.5927 11.9999L19.5449 17.954Z"
            // fill="#4B4B4B"
          />
        </svg>
      </div>
      {/* form header */}
      <motion.div
        className="w-full mr-4 pb-3 border-b border-white"
        variants={widgetItemVariants}
        initial="hidden"
        animate="show"
      >
        <p>Get a quote</p> <p>For your project</p>
      </motion.div>
      {/* form */}
      <motion.form
        onSubmit={handleSubmit}
        className="flex flex-col justify-between gap-4 h-full pt-4"
        key="form"
        variants={widgetContainerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div
          className="flex flex-col md:flex-row gap-4"
          variants={widgetItemVariants}
        >
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full lg:w-1/2 input !bg-white !bg-opacity-[3%]"
            placeholder="Name"
            maxLength={250}
          />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full lg:w-1/2 input !bg-white !bg-opacity-[3%]"
            placeholder="Email"
            maxLength={250}
          />
        </motion.div>
        <motion.textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="input w-full resize-none !bg-white !bg-opacity-[3%]"
          placeholder="Message (optional)"
          maxLength={1000}
          rows={winWidth >= 768 ? 13 : 6}
          variants={widgetItemVariants}
        />
        <motion.div variants={widgetButtonVariants}>
          <Button
            title="Send message"
            callback={() => handleSubmit()}
            disabled={
              submissionStatus === "sending"
              // ||
              // !formData.name ||
              // !formData.email
            }
            className="!w-full sm:!w-1/2 !max-w-none md:!max-w-[220px] mt-4 md:mt-0"
          />
        </motion.div>
      </motion.form>
    </motion.aside>
  );
};

export default ContactWidgetForm;
