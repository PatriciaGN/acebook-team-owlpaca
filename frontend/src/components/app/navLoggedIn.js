import "./navbar.css"


const NavLoggedIn = () => {
 
  return (
    <>
       <nav className="nav">
      <a href="/" className="site-title">GrumbleBook</a>
      <ul>
        <li>
          <a href="/">Profile</a>
        </li>
        <li>
          <a href="/posts">Posts</a>
        </li>

        <li>
          <a href="/login">Logout</a>
        </li>
      </ul>
    </nav>
    </>
  );
}

export default NavLoggedIn ;