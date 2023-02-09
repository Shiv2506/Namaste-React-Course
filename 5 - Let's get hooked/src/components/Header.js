import logo from "../../../Images/Food_fire_logo.png";

const Title = () => {
    return (
      <a href="/">
        <img className="logo" alt="logo" src={logo} />
        {/* <h2>Food Villa</h2> */}
      </a>
    );
};

const Header = () => {
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

export default Header;