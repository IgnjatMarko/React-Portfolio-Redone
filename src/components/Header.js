import './Header.css'

function Header() {
    return (
      <header className="grid">
        <div className="logo">
                <img src="imgs/logo.svg" alt="logo" />
        </div>
            <details>
                <summary><img src="/imgs/icons/icons8-hamburger-menu.svg" alt="HamurgerMeni" /></summary>
                    <ul>
                        <li><a href="index.html#home">Home</a></li>
                        <li><a href="index.html#about">About</a></li>
                        <li><a href="index.html#skills">Skills</a></li>
                        <li><a href="index.html#projects">Projects</a></li>
                        <li><a href="index.html#contact">Contact</a></li>
                    </ul>
                
            </details>
            <nav>
                <ul>
                    <li><a href="index.html#home">Home</a></li>
                    <li><a href="index.html#about">About</a></li>
                    <li><a href="index.html#skills">Skills</a></li>
                    <li><a href="index.html#projects">Projects</a></li>
                    <li><a href="index.html#contact">Contact</a></li>
                </ul>
            </nav>
      </header>
    );
  }
  
export default Header;