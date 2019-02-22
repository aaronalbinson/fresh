import React from "react";
import { Link } from "gatsby";
import TransitionLink from "gatsby-plugin-transition-link";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { StaticQuery, graphql } from "gatsby";

require("./HorizontalNavbar.scss");

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: false };
    this.handleClick = this.handleClick.bind(this);
  }

  // function to handle the click
  handleClick() {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu
    }));
  }

  render() {
    return (
      <React.Fragment>
        <div className="is-visible-mobile menu-opener">
          <a onClick={this.handleClick} href="#">
            {this.state.showMenu ? (
              <svg
                viewBox="0 0 105 105"
                width="30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4l97 97m0-97L4 101"
                  stroke="#000"
                  stroke-width="10"
                />
              </svg>
            ) : (
              <svg
                viewBox="0 0 135 110"
                width="30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 5h135m0 100H0m0-50h135"
                  stroke="#000"
                  stroke-width="10"
                />
              </svg>
            )}
          </a>
        </div>
        <nav
          className={
            this.state.showMenu
              ? "menuactive horizontalNavbar"
              : "menuinactive horizontalNavbar"
          }
        >
          <StaticQuery
            query={graphql`
              query {
                allMarkdownRemark(
                  filter: { frontmatter: { templateKey: { eq: "menu" } } }
                  sort: { fields: [frontmatter___menuorder], order: ASC }
                ) {
                  totalCount
                  edges {
                    node {
                      id
                      frontmatter {
                        title
                        menupath
                        menuorder
                      }
                    }
                  }
                }
              }
            `}
            render={data => (
              <div>
                <ul>
                  {/* <li>
                  <Link to="/">Home</Link>
                </li> */}
                  {data.allMarkdownRemark.edges.map(({ node }) => (
                    <li key={node.id}>
                      <AniLink
                        fade
                        className="navbarItem"
                        to={node.frontmatter.menupath}
                      >
                        {node.frontmatter.title}
                      </AniLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          />
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
