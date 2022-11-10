import "./navbar.css"


const NavLoggedIn = () => {
 
  return (
    <>
       <nav className="nav">
      <a href="/" className="site-title">Acebook</a>
      <ul>
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
    </>
  );
}

export default NavLoggedIn ;