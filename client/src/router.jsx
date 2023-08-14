import { Suspense, lazy } from "react";

import Spin from "./components/Spin";
import Layout1 from "./pages/layouts/Layout1";
import Layout2 from "./pages/layouts/Layout2";

const Loader = (Component) => (props) => {
  // const location = useLocation();
  // const user = useSelector(selectAuth);
  // if (
  //   location.pathname !== "/signin" &&
  //   location.pathname !== "/signup" &&
  //   user.isAuthenticated !== true
  // )
  //   return <Navigate to="/signin" replace />;

  return (
    <Suspense fallback={<Spin />}>
      <Component {...props} />
    </Suspense>
  );
};

// Auth
const Signin = Loader(lazy(() => import("./containers/Auth/Signin")));
const Signup = Loader(lazy(() => import("./containers/Auth/Signup")));
const Dashboard = Loader(lazy(() => import("./pages/Dashboard")));

const routes = [
  {
    path: "/",
    element: <Layout1 component={<></>} />,
  },
  {
    path: "signin",
    element: <Layout1 component={<Signin />} />,
  },
  {
    path: "signup",
    element: <Layout1 component={<Signup />} />,
  },
  {
    path: "dashboard",
    element: <Layout2 component={<Dashboard />} />,
  },
];

export default routes;
