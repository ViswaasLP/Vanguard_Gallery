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
            <h1 className="titleOne">Covid-19 Project</h1>
            <p className="titleDescription">
              We investigate the pandemic's impact in California’s county jails
              and state prisons.
            </p>
            <button className="mainsiteButton">View Mainsite</button>
          </div>

          <div className="storiesContainer">
            <div className="topStoriesTitle">
              <h1 className="storiesTitle">Top Stories</h1>
            </div>
            <a className="topStoriesContainer">
              <div className="topStoriesImageContainer">
                <div className="topStoriesImageFrame">
                  <img className="topStoriesImage" />
                </div>
              </div>
              <div className="topStoriesArticleContainer">
                <div className="topStoriesDiv">
                  <h3 className="topStoriesArticleTitle">Top Stories</h3>
                  <p className="topStoriesDescription"></p>
                  <div className="topStoriesDiv">
                    <div className="topStoriesDiv">
                      <h4 className="topStoriesArticleTitle">Top Stories</h4>
                      <h4 className="topStoriesArticleTitle">Top Stories</h4>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
