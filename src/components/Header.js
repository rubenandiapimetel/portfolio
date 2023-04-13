import NavLinks from "./NavLinks";
import logo from "../images/logo.jpg";

const Header = () => {

  return (
    <header className="header">
      <img className="logo" src={logo} alt="ruben' Logo"  />
      <NavLinks />
    </header>
  );
};

export default Header;
