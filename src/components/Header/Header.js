import "./Header.css";

function Header({ name, tagline }) {
  return (
    <header className="header">
      <p>{name}</p>
      <i>{tagline}</i>
    </header>
  );
}

export default Header;
