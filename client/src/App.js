import { useRoutes } from "react-router-dom";

import router from "./router";
import Navbar from "./pages/layouts/Navbar";
import Footer from "./pages/layouts/Footer";

const App = () => {
  const content = useRoutes(router);

  return (
    <>
      <Navbar />
      {content}
      <Footer />
    </>
  );
};

export default App;
