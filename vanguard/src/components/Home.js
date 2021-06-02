import "../App.css";
import prison from "../assets/video/prison_video.mp4";
import thumbnail from "../assets/images/Article Thumbnails/San-Quentin-Inmates-130x87.jpg"

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
                  <img className="topStoriesImage" src={thumbnail} />
                </div>
              </div>
              <div className="topStoriesArticleContainer">
                <div className="topStoriesDiv">
                  <h3 className="topStoriesArticleTitle">COVID-19 Active Cases in Single Digits Across Sacramento, SF, Santa Clara and Alameda County Jails</h3>
                  <p className="topStoriesDescription">As of May 24, there are two active asymptomatic COVID-19 cases among the incarcerated population. One COVID-19 case was resolved in custody. Minimal testing, poor quarantine protocols, and lack of proper testing suggest that there may be more cases than Alameda County Sheriff’s Office (ACSO) reports.</p>
                  <div className="topStoriesAuthorContainer">
                    <div className="topStoriesCredit">
                      <h4 className="topStoriesBy">By </h4>
                      <h4 className="topStoriesAuthors">Aparna Komarla, Tiffany Devlin, Aziza Nussipov, Minerva Melendrez, Angela Khov &#38; Alexander Ramirez</h4>
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
