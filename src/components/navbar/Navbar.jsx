import "./navbar.scss";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>BaoDomaine</span>
        </a>
        <a href="">Accueil</a>
        <a href="">A Propos</a>
        <a href="">Contacte</a>
        <a href="">Agents</a>
      </div>
      <div className="rigth">
        <a href="">Connexion</a>
        <a href="" className="register">
          Inscription
        </a>

        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="">Accueil</a>
          <a href="">A Propos</a>
          <a href="">Contacte</a>
          <a href="">Agents</a>
          <a href="">Connexion</a>
          <a href="">Inscription</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
