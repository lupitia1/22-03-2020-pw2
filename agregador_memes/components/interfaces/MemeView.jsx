const { React, ReactDOM } = window;

class MemeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dailyMeme: null, daily: false };
  }

  componentDidMount = async () => {
    if (!this.props.location.state) {
      this.getMemes("http://localhost:5500/src/meme_stub.json");
    } else {
      this.setState({ dailyMeme: this.props.location.state, daily: true });
    }
  };

  getMemes = sourceUrl => {
    fetch(sourceUrl)
      .then(res => res.json())
      .then(response => {
        this.setState({ dailyMeme: response["daily-meme"] });
      })
      .catch(e => {
        console.error(e);
      });
  };

  render() {
    if (!this.state.dailyMeme) {
      return <div>Loading</div>;
    }

    return (
      <div className="totally-centered">
        <h1>{!this.state.daily ? "Daily Meme" : this.state.dailyMeme.name}</h1>
        <Meme image={this.state.dailyMeme.url} {...this.state.dailyMeme}></Meme>
      </div>
    );
  }
}
