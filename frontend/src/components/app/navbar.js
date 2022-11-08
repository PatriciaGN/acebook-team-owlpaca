import "./navbar.css"

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
            <a href="/post">posts</a>
        </li>
      </ul>
    </nav>
  )
}

