import "./navbar.css"
import NavLoggedIn from "./navLoggedIn"
import NavPublic from "./navPublic"

const Navbar = () => {
  const token = window.localStorage.getItem("token");
  return (
    <>
      { token === true ? <NavLoggedIn /> : <NavPublic />}
    </>
  );
};

export default Navbar;



// export default function Navbar() {
//   const token = window.localStorage.getItem("token")
//   return (
//     <nav className="nav">
//       <a href="/" className="site-title">Acebook</a>
//       <ul>
        
//         <li>
//             <a href="/signup">signup</a>
//         </li>
//           <li>
//             <a href="/login">login</a>
//           </li>
//           <li>
//           <a href="/">profile</a>
//         </li>
//         <li>
//             <a href="/posts">posts</a>
//         </li>
//         <li>
//           <a href="/login">logout</a>
//         </li>
        
//       </ul>
//     </nav>
//   )
// }

