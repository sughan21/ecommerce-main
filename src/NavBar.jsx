import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="w-full h-[5rem] bg-blue-200 flex justify-between items-center">
      <nav className="w-full px-4 shadow ">
        <div className="container flex items-center  justify-between h-[5rem] mx-auto">
          <div>
            <img
              src="https://www.shutterstock.com/image-vector/clothing-store-logo-design-inspiration-600nw-2104754999.jpg"
              alt="logo"
              className="w-[80px] h-auto object-contain ml-10"
            />
          </div>
          <ul className="flex items-center gap-8 mr-10">
            <Link to="/">
              <li className="text-xl font-medium">
                <a href="#">Home</a>
              </li>
            </Link>
            {/* <Link to ='/About'></Link> */}
            <li className="text-xl font-medium">
              <a href="#">About</a>
            </li>
            <Link to="/Contact">
              <li className="text-xl font-medium">
                <a href="#">Contact</a>
              </li>
            </Link>
            <li className="text-xl font-medium">
              <Link to={"/Login-page"}>Login</Link>
            </li>
          </ul>
        </div>
        <div></div>
      </nav>
    </div>
  );
};

export default NavBar;
