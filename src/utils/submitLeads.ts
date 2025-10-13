import axios from "axios";
import toast from "react-hot-toast";
import { FormData } from "@constants";

export const submitLead = async (
  formData: FormData,
  isEmailValid: boolean,
  setStatus: (status: "sending" | "success" | "failed") => void
) => {
  console.log("Submitting lead with data:", formData, isEmailValid);
  if (!formData.name || !formData.email ) {
    return toast.error("Please fill in name and email");
  }

  if (!isEmailValid) {
    toast.error("Please enter a valid email");
    return;
  }

  // if (formData.message.length < 20) {
  //   toast.error("Message must be more than 20 characters");
  //   return;
  // }

  // if (formData.budgetRange.length < 4) {
  //   toast.error("Budget must be greater than 3 characters");
  //   return;
  // }

  setStatus("sending");

  try {
    toast.promise(axios.get("/api/add-lead", { params: formData }), {
      loading: "Submitting...",
      success: (res) => {
        setStatus("success");
        return "Submitted successfully";
      },
      error: (err) => {
        console.error(err);
        setStatus("failed");
        return "Submission failed";
      },
    });
  } catch (err) {
    console.error(err);
    setStatus("failed");
  }
};
