import { FC, useState } from "react";
import { Button } from "@components";
import { AnimatePresence, motion } from "framer-motion";
import { emptyForm, midExitAnimation, FormData } from "src/constants";
import { submitLead, validateEmail } from "@utils";

interface ContactFormProps {
  inputStyles?: string;
}
const ContactForm: FC<ContactFormProps> = ({
  inputStyles = "!bg-white !bg-opacity-[3%]",
}) => {
  const [formData, setFormData] = useState<FormData>(emptyForm);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [submissionStatus, setSubmissionStatus] = useState<
    null | "sending" | "success" | "failed"
  >(null);

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

  const handleSubmit = async () => {
    submitLead(formData, isEmailValid, setSubmissionStatus);
  };

  // const handleSubmit = async () => {
  //   console.log("formData", formData);
  //   console.log("isEmailValid", isEmailValid);
  //   if (
  //     !formData.name ||
  //     !formData.email ||
  //     !formData.message ||
  //     !formData.budgetRange
  //   ) {
  //     return;
  //   }
  //   if (!isEmailValid) {
  //     toast.error("Please enter a valid email");
  //     return;
  //   }
  //   // if (formData.message.length < 20) {
  //   //   toast.error("Message must be more than 20 characters");
  //   //   return;
  //   // }
  //   // if (formData.budgetRange.length < 4) {
  //   //   toast.error("Budget must be greater than 3 characters");
  //   //   return;
  //   // }
  //   console.log("Submitting lead with data:", formData, isEmailValid);

  //   // Handle form submission logic
  //   setSubmissionStatus("sending");
  //   try {
  //     toast.promise(axios.get("/api/add-lead", { params: formData }), {
  //       loading: "Submitting...",
  //       success: (res) => {
  //         console.log(res.data);
  //         // setFormData(emptyForm);
  //         setSubmissionStatus("success");
  //         return "Submitted successfully";
  //       },
  //       error: (err) => {
  //         console.error(err);
  //         setSubmissionStatus("failed");
  //         return "Submission failed";
  //       },
  //     });
  //   } catch (error) {
  //     setSubmissionStatus("failed");
  //     console.error(error);
  //   }
  // };

  // const fetchLeads = useCallback(async () => {
  //   try {
  //     const response = await axios.get("/api/get-leads");
  //     console.log("response ", response.data.leads.rows);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (process.env.NODE_ENV === "development") {
  //     fetchLeads();
  //   }
  // }, [fetchLeads]);

  return (
    <AnimatePresence mode="wait">
      {submissionStatus === "success" ? (
        <motion.div className="text-white w-full lg:w-[815px] h-[398px] md:h-[340px] flex flex-col pt-10">
          <p className="text-xl md:text-2xl">Thank you for your message 🎉</p>
          <p className="text-xl md:text-2xl opacity-60">
            We will get back to you shortly
          </p>
        </motion.div>
      ) : (
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
          {...midExitAnimation}
          key="form"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full lg:w-1/2 input  ${inputStyles}`}
              placeholder="Name"
              maxLength={250}
            />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full lg:w-1/2 input ${inputStyles}`}
              placeholder="Email address"
              maxLength={250}
            />
          </div>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`input w-full resize-none ${inputStyles}`}
            placeholder="Message"
            rows={6}
          ></textarea>
          {/* <input
            type="text"
            id="budgetRange"
            name="budgetRange"
            value={formData.budgetRange}
            onChange={handleChange}
            className="input w-full"
            placeholder="Budget Range"
            maxLength={250}
          /> */}
          {/* <Dropdown
            options={["$2,500 - $5,000", "$5,000 - $10,000", "$10,000+"]}
            onSelectionChange={(selectedOption) =>
              setFormData({
                ...formData,
                budgetRange: selectedOption,
              })
            }
          />{" "} */}
          <Button
            title="Send message"
            callback={() => handleSubmit()}
            disabled={
              submissionStatus === "sending"
              // ||
              // !formData.name ||
              // !formData.email
              //  ||
              // !formData.message ||
              // !formData.budgetRange
            }
            className="!w-full sm:!w-1/2 !max-w-none md:!max-w-[220px] mt-4 md:mt-0"
          />
        </motion.form>
      )}
    </AnimatePresence>
  );
};

export default ContactForm;
