import NavBar from "./NavBar";
import Footer from "./compontents/footer/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};
export default App;
