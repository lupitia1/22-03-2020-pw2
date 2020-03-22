const { React, ReactDOM } = window;
const { Link } = window.ReactRouterDOM;

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <div className="header-text">
          <p>FAKE GAG</p>
        </div>
        <ul className="navbar">
          <li>
            <Link to="/">Memes</Link>
          </li>
          <li>
            <Link to="/meme-form">Add meme</Link>
          </li>
          <li>
            <Link to="/meme-view">Meme of the day</Link>
          </li>
        </ul>
      </div>
    );
  }
}
