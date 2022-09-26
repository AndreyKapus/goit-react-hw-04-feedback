import React from 'react';
import Controls from './controls';

class Feeback extends React.Component {
  state = {
    value: this.props.initialValue,
  };

  handleButtonClick = event => {
    this.setState(prevState => {
      return {
        value: (prevState.value += 1),
      };
    });
  };

  render() {
    return (
      <div className="feddback">
        <h2>Please leave feedback</h2>

        <Controls handleButtonClick={this.handleButtonClick} />

        <h3>Statistics</h3>
        <div>Gud: {this.state.value}</div>
        <div>Natural: {this.state.value}</div>
        <div>Bad: {this.state.value}</div>
      </div>
    );
  }
}

export default Feeback;
