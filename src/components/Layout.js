import React from "react";
import Helmet from "react-helmet";
import logo from "../img/logo.svg";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";
import AaFooter from "./AaFooter/AaFooter";

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
            {(node.frontmatter.menutype === 'hamburgerside') && <Navbar />}
            <div id="page-wrap">
              <div className="top">
                <Link className="logoLink" to="/">
                  <img
                    className="logo"
                    src={logo}
                    alt="Environ Digital"
                    style={{ width: "90px" }}
                  />
                </Link>
                {(node.frontmatter.menutype === 'headerhorizontal') && <HorizontalNavbar />}
              </div>

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
