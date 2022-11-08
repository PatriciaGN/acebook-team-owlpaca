import "./navbar.css"


const NavLoggedIn = () => {
 
  return (
    <>
       <nav className="nav">
      <a href="/" className="site-title">Acebook</a>
        <li>
          <a href="/">profile</a>
        </li>
        <li>
          <a href="/posts">posts</a>
        </li>

        <li>
          <a href="/login">logout</a>
        </li>
    </nav>
    </>
  );
}

export default NavLoggedIn ;