import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
const NavBar = () => {
  return (
    <div className="w-full h-[5rem] bg-blue-200 flex justify-between items-center">
      <nav className="w-full px-4 shadow ">
        <div className="container flex items-center  justify-between h-[5rem] ">
          <div>
            <img
              src="https://sony.scene7.com/is/content/sonyglobalsolutions/sony-logo?$S7Product$"
              alt="logo"
              className="w-[8rem] h-[3rem] object-contain bg-black  border-2 border-blue-500 ml-8"
            />
          </div>
          <ul className="flex items-center gap-5 mr-10 ">
            <Link to="/">
              <li className="text-xl font-medium">
                <a href="#">Home</a>
              </li>
            </Link>
            <Link to="/card"></Link>
            <li className="text-xl font-medium">
              <a href="#">Card</a>
            </li>

            <li className="text-xl font-medium">
              <Link to={"/Login-page"}>Login</Link>
            </li>
            <li className="text-2xl font-bold ">
              <a href="#">
                <CiUser />
              </a>
            </li>
          </ul>
        </div>
        <div></div>
      </nav>
    </div>
  );
};

export default NavBar;
