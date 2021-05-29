import '../App.css';
import logo from '../assets/images/Vanguard_logo.png'

function Header() {
    return (
      <div className="homeNav">
        <div className="nav">
          <div className="logoArea">
            <a className="logoLink">
              <img style={{width: '57px',height: 'auto'}} src={logo}/>
            </a>
            <h2 className="titlePage">Home</h2>
          </div>
          <div className="space" style={{width: '500px'}}></div>
          <div className="navMenu">
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
  