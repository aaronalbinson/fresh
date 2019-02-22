import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";

require("./AaFooter.scss");

class AaFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  render() {
    var markdown = require("markdown").markdown;
    const newAddressHTML = markdown.toHTML(this.props.address);
    return (
      <footer className="footer">
        {/* <div className="footerAddress">{ReactHtmlParser(newAddressHTML)}</div> */}
        <div className="footerMenu">
          <ul>
            <li>
              <a href="/rules">Rules</a>
            </li>
            <li>
              <a href="/accessibility">Accessibility</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms-and-conditions">Terms & Conditions</a>
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
