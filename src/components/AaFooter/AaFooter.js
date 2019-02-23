import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import AniLink from "gatsby-plugin-transition-link/AniLink";

require("./AaFooter.scss");

class AaFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  render() {
    return (
      <footer className="footer">
        <div className="footerMenu">
          <ul>
            <li>
              <AniLink to="/rules">Rules</AniLink>
            </li>
            <li>
              <AniLink to="/accessibility">Accessibility</AniLink>
            </li>
            <li>
              <AniLink to="/privacy-policy">Privacy Policy</AniLink>
            </li>
            <li>
              <AniLink to="/terms-and-conditions">Terms & Conditions</AniLink>
            </li>
          </ul>
        </div>
        {/* <div className="footerSocial">
          <ul>
            {this.props.socialLinks.facebook ? (
              <li>
                <a href={this.props.socialLinks.facebook}>
                  <FaFacebook size="1em" />
                </a>
              </li>
            ) : (
              ""
            )}
            {this.props.socialLinks.twitter ? (
              <li>
                <a href={this.props.socialLinks.twitter}>
                  <FaTwitter size="1em" />
                </a>
              </li>
            ) : (
              ""
            )}
            {this.props.socialLinks.instagram ? (
              <li>
                <a href={this.props.socialLinks.instagram}>
                  <FaInstagram size="1em" />
                </a>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div> */}
        {/* <div className="footerSocial">{this.props.socialLinks}</div> */}
      </footer>
    );
  }
}

export default AaFooter;
