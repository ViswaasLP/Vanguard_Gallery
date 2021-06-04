import "../App.css";
import prison from "../assets/video/prison_video.mp4";
import thumbnail from "../assets/images/Article Thumbnails/San-Quentin-Inmates-130x87.jpg";
import Teamcard from "./Teamcard";
import internImage2 from "../assets/images/Intern_Profiles/Angela.jpg";
import interns from "../assets/images/Intern_Profiles/interns.js";

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
                  <h3 className="topStoriesArticleTitle">
                    COVID-19 Active Cases in Single Digits Across Sacramento,
                    SF, Santa Clara and Alameda County Jails
                  </h3>
                  <p className="topStoriesDescription">
                    As of May 24, there are two active asymptomatic COVID-19
                    cases among the incarcerated population. One COVID-19 case
                    was resolved in custody. Minimal testing, poor quarantine
                    protocols, and lack of proper testing suggest that there may
                    be more cases than Alameda County Sheriff’s Office (ACSO)
                    reports.
                  </p>
                  <div className="topStoriesAuthorContainer">
                    <div className="topStoriesCredit">
                      <h4 className="topStoriesBy">By </h4>
                      <h4 className="topStoriesAuthors">
                        Aparna Komarla, Tiffany Devlin, Aziza Nussipov, Minerva
                        Melendrez, Angela Khov &#38; Alexander Ramirez
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a className="topStoriesContainer">
              <div className="topStoriesImageContainer">
                <div className="topStoriesImageFrame">
                  <img className="topStoriesImage" src={thumbnail} />
                </div>
              </div>
              <div className="topStoriesArticleContainer">
                <div className="topStoriesDiv">
                  <h3 className="topStoriesArticleTitle">
                    COVID-19 Active Cases in Single Digits Across Sacramento,
                    SF, Santa Clara and Alameda County Jails
                  </h3>
                  <p className="topStoriesDescription">
                    As of May 24, there are two active asymptomatic COVID-19
                    cases among the incarcerated population. One COVID-19 case
                    was resolved in custody. Minimal testing, poor quarantine
                    protocols, and lack of proper testing suggest that there may
                    be more cases than Alameda County Sheriff’s Office (ACSO)
                    reports.
                  </p>
                  <div className="topStoriesAuthorContainer">
                    <div className="topStoriesCredit">
                      <h4 className="topStoriesBy">By </h4>
                      <h4 className="topStoriesAuthors">
                        Aparna Komarla, Tiffany Devlin, Aziza Nussipov, Minerva
                        Melendrez, Angela Khov &#38; Alexander Ramirez
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="recognition">
        <div className="headlineDiv">
          <div className="decoLineLeft"></div>
          <h1 className="colTitle">Collaborators</h1>
          <div className="decoLineRight"></div>
        </div>
        <div className="colDiv">
          <div className="colLogo"></div>
          <div className="colText">
            <div className="colDiv1">
              <p className="colPara">
                Access the UCLA Covid behind bars master database
              </p>
              <a className="colLink">here</a>
            </div>
            <div className="colDiv1">
              <p className="colPara">
                Access our Covid-19 Data for (all 6 counties) county jail
                systems
              </p>
              <a className="colLink">here</a>
              <p className="colPara">and CDCR</p>
              <a className="colLink">here</a>
            </div>
          </div>
        </div>
      </section>
      <section className="team">
        <div className="headlineDiv">
          <div className="decoLineLeft"></div>
          <h1 className="colTitle">Meet the Team</h1>
          <div className="decoLineRight"></div>
        </div>
        <div className="teamMembers">
        {interns.map((user) => (
          <Teamcard
          photo={user.path}
          name={user.name}
          description={user.description}
        ></Teamcard>
        ))}

        </div>
      </section>
    </>
  );
}

export default Home;
