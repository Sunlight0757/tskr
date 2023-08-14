import { useLocation, useNavigate, useRoutes } from "react-router-dom";
import { useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import router from "./router";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser } from "./store/userSlice";
import { useEffect } from "react";

const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
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
    } else if (
      location.pathname !== "/signin" &&
      location.pathname !== "/signup"
    ) {
      navigate("/signin");
    }
  }, [localStorage.jwtToken, dispatch, location.pathname, navigate]);

  const content = useRoutes(router);

  return (
    <>
      <ToastContainer />
      {content}
    </>
  );
};

export default App;
