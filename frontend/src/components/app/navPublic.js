import "./navbar.css"

/* <div>

  <NavPublic>
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

          
      </ul>
    </nav>
  </ NavPublic>
</ div> */

const NavPublic = () => {
 
  return (
    <>
       <nav className="nav">
        <a href="/" className="site-title">Acebook</a>
        <ul>
            
          <li>
            <a href="/signup">signup</a>
          </li>

          <li>
            <a href="/login">login</a>
          </li>      
      </ul>
    </nav>
    </>
  );
}

export default NavPublic;


