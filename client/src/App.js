import { useNavigate, useRoutes } from "react-router-dom";
import { useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import router from "./router";
import Navbar from "./pages/layouts/Navbar";
import Footer from "./pages/layouts/Footer";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser } from "./store/userSlice";

const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decoded = jwtDecode(localStorage.jwtToken);
    dispatch(setCurrentUser(decoded));
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      localStorage.removeItem("jwtToken");
      setAuthToken(false);
      dispatch(setCurrentUser({}));
      navigate("/signin");
    }
  }

  const content = useRoutes(router);

  return (
    <>
      <ToastContainer />
      <Navbar />
      {content}
      <Footer />
    </>
  );
};

export default App;
