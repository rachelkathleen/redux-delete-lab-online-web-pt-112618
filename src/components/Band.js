import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        <li>{this.props.band.name} <span> <button onClick= {() => this.props.delete(this.props.band.id)}></button></span></li>
      </div>
    );
  }
};

export default Band;
