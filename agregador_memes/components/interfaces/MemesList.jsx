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
  }

  getMemes = (sourceUrl) => {
    fetch(sourceUrl)
      .then((res) => res.json())
      .then((response) => {
        console.log(response)
        this.setState({ memes: response["memes-list"]});
      })
      .catch((e) => {
        console.error(e);
      });
  }


  render() {
    return (
      <div className="body-content">
        <div className={"body-content"}></div>
        <div className="centering">
          <h1>Memes</h1>
          {this.state.memes.map((meme)=>{
            return <Meme image={meme.url}></Meme>
          })}
        </div>
      </div>
    );
  }
}

