import "./navbar.css"
// import NavLoggedIn from "./navLoggedIn"
// import NavPublic from "./navPublic"

// const Navbar = () => {
//   //let token = window.localStorage.getItem("token");
//   // console.log(token)
//   let token = null
//   return (
//     <>
//       { token === null ? <NavPublic /> : <NavLoggedIn /> }  
//     </>
//   );
// };

// export default Navbar;



export default function Navbar() {
 
  return (
    <nav className="nav">
      <a href="/" className="site-title">Acebook</a>
      <ul>
        
        <li>
            <a href="/signup">signup</a>
        </li>
          <li>
            <a href="/login">login</a>
          </li>
          <li>
          <a href="/">profile</a>
        </li>
        <li>
            <a href="/posts">posts</a>
        </li>
        <li>
          <a href="/login">logout</a>
        </li>
        
      </ul>
    </nav>
  )
}

