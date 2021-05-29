import "../App.css";
import prison from "../assets/video/prison_video.mp4";

function Home() {
  return (
    <>
    <section className="home">
      <video className="videoTag" autoPlay loop muted>
        <source src={prison} type="video/mp4" />
      </video>
      
        <div className="homeContainer">
          <div className="logoContainer">
            <h1 className="titleOne">Vanguard's</h1>
            <h1 className="titleTwo">Covid-19 Project</h1>
            <p className="titleDescription">
              We investigate the pandemic's impact in California’s county jails
              and state prisons.
            </p>
            <button className="mainsiteButton">View Mainsite</button>
          </div>
          <div className="storiesContainer"></div>
        </div>
      </section>
    </>
  );
}

export default Home;
