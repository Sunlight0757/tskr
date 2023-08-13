import { toast } from "react-toastify";

const ToastHelper = ({ status, msg }) => {
  switch (status) {
    case "Success":
      toast.success(msg);
      break;
    case "Warning":
      toast.warning(msg);
      break;
    case "Error":
      toast.error(msg);
      break;
    default:
      break;
  }
};

export default ToastHelper;
