import "../App.css";
import logo from "../assets/images/logoBlack.png";

function Header() {
  return (
    <div className="homeNav">
      <div className="logoArea">
        <a className="logoLinkHome">
          <img style={{ width: "57px", height: "auto" }} src={logo} />
        </a>
        <h2 className="titlePage">Home</h2>
      </div>
      <div className="navMenuContainer">
        <div className="navMenuHome">
          <button className="navButton">Home</button>
          <button className="navButton">Team</button>
          <button className="navButton">Reporting</button>
          <button className="navButton">Data</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
