import React from "react";
import Helmet from "react-helmet";
import logo from "../img/logo.svg";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";
import AaFooter from "./AaFooter/AaFooter";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { TransitionPortal } from "gatsby-plugin-transition-link";
import Navbar from "../components/Navbar/Navbar";
import HorizontalNavbar from "../components/HorizontalNavbar/HorizontalNavbar";
import Services from "../components/Services/Services";
import "./all.sass";

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "settings" } } }
        ) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
                companyaddress
                sociallinks {
                  facebook
                  twitter
                  instagram
                }
                menutype
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div id="outer-container">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div>
            <Helmet title={node.frontmatter.title} />
            {node.frontmatter.menutype === "hamburgerside" && <Navbar />}
            <div id="page-wrap">
              <TransitionPortal>
                <div className="top">
                  <Link className="logoLink" to="/">
                    <img
                      className="logo"
                      src={logo}
                      alt="Fresh"
                      style={{ minWidth: "75px", maxWidth: "75px" }}
                    />
                  </Link>
                  {node.frontmatter.menutype === "headerhorizontal" && (
                    <HorizontalNavbar />
                  )}
                  <div className="footerSocial">
                    <ul>
                      {node.frontmatter.sociallinks.facebook ? (
                        <li>
                          <a href={node.frontmatter.sociallinks.facebook}>
                            <FaFacebook size="1em" />
                          </a>
                        </li>
                      ) : (
                        ""
                      )}
                      {node.frontmatter.sociallinks.twitter ? (
                        <li>
                          <a href={node.frontmatter.sociallinks.twitter}>
                            <FaTwitter size="1em" />
                          </a>
                        </li>
                      ) : (
                        ""
                      )}
                      {node.frontmatter.sociallinks.instagram ? (
                        <li>
                          <a href={node.frontmatter.sociallinks.instagram}>
                            <FaInstagram size="1em" />
                          </a>
                        </li>
                      ) : (
                        ""
                      )}
                    </ul>
                  </div>
                </div>
              </TransitionPortal>

              {children}
            </div>

            <AaFooter
              socialLinks={node.frontmatter.sociallinks}
              address={node.frontmatter.companyaddress}
            />
          </div>
        ))}
      </div>
    )}
  />
);

export default TemplateWrapper;
