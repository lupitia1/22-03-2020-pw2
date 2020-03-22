const { React, ReactDOM } = window;

class MemeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="totally-centered">
        <div className="card-container"></div>
      </div>
    );
  }
}
