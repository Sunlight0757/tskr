import { Suspense, lazy } from "react";

import Spin from "./components/Spin";

const Loader = (Component) => (props) => {
  return (
    <Suspense fallback={<Spin />}>
      <Component {...props} />
    </Suspense>
  );
};

// Auth
const Signin = Loader(lazy(() => import("./containers/Auth/Signin")));
const Signup = Loader(lazy(() => import("./containers/Auth/Signup")));

const routes = [
  {
    path: "signin",
    element: <Signin />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
];

export default routes;
