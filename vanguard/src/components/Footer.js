import "../App.css";

function Footer() {
  return (
      <>
    <div id="Footer1" class="mainfooter footer">
      <div class="w-container">
        <div class="w-row">
          <div class="social w-col w-col-6">
            <div class="logo-text footer">Davis Vanguard</div>
            <div class="footer-slogan">Sign up for our newsletter</div>
            <div class="newsletter-form w-form">
              <form
                id="wf-form-newsletter"
                name="wf-form-newsletter"
                data-name="Newsletter"
                class="w-clearfix"
              >
                <input
                  type="email"
                  id="email"
                  name="email"
                  data-name="Email"
                  placeholder="Email Address"
                  maxlength="256"
                  required=""
                  class="newsletter-field w-input"
                /><input
                  type="submit"
                  value="Subscribe"
                  data-wait="Wait..."
                  wait="Wait..."
                  class="newsletter-button w-button"
                />
              </form>
              <div class="success-message w-form-done">
                <p>Thank you! You’ll receive an email shortly.</p>
              </div>
              <div class="w-form-fail">
                <p>Oops! Something went wrong while submitting the form :(</p>
              </div>
            </div>
            <div class="social-icon-group">
              <a
                href="mailto:apkomarla@ucdavis.edu"
                class="link-block-2 w-inline-block"
                ><img
                  src="https://uploads-ssl.webflow.com/5fff64ad1eeff2890652759c/5fff64aec2b364403724c183_email-icon-white.svg"
                  width="17"
                  alt="" /></a
              ><a
                href="https://twitter.com/CovidPrisonProj"
                target="_blank"
                class="link-block-4 w-inline-block"
                ><img
                  src="https://uploads-ssl.webflow.com/5fff64ad1eeff2890652759c/5fff64aec2b3646d5924c192_twitter-icon.svg"
                  alt="" /></a
              ><a
                href="https://www.facebook.com/davisvanguard"
                target="_blank"
                class="link-block-5 w-inline-block"
                ><img
                  src="https://uploads-ssl.webflow.com/5fff64ad1eeff2890652759c/5fff64aec2b3645baa24c184_facebook-icon.svg"
                  alt=""
              /></a>
            </div>
          </div>
          <div class="w-col w-col-3">
            <h4 class="footertitle">Company</h4>
            <a href="#" class="footerlink in-footer">Home</a
            ><a href="#" class="footerlink in-footer">Team</a
            ><a href="#" class="footerlink in-footer">Reporting</a
            ><a href="#" class="footerlink in-footer">Data</a>
          </div>
          <div class="w-col w-col-3">
            <h4 class="footertitle">LEGAL</h4>
            <a
              href="https://www.davisvanguard.org/privacy-policy/"
              class="footerlink in-footer"
              >Privacy Policy</a
            ><a
              href="https://www.davisvanguard.org/terms-of-use/"
              class="footerlink in-footer"
              >Terms of Use</a
            >
          </div>
        </div>
      </div>
    </div>
    <div id="Footer2" class="subfooter footer copyright">
      <div class="w-container">
        <div class="subfootercontainer">
          <div class="subfootertext">
            Copyright 2021 Davis Vanguard. All Rights Reserved | Designed by
          </div>
          <a
            href="https://viswaasprabu.com/"
            target="_blank"
            class="subfooterlink"
            >Viswaas</a
          >
        </div>
      </div>
    </div>
    </>
  );
}

export default Footer;
