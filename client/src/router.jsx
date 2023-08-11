import { Suspense, lazy } from "react";

import SuspenseLoader from "./components/SuspenseLoader";

const Loader = (Component) => (props) => {
  return (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );
};

// Auth
const Signin = Loader(lazy(() => import("./containers/Signin")));
const Signup = Loader(lazy(() => import("./containers/Signup")));

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
