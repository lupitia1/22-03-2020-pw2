const { React, ReactDOM } = window;

class Meme extends React.Component {
  constructor(props) {
    super(props);

    this.state = { shared: false };
  }

  render() {
    return (
      <div className="meme-image">
        <div onClick={this.props.onClick}>
          <h3>{this.props.name}</h3>
          <p>{this.props.caption}</p>
          <img src={this.props.image} />
        </div>
        <button
          style={{ display: "block", margin: "auto" }}
          disabled={this.state.shared}
          onClick={() => {
            alert("MEME HAS BEEN SHARED :p");
            this.setState({ shared: true });
          }}
        >
          Share
        </button>
      </div>
    );
  }
}
