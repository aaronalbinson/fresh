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
            <div className="container content">
              <div className="columns">
                <div
                  className="column is-5 is-offset-1 left"
                  dangerouslySetInnerHTML={{
                    __html: converter.makeHtml(this.props.html)
                  }}
                />
                {this.props.righthtml && (
                  <div
                    className="column is-5 right"
                    dangerouslySetInnerHTML={{
                      __html: converter.makeHtml(this.props.righthtml)
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
