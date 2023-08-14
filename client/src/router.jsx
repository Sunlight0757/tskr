import { Suspense, lazy } from "react";

import Spin from "./components/Spin";
import Layout1 from "./pages/layouts/Layout1";
import Layout2 from "./pages/layouts/Layout2";

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
const Dashboard = Loader(lazy(() => import("./pages/Dashboard")));
const Bids = Loader(lazy(() => import("./pages/Bids")));
const EditProfile = Loader(lazy(() => import("./pages/EditProfile")));
const Finances = Loader(lazy(() => import("./pages/Finances")));
const Messages = Loader(lazy(() => import("./pages/Messages")));
const Projects = Loader(lazy(() => import("./pages/Projects")));
const Proposals = Loader(lazy(() => import("./pages/Proposals")));

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
  {
    path: "bids",
    element: <Layout2 component={<Bids />} />,
  },
  {
    path: "edit-profile",
    element: <Layout2 component={<EditProfile />} />,
  },
  {
    path: "finances",
    element: <Layout2 component={<Finances />} />,
  },
  {
    path: "messages",
    element: <Layout2 component={<Messages />} />,
  },
  {
    path: "my-projects",
    element: <Layout2 component={<Projects />} />,
  },
  {
    path: "my-proposals",
    element: <Layout2 component={<Proposals />} />,
  },
];

export default routes;
