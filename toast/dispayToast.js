import toast from "react-hot-toast";

export const displaySuccess = (message) => {
  return toast.success(message);
};

export const displayError = (message) => {
  return toast.error(message);
};
