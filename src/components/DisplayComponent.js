import React, {Component} from 'react';

class DisplayComponent extends Component {
  render() {
    let messgaesArray = this.props.messagesages
    let list = messgaesArray.map((m, index)=>{
      return(
        <div key={index} className="card">
        <div className="card-body">
        <p className="card-text">{m}</p>
        </div>
        </div>
      )

    })


    return (
      <div className="card">

          <h4 className="card-title">State, props, children, function, fun!</h4>
          <h6 className="card-subtitle mb-2 text-muted">Message</h6>

        {list}
      </div>
    );
  }
}
export default DisplayComponent;
