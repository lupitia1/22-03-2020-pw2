const { React, ReactDOM } = window;

class Meme extends React.Component {
  constructor(props) {      
    super(props);
  }

  render() {
    return (
      <div className="meme-image">
        <img src={this.props.image}/>
      </div>
    );
  }
}
