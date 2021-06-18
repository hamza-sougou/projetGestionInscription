function Sidebar() {
    return (
        <nav className="navbar" >
            <ul className="navbar-menu">
                <li className="navbar-item logo">
                        <a href="#" className="navbar-link">
                        <span className="navbar-title">Sup'Info</span> 
                        <i className="fas fa-chevron-right navbar-icon"></i>
                    </a>
                    </li>
                    <li className="navbar-item">
                    <a href="http://localhost:3000/" className="navbar-link">
                        <i className="fas fa-home navbar-icon"></i>
                        <span className="navbar-title">Accueil</span>
                    </a>
                </li>

                <li className="navbar-item">
                    <a href="http://localhost:3000/inscription" className="navbar-link">
                        <i className="fas fa-sign-in-alt navbar-icon"></i>
                        <span className="navbar-title">Inscription</span>
                    </a>
                </li>
                <li className="navbar-item">
                    <a href="http://localhost:3000/connexion" className="navbar-link">
                        <i className="fas fa-user navbar-icon"></i>
                        <span className="navbar-title">Connexion</span>
                    </a>
                </li>
                <li className="navbar-item">
                    <a href="http://localhost:3000/faq" className="navbar-link">
                        <i className="far fa-question-circle navbar-icon"></i>
                        <span className="navbar-title">FAQ</span>
                    </a>
                </li>
                <li className="navbar-item">
                    <a href="http://localhost:3000/" className="navbar-link">
                        <i className="fas fa-sign-out-alt navbar-icon"></i>
                        <span className="navbar-title">Quitter</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
  }
  
  export default Sidebar;