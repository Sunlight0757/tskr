import { Suspense, lazy } from "react";
import Spin from "./components/Spin";

const SuspenseLoader = (Component) => (props) => {
  return (
    <Suspense fallback={<Spin />}>
      <Component {...props} />
    </Suspense>
  );
};

export default SuspenseLoader;
