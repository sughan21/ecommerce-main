import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import "./compontents/style/navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar-del">
      <div className="nav-del ">
        <div>
          <Link to="/">
            <img
              src="https://sony.scene7.com/is/content/sonyglobalsolutions/sony-logo?$S7Product$"
              alt="logo"
              className="sony-logo"
            />
          </Link>
        </div>
        <ul className="navbar-rig-del">
          <Link to="/">
            <li className="user-nav1 ">
              <div>Home</div>
            </li>
          </Link>
          <Link to="/card">
            <li className="user-nav2 ">
              <div>Card</div>
            </li>
          </Link>

          <li className="user-nav3">
            <Link to={"/Login-page"}>Login</Link>
          </li>
          <li className=" user-nav-icon ">
            <div>
              <CiUser />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

// import { Link } from "react-router-dom";
// import { CiUser } from "react-icons/ci";
// const NavBar = () => {
//   return (
//     <div className="w-full h-[5rem] bg-blue-200 flex justify-between items-center">
//       <nav className="w-full px-4 shadow ">
//         <div className="container flex items-center  justify-between h-[5rem] ">
//           <div>
//             <Link to="/">
//               <img
//                 src="https://sony.scene7.com/is/content/sonyglobalsolutions/sony-logo?$S7Product$"
//                 alt="logo"
//                 className="w-[8rem] h-[3rem] object-contain bg-black  border-2 border-blue-500 ml-8 cursor-pointer"
//               />
//             </Link>
//           </div>
//           <ul className="flex items-center gap-5 mr-10  ">
//             <Link to="/">
//               <li className="text-xl font-medium cursor-pointer">
//                 <a href="#">Home</a>
//               </li>
//             </Link>
//             {/* <Link to="/card"> */}
//             <li className="text-xl font-medium cursor-pointer ">
//               <a href="#">Card</a>
//             </li>
//             {/* </Link> */}

//             <li className="text-xl font-medium cursor-pointer">
//               <Link to={"/Login-page"}>Login</Link>
//             </li>
//             <li className="text-3xl font-bold ">
//               <a href="#">
//                 <CiUser />
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div></div>
//       </nav>
//     </div>
//   );
// };

// export default NavBar;
