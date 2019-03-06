import React from "react";
import showdown from "showdown";

require("./AaTextElement.scss");

const converter = new showdown.Converter();

class AaTextElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="TextElement">
          <div className={this.props.lightordark}>
            <div className="content">
              <div className="">
                <div
                  className="left column is-7"
                  dangerouslySetInnerHTML={{
                    __html: converter.makeHtml(
                      this.props.html.replace(/\\/g, "  ")
                    )
                  }}
                />
                {this.props.righthtml && (
                  <div
                    className="right column is-7"
                    dangerouslySetInnerHTML={{
                      __html: converter.makeHtml(
                        this.props.righthtml.replace(/\\/g, "  ")
                      )
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AaTextElement;
