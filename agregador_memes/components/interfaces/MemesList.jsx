const { React, ReactDOM } = window;

class MemesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      memes: []
    };
  }
  componentDidMount = async () => {
    this.getMemes("http://localhost:5500/src/meme_stub.json");
  };

  getMemes = sourceUrl => {
    fetch(sourceUrl)
      .then(res => res.json())
      .then(response => {
        console.log(response);
        this.setState({ memes: response["memes-list"] });
      })
      .catch(e => {
        console.error(e);
      });
  };

  render() {
    return (
      <div className="body-content">
        <h1>Memes</h1>
        {this.state.memes.map(meme => {
          return (
            <Meme
              key={meme.id}
              image={meme.url}
              {...meme}
              onClick={() => this.props.history.push("/meme-view", { ...meme })}
            ></Meme>
          );
        })}
      </div>
    );
  }
}
