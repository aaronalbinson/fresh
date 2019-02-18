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
          <div className="container content">
            <div className="columns">
              <div
                className="column"
                dangerouslySetInnerHTML={{
                  __html: converter.makeHtml(this.props.html)
                }}
              />
              {this.props.righthtml && (
                <div
                  className="column"
                  dangerouslySetInnerHTML={{
                    __html: converter.makeHtml(this.props.righthtml)
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AaTextElement;
