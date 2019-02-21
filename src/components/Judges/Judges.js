import React from "react";
import Button from "react-bootstrap/lib/Button";

require("./Judges.scss");

class Judges extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }
  render() {
    return (
      <div className="judges">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="columns is-multiline">
                  {this.props.judges.map(judge => (
                    <div className="column is-3">
                      <div class="content">
                        <h3>{judge.judgename}</h3>
                        <h4>{judge.judgecompany}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Judges;
