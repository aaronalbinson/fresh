import React from "react";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";

require("./HorizontalNavbar.scss");

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }
  showSettings(event) {
    event.preventDefault();
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    return (
      <nav className="horizontalNavbar">

          <StaticQuery
            query={graphql`
              query {
                allMarkdownRemark(
                  filter: { frontmatter: { templateKey: { eq: "menu" } } }
                ) {
                  totalCount
                  edges {
                    node {
                      id
                      frontmatter {
                        title
                        menupath
                      }
                    }
                  }
                }
              }
            `}
            render={data => (
              <ul>
                {/* <li>
                  <Link to="/">Home</Link>
                </li> */}
                {data.allMarkdownRemark.edges.map(({ node }) => (
                  <li key={node.id}>
                    <Link className="navbarItem" to={node.frontmatter.menupath}>
                      {node.frontmatter.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          />

      </nav>
    );
  }
}

export default Navbar;
